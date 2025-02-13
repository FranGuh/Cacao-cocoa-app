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
def get_users():
    return 'Getting products'

@app.delete('/api/products')
def get_users():
    return 'Getting products'

@app.put('/api/products')
def get_users():
    return 'Getting products'

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
    
