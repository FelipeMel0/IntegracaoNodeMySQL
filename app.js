const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.send("Seja bem-vindo!")
})

app.listen(6000, function(){
    console.log("Servidor rodando na url http://localhost:6000")
})

//Configurando a porta que o sistema usará