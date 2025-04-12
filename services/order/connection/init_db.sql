CREATE DATABASE postgres;

CREATE TABLE IF NOT EXISTS public.roles
(
    name text COLLATE pg_catalog."default" NOT NULL,
    create_date date DEFAULT CURRENT_TIMESTAMP,
    deleted integer DEFAULT 0,
    id integer NOT NULL DEFAULT nextval('market_data_id_seq'::regclass),
    CONSTRAINT roles_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.roles
    OWNER to postgres;

CREATE TABLE IF NOT EXISTS public.users
(
    name "char",
    phone "char",
    email "char",
    create_date timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    update_date date DEFAULT CURRENT_TIMESTAMP,
    id integer NOT NULL DEFAULT nextval('market_data_id_seq'::regclass),
    deleted boolean DEFAULT false,
    role_id integer,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT role_id_fk FOREIGN KEY (role_id)
        REFERENCES public.roles (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to postgres;

CREATE INDEX IF NOT EXISTS fki_role_id_fk
    ON public.users USING btree
    (role_id ASC NULLS LAST)
    TABLESPACE pg_default;





CREATE TABLE gold_status (
  id SERIAL PRIMARY KEY,           
  name VARCHAR(50) UNIQUE NOT NULL, 
  description TEXT                  
);

INSERT INTO gold_status (name, description) 
VALUES 
  ('active', 'طلا فعال است و برای خرید یا فروش در دسترس است.'),
  ('inactive', 'طلا به صورت موقت غیرفعال است و قابل استفاده یا فروش نیست.'),
  ('deleted', 'طلا حذف شده و دیگر در سیستم موجود نیست.'),
  ('sold', 'طلا فروخته شده و دیگر موجود نیست.'),
  ('reserved', 'طلا رزرو شده است و هنوز به فروش نرفته.'),
  ('pending', 'سفارش طلا در وضعیت تایید یا بررسی است.'),
  ('out_of_stock', 'طلا موجودی ندارد و در حال حاضر برای فروش در دسترس نیست.'),
  ('damaged', 'طلا آسیب دیده و غیر قابل فروش است.'),
  ('in_transit', 'طلا در حال انتقال است.');


CREATE TABLE gold_inventory (
  id SERIAL PRIMARY KEY,                    
  location VARCHAR(100),                         
  buy_price DECIMAL(12, 2),                      
  total_value DECIMAL(12, 2),                    
  initialQuantity DECIMAL(12, 2),                       
  currentQuantity  DECIMAL(12, 2),                       
  status_id INT REFERENCES gold_status(id),           
  market_data_id INT REFERENCES market_data(id),  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
  deleted BOOLEAN DEFAULT false                  
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  location TEXT,                        
  user_id INT NOT NULL,                 
  gold_id INT NOT NULL,                 
  status_id INT NOT NULL,               
  market_data_id INT NOT NULL,          
  weight NUMERIC(10,2) NOT NULL,        
  total_price NUMERIC(10,2) NOT NULL,   
  price_per_gram NUMERIC(10,2) NOT NULL,
  create_date TIMESTAMP DEFAULT NOW(),  
  deleted BOOLEAN DEFAULT FALSE         
);

CREATE TABLE order_status (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) UNIQUE NOT NULL,
   create_date TIMESTAMP DEFAULT NOW(),  
  deleted BOOLEAN DEFAULT FALSE                
);

INSERT INTO order_status (name, description) 
VALUES
('pending'),
('processing'),
('shipped'),
('delivered'),
('canceled'),
('failed');
