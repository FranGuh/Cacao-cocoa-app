from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import redis
import json

#AUN no funciona xd

DB_USER = 'cris'
DB_PASSWORD = '123'
DB_HOST = 'localhost'
DB_NAME = 'postgres'
REDIS_PORT = '6379'


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = f'postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}/{DB_NAME}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Configurar Redis
redis_client = redis.StrictRedis(host='localhost', port=int(REDIS_PORT), db=0, decode_responses=True)

# Modelo de Producto
class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(200))
    price = db.Column(db.Float, nullable=False)

    def to_dict(self):
        return {"id": self.id, "name": self.name, "description": self.description, "price": self.price}

with app.app_context():
    db.create_all()

@app.route('/products', methods=['POST'])
def create_product():
    data = request.json
    new_product = Product(name=data['name'], description=data.get('description', ''), price=data['price'])
    db.session.add(new_product)
    db.session.commit()
    redis_client.delete('products') 
    return jsonify({"message": "Producto creado", "product": new_product.to_dict()}), 201

@app.route('/products', methods=['GET'])
def get_products():
    cached_products = redis_client.get('products')
    if cached_products:
        return jsonify(json.loads(cached_products))
    
    products = Product.query.all()
    products_list = [product.to_dict() for product in products]
    redis_client.set('products', json.dumps(products_list))  
    return jsonify(products_list)

if __name__ == '__main__':
    app.run(debug=True)
