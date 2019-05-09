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
$ git remote add origin https://github.com/rolence0515/miracle_course_tool.git <-第一次要加這碼，之後不用
$ git push -u origin master



## 如何取得google drive上的 mp3 url 
https://drive.google.com/file/d/XXXXXXXXXXXXXXXXXX/view?usp=sharing 
where XXXXXXXXXXXXXXXXXX is the ID of your MP3 file. Then you can obtain a direct link to this audio by
↓以下就是url
http://docs.google.com/uc?export=open&id=XXXXXXXXXXXXXXXXXX


## 佈署到github方式
$ git add .
$ git commit -m "Initialize Project"
$ git remote add origin https://github.com/rolence0515/miracle_course_tool.git


# 產生icon
https://favicon.io/favicon-generator/

# area, 組織結構
1企業 免費版最多可建立1團隊，easy版建立3個，企業版可建立15個
一個團隊包含0或多個成員

#管理者
建立企業帳號的人，
只有管理者身份才可以建企業級okr
可以指派或移除某人為管理者

#成員
1個成員滿足以下條件可以見該okr
1. 企業okr(所有人都強迫見)
2. 團隊ork參與人有你
1. 你自建的私人okr

#參與人
你必須在某一個團隊下才可以選擇參與人
1個人一定在一個企業，但不一定屬於任何團隊

#所有的okr都一定在一個tab內

#個人okr
只有你可見
有一個建立者
位於一個tab(年季月)

#企業okr
所有人可見

#團隊okr
建立的人不能移除
團隊成員可見
管理員可見

