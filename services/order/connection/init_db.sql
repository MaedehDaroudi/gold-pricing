
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
