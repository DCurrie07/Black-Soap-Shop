from logging import debug
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from flask_bcrypt import Bcrypt

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://aljjcyagvjxyjk:93a7c670a9f67ccf82665e843b407a337fe45c28900e4bb2007b83a2f4e8e1dc@ec2-54-147-76-191.compute-1.amazonaws.com:5432/d351qjj953q2pl"

db = SQLAlchemy(app)
ma = Marshmallow(app)
bcrypt = Bcrypt(app)
CORS(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False, unique=True)
    password = db.Column(db.String, nullable=False)
    createDate = db.Column(db.Integer, nullable=False)

    def __init__(self, username, password, createDate):
        self.username = username
        self.password = password
        self.createDate = createDate

class Info(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    address = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)

    def __init__(self, name, address, email, user_id):
        self.name = name
        self.address = address
        self.email = email
        self.user_id = user_id

class InfoSchema(ma.Schema):
    class Meta:
        fields = ("id", "name", "address", "email", "user_id")

info_schema = InfoSchema()
multiple_info_schema = InfoSchema(many=True)

class UserSchema(ma.Schema):
    class Meta:
        fields = ("id", "username", "password", "createDate")

user_schema = UserSchema()
multiple_user_schema = UserSchema(many=True)


@app.route("/user/add", methods=["POST"])
def add_user():
    if request.content_type != "application/json":
        return jsonify("Error, Data must be sent as JSON")
    
    post_data = request.get_json()
    username = post_data.get("username")
    password = post_data.get("password")
    createDate = post_data.get("createDate")

    pw_hash = bcrypt.generate_password_hash(password).decode("utf-8")

    new_record = User(username, pw_hash, createDate)
    db.session.add(new_record)
    db.session.commit()

    return jsonify(user_schema.dump(new_record))

@app.route("/user/get/<id>", methods=["GET"])
def get_user(id):
    user = db.session.query(User).filter(User.id == id).first()
    return jsonify(user_schema.dump(user))

@app.route("/user/get", methods=["GET"])
def get_all_users():
    all_users = db.session.query(User).all()
    return jsonify(multiple_user_schema.dump(all_users))

@app.route("/user/get/<username>", methods=["GET"])
def get_user(username):
    user = db.session.query(User).filter(User.username == username).first()
    return jsonify(user_schema.dump(user))

@app.route("/user/get/<password>", methods=["GET"])
def get_user2(password):
    user = db.session.query(User).filter(User.password == password).first()
    return jsonify(user_schema.dump(user))

@app.route("/user/get/<createDate>", methods=["GET"])
def get_user3(createDate):
    user = db.session.query(User).filter(User.createDate == createDate).first()
    return jsonify(user_schema.dump(user))

@app.route("/user/verification", methods=["POST"])
def verification():
    if request.content_type != "application/json":
        return jsonify("Error, Data must be sent as JSON")
    
    post_data = request.get_json()
    username = post_data.get("username")
    password = post_data.get("password")

    user = db.session.query(User).filter(User.username == username).first()

    if user is None:
        return jsonify("User NOT Verified")
    
    if not bcrypt.check_password_hash(user.password, password):
        return jsonify("User NOT Verified")
    
    return jsonify("User Verified")

@app.route("/user/update/<id>", methods=["PUT"])
def update_user(id):
    if request.content_type != "application/json":
        return jsonify("Error, Data must be sent as JSON")
    
    put_data = request.get_json()

    user = db.session.query(User).filter(User.id == id).first()

    db.session.commit()

@app.route("/info/add", methods=["POST"])
def add_info():
    if request.content_type != "application/json":
        return jsonify("Error, Data must be sent as JSON")
    post_data = request.get_json()
    name = post_data.get("name")
    address = post_data.get("address")
    email = post_data.get("email")
    user_id = post_data.get("user_id")

    new_record = Info(name, address, email, user_id)
    db.session.add(new_record)
    db.session.commit()

    return jsonify(info_schema.dump(new_record))

@app.route("/info/get", methods=["GET"])
def get_all_info():
    all_info = db.session.query(Info).all()
    return jsonify(multiple_info_schema.dump(all_info))

@app.route("/info/get/<name>", methods=["GET"])
def get_info(name):
    info = db.session.query(Info).filter(Info.name == name).first()
    return jsonify(info_schema.dump(info))

@app.route("/info/get/<address>", methods=["GET"])
def get_info2(address):
    info = db.session.query(Info).filter(Info.address == address).first()
    return jsonify(info_schema.dump(info))

@app.route("/info/get/<email>", methods=["GET"])
def get_info3(email):
    info = db.session.query(Info).filter(Info.email == email).first()
    return jsonify(info_schema.dump(info))

@app.route("/info/get/<user_id>", methods=["GET"])
def get_info4(user_id):
    info = db.session.query(Info).filter(Info.user_id == user_id).first()
    return jsonify(info_schema.dump(info))

@app.route("/info/delete/<user_id>", methods=["DELETE"])
def delete_infos(user_id):
    infos = db.session.query(Info).filter(Info.user_id == user_id).all()
    for info in infos:
        db.session.delete(info)
        db.session.commit()
    user = db.session.query(User).filter(User.id == user_id).first()
    return jsonify(user_schema.dump(user))


if __name__ == "__main__":
    app.run(debug=True)