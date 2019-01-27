const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const api = express();
const porta = 3000;
const router = express.Router();

const galeriaRouter = require('./router/galeriaRouter');

api.use(cors()); //segurança api

api.use(bodyparser.urlencoded({extended: true})); //Extrai tampos em url
api.use(bodyparser.json({limit: '20mb', extended: true })); //Limita a quantidade do arquivo

//diretório público
api.use('/public', express.static(__dirname + '/public'));

router.get('/', (req, resp) =>resp.json({
    mensagem: '=>API Online'
})); //rotas 

api.use("/", router); // executa a rota
api.use("/galeria", galeriaRouter); // executa a rota

api.listen(porta); //escuta a porta 

console.log("Run API Express");