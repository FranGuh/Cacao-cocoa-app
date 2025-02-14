from flask import Flask, request, jsonify, send_file;
from psycopg2 import connect, extras;

app = Flask(__name__)

host = 'localhost'
port = 5432
dbname = 'Cacao-cocoa'
user = 'postgres'
password = 'root'

def get_connection():
    conn = connect(host=host,
        port=port,
        dbname=dbname,
        user=user,
        password=password)
    return conn

@app.get('/api/products')
def get_users():
    conn = get_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    cur.execute('SELECT * FROM product')
    users = cur.fetchall()

    cur.close()
    conn.close()

    return jsonify(users)

@app.post('/api/products')
def post_users():
    new_product = request.get_json()
    name = new_product['name']
    description = new_product['description']
    price = new_product['price']
    image_path = new_product['image_path']
    category = new_product['category']

    conn = get_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    cur.execute('INSERT INTO product (name, description, price, image_path, category) VALUES (%s, %s, %s, %s, %s) RETURNING *',
                (name, description, price, image_path, category))
    
    new_created_product = cur.fetchone()
    print(new_created_product)
    conn.commit()

    cur.close()
    conn.close()

    return jsonify(new_created_product)

@app.delete('/api/products/<id>')
def delete_users(id):
    conn = get_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    cur.execute('DELETE FROM product WHERE id = %s RETURNING * ', (id,))
    product = cur.fetchone()

    conn.commit()

    cur.close()
    conn.close()

    if product is None:
        return jsonify({'message': 'Product not found'}), 404

    return jsonify(product)

@app.put('/api/products/<id>')
def put_users(id):
    conn = get_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    new_product = request.get_json()
    name = new_product['name']
    description = new_product['description']
    price = new_product['price']
    image_path = new_product['image_path']
    category = new_product['category']

    cur.execute('UPDATE product SET name= %s, description = %s, price = %s, image_path = %s, category = %s WHERE id = %s RETURNING *',
                (name, description, price, image_path, category, id))
    updated_user = cur.fetchone()
    
    conn.commit()

    cur.close()
    conn.close()

    if updated_user is None:
        return jsonify({'message': 'Product not found'}), 404
    
    return jsonify(updated_user)

@app.get('/')
def home():
    conn = get_connection()
    cur = conn.cursor()
    
    result = cur.execute("SELECT 1 + 1")
    result = cur.fetchone()
    
    print(result)
    
    return 'Servidores'

if __name__ == '__main__':
    app.run(debug=True)
    
