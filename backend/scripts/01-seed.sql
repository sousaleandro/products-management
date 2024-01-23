USE NunesSports;

DELETE FROM products;

INSERT INTO products (name, code, description, price) VALUES
    ('Product 1', 'P001', 'Description 1', 19.99),
    ('Product 2', 'P002', 'Description 2', 29.99),
    ('Product 3', 'P003', 'Description 3', 39.99);