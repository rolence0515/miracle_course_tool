# 架蹟課程練習手冊工具

網站發佈位置：https://miraclecoursetool.herokuapp.com/

## 佈署到heroku方式
see http://www.bjhee.com/flask-heroku.html
$ heroku login
$ heroku git:remote -a miraclecoursetool
$ git add .
$ git commit -m "Initialize Project"
$ git push heroku master               # 提交到远程master分支
$ heroku open # 想看看效果，命令行里输入

## 佈署到github方式
$ git add .
$ git commit -m "Initialize Project"
$ git remote add origin https://github.com/rolence0515/miracle_course_tool.git


## 如何取得google drive上的 mp3 url 
https://drive.google.com/file/d/XXXXXXXXXXXXXXXXXX/view?usp=sharing 
where XXXXXXXXXXXXXXXXXX is the ID of your MP3 file. Then you can obtain a direct link to this audio by
↓以下就是url
http://docs.google.com/uc?export=open&id=XXXXXXXXXXXXXXXXXX


## 佈署到github方式
$ git add .
$ git commit -m "Initialize Project"
$ git remote add origin https://github.com/rolence0515/miracle_course_tool.git