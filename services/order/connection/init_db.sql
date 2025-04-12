CREATE DATABASE postgres;

CREATE TABLE market_data (
    id SERIAL PRIMARY KEY,         
    timestamp BIGINT NOT NULL,     
    metal VARCHAR(10) NOT NULL,    
    currency VARCHAR(10) NOT NULL, 
    exchange VARCHAR(50) NOT NULL, 
    symbol VARCHAR(50) NOT NULL,   
    prev_close_price NUMERIC(12, 2),
    open_price NUMERIC(12, 2),     
    low_price NUMERIC(12, 2),      
    high_price NUMERIC(12, 2),     
    open_time BIGINT NOT NULL,     
    price NUMERIC(12, 2),          
    ch NUMERIC(12, 2),             
    chp NUMERIC(12, 2),            
    ask NUMERIC(12, 2),            
    bid NUMERIC(12, 2),            
    price_gram_24k NUMERIC(12, 4), 
    price_gram_22k NUMERIC(12, 4), 
    price_gram_21k NUMERIC(12, 4), 
    price_gram_20k NUMERIC(12, 4), 
    price_gram_18k NUMERIC(12, 4), 
    price_gram_16k NUMERIC(12, 4), 
    price_gram_14k NUMERIC(12, 4), 
    price_gram_10k NUMERIC(12, 4),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    deleted BOOLEAN DEFAULT false    
);

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
  quantity DECIMAL(12, 2),                       
  total_value DECIMAL(12, 2),                    
  buy_price DECIMAL(12, 2),                      
  market_data_id INT REFERENCES market_data(id),  
  status_id INT REFERENCES gold_status(id),           
  location VARCHAR(100),                         
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
  deleted BOOLEAN DEFAULT false                  
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,                 
  gold_id INT NOT NULL,                 
  weight NUMERIC(10,2) NOT NULL,        
  price_per_gram NUMERIC(10,2) NOT NULL,
  total_price NUMERIC(10,2) NOT NULL,   
  market_data_id INT NOT NULL,          
  status_id INT NOT NULL,               
  location TEXT,                        
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
