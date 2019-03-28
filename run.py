# -*- coding: utf-8 -*-
# heroku acc/pw : rolence0515@gmail.com/zaq1@#$%^&*()
import json
from flask import Flask, render_template,session
app = Flask(__name__)

with open("pratic_book.json", 'r') as f:
    data = json.loads(f.read())
練習手冊 = [{"idx":i, "d" :d} for i, d in enumerate(data)]



session = {
    "user":{
        'name':'rolence',
        'email':"rr@ee.com"
    }
}

@app.route("/")
def home():
    return render_template('home.html', books = 練習手冊)

@app.route("/reload")
def reload():
    with open("pratic_book.json", 'r') as f:
        data = json.loads(f.read())
    練習手冊 =  [{"idx":i, "d" :d} for i, d in enumerate(data)]
    return render_template('home.html', books = 練習手冊)


if __name__ == '__main__':
      app.run(
        host = '0.0.0.0',
        port = 7777,  
        debug = True 
    )


