@echo off
start hyper /k "git add . "
echo git commit -m "next command"
echo git push heroku master
pause


