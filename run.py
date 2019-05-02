# -*- coding: utf-8 -*-
# heroku acc/pw : rolence0515@gmail.com/zaq1@#$%^&*()
import json
from flask import Flask, render_template,session,request, jsonify
import requests
import base64
import time
import hashlib
from hanziconv import HanziConv
from pymongo import MongoClient
from bson.objectid import ObjectId #這東西再透過ObjectID去尋找的時候會用到
import re


app = Flask(__name__)


session = {
    "user":{
        'name':'rolence',
        'email':"rr@ee.com"
    }
}

# mongo_uri = "mongodb://rolence0515:rolence0515@ds143342.mlab.com:43342/miraclecoursetooldb"


@app.route("/")
def home():
    return render_template('home.html')

@app.route("/about")
def about():
    return render_template('about.html')

@app.route("/user")
def user():
    return render_template('user.html')


@app.route('/api/note', methods=['POST'])
def note():
   
    return 'ok'


if __name__ == '__main__':
      app.run(
        host = '0.0.0.0',
        port = 7777,  
        debug = True 
    )


