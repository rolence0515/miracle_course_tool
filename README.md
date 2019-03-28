# 架蹟課程練習手冊工具

# 佈署到heroku方式
see http://www.bjhee.com/flask-heroku.html
$ heroku login
$ heroku git:remote -a miraclecoursetool
$ git add .
$ git commit -m "Initialize Project"
$ git push heroku master               # 提交到远程master分支
$ heroku open # 想看看效果，命令行里输入