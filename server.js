const express = require("express");
const app = express();
app.get('/', function(request,response){
    response.send("Hello , Mr.Stark");
});
app.get('/', function(request,response){
    response.send("Hello , Mr.Stark");
});
app.get('/card', function(request,response){
    response.send("Этот роут отвечает за карты");
});
app.get('/client', function(request,response){
    response.send("Этот роут отвечает за клиентов");
});
app.listen(3000,function(){
    console.log("Сервер запущен на порту под номером 3000");
});