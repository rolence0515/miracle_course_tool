# -*- coding: utf-8 -*-
# heroku acc/pw : rolence0515@gmail.com/zaq1@#$%^&*()
import json
from flask import Flask, render_template,session,request
import requests
import base64
import time
import hashlib
from hanziconv import HanziConv
from pymongo import MongoClient
from bson.objectid import ObjectId #這東西再透過ObjectID去尋找的時候會用到
import re


app = Flask(__name__)

with open("pratic_book.json", 'r') as f:
    data = json.loads(f.read())
練習手冊 = [{"idx":i, "d" :d} for i, d in enumerate(data)]

with open("mp3.json", 'r') as f:
    data = json.loads(f.read())
mp3list = [{"idx":i, "data" :d} for i, d in enumerate(data)]




session = {
    "user":{
        'name':'rolence',
        'email':"rr@ee.com"
    }
}

mongo_uri = "mongodb://rolence0515:rolence0515@ds143342.mlab.com:43342/miraclecoursetooldb"

@app.route("/")
@app.route("/<int:rg1>/<int:rg2>")
def home(rg1=0, rg2=60):
    return render_template('home.html', books = 練習手冊[rg1:rg2], mp3lst = mp3list)

@app.route("/book/<int:idx>")
def book(idx=1):
    with open(f"static/奇蹟課程正文/奇蹟課程_{idx}.txt", 'r') as f:
        text = f.read()
        title = text.split("\n")[0]
        icon='''
        <strong class="lead">〉</strong> 
        '''
        pattern = '[0-9]+\.'
        text = re.sub(pattern, icon, text)



        text = text.replace("\n\n\n\n\n\n", "<hr/>").replace("\n\n", "<br/>").replace("\n\n\n\n", "").replace("\n", "").replace(title, "")
  
    return render_template('book.html', text=text, title=title)

@app.route("/about")
def about():
    return render_template('about.html')

@app.route("/user")
def user():
    return render_template('user.html')

@app.route('/api/update', methods=['POST'])
def save_to_mongo():
    
    data = request.form.to_dict() 
  
    usrid = data["id"]
    op = data['op']
    idx = data['idx']

    client = MongoClient(mongo_uri)
    db = client.miraclecoursetooldb
    coll = db.userchks
    if op == 'pull':
        print('pull') 
        coll.update({"_id":usrid}, { 
                "$pull": { "chks": { "$in": [ idx ] }}
                }, upsert = True)
    else:
      
        coll.update(
            {"_id":usrid}, 
            { 
            "$push": { "chks":  [ idx ]}
            },upsert = True)
    return 'ok'
           
    
    


# @app.route("/api/read/<int:courseid>")
# def read(courseid):
#     # API请求地址、API KEY、APP ID等参数，提前填好备用
#     # https://console.xfyun.cn/app/myapp?currPage=1&keyword=
#     api_url = "http://api.xfyun.cn/v1/service/v1/tts"
#     API_KEY = "48fa786d4213ce1a57c7bd99c6fc4939"
#     APP_ID = "5c9db770"
#     OUTPUT_FILE = f"{courseid}.mp3"    # 输出音频的保存路径，请根据自己的情况替换
#     TEXT = HanziConv.toSimplified(練習手冊[courseid]["d"]["txt"])
#     print(TEXT[0:20])

#     # 构造输出音频配置参数
#     Param = {
#         "auf": "audio/L16;rate=16000",    #音频采样率
#         "aue": "lame",    #音频编码，raw(生成wav)或lame(生成mp3)
#         "voice_name": "aisjinger",
#         "speed": "50",    #语速[0,100]
#         "volume": "77",    #音量[0,100]
#         "pitch": "50",    #音高[0,100]
#         "engine_type": "aisound"    #引擎类型。aisound（普通效果），intp65（中文），intp65_en（英文）
#     }
#     # 配置参数编码为base64字符串，过程：字典→明文字符串→utf8编码→base64(bytes)→base64字符串
#     Param_str = json.dumps(Param)    #得到明文字符串
#     Param_utf8 = Param_str.encode('utf8')    #得到utf8编码(bytes类型)
#     Param_b64 = base64.b64encode(Param_utf8)    #得到base64编码(bytes类型)
#     Param_b64str = Param_b64.decode('utf8')    #得到base64字符串

#     # 构造HTTP请求的头部
#     time_now = str(int(time.time()))
#     checksum = (API_KEY + time_now + Param_b64str).encode('utf8')
#     checksum_md5 = hashlib.md5(checksum).hexdigest()
#     header = {
#         "X-Appid": APP_ID,
#         "X-CurTime": time_now,
#         "X-Param": Param_b64str,
#         "X-CheckSum": checksum_md5
#     }

#     # 发送HTTP POST请求
#     def getBody(text):
#         data = {'text':text}
#         return data
#     response = requests.post(api_url, data=getBody(TEXT), headers=header)

#     # 读取结果
#     response_head = response.headers['Content-Type']
#     if(response_head == "audio/mpeg"):
#         out_file = open(OUTPUT_FILE, 'wb')
#         data = response.content # a 'bytes' object
#         out_file.write(data)
#         out_file.close()
#         print('输出文件: ' + OUTPUT_FILE)
#         return OUTPUT_FILE
#     else:
#         print(response.text)
#         return response.text

# @app.route("/api/downloadall")
# def download_all():
#     for d in 練習手冊:
#         idx = d["idx"]
#         read(idx)
    

# @app.route("/reload")
# def reload():
#     with open("pratic_book.json", 'r') as f:
#         data = json.loads(f.read())
#     練習手冊 =  [{"idx":i, "d" :d} for i, d in enumerate(data)]
#     return render_template('home.html', books = 練習手冊)


if __name__ == '__main__':
      app.run(
        host = '0.0.0.0',
        port = 7777,  
        debug = True 
    )


