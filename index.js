const express = require('express');
const app = express();
const cors = require('cors')
const port = 8080;

var frutas = [
    {
        "nome": "maçã",
        "cor": "vermelha",
        "preco": 3.50
    },
    {
        "nome": "banana",
        "cor": "amarela",
        "preco": 2.00
    },
    {
        "nome": "laranja",
        "cor": "laranja",
        "preco": 1.50
    },
    {
        "nome": "kiwi",
        "cor": "verde",
        "preco": 4.00
    },
    {
        "nome": "uva",
        "cor": "roxa",
        "preco": 5.00
    }
]
    
app.use(express.json());
app.use(cors())

app.get('/frutas', (req, res) => {
    res.send(frutas);
});

app.get('/fruta', (req, res) =>{
    const {nome} = req.query;
    console.log(frutas.filter(fruta => fruta.nome === nome))
})

app.post("/fruta", (req, res) => {
    const data = req.body
    frutas.push(data)
    res.status(200).send("sucesso")
})

app.delete("/fruta", (req, res) => {
    const {nome} = req.query;
    const frutasFiltradas = frutas.filter(fruta => fruta.nome !== nome)
    frutas = frutasFiltradas
    res.send("sucesso")
})

//app.get('/frutas')
//app.post('/fruta')

app.listen(port, () => {
    console.log(`Servidor aberto nessa url http://localhost:${port}`);
});
