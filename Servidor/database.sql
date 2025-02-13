CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(200),
    price FLOAT NOT NULL,
    image_path VARCHAR(255) 
);
