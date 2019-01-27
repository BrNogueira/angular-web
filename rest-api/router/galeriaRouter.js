var express = require('express');
var router = express.Router();
var GaleriaModel = require('../model/galeria/GalerriaModel');
var RespostaClass = require('../model/RespostaClass');

var fs = require('fs');
var pastePublic = "./public/img/";

// pegar dados no servidor
router.get("/", function(req, resp, next ) {
    GaleriaModel.getAll(function(erro, retorno){
        let resposta = new RespostaClass();
       
        if (erro){
            resposta.erro = true;
            resposta.msg = "Ocorreu erro";
            console.log('erro:', erro);

        } else{
            resposta.dados = retorno;
        }
        resp.json(resposta);
    });
});
// pega ID do servidor
router.get("/:id?", function(req, resp, next ) {
    GaleriaModel.getId(req.params.id, function(erro, retorno){
        
        let resposta = new RespostaClass();
        
        if (erro){
            resposta.erro = true;
            resposta.msg = "Ocorreu erro";
            console.log('erro:', erro);
        } else{
            resposta.dados = retorno;
        }
        resp.json(resposta);
    });
});

// add dados no servidor
router.post("/?", function(req, resp, next ) {

    let resposta = new RespostaClass();

    // verificando se recebeu
    if (req.body.dados_imagem != null) {

    //salvar imagem
    //let bitmap = new Buffer(req.body.dados_imagem.imagem_base64, 'base64');
    //Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from()
    let bitmap = new Buffer.from(req.body.dados_imagem.imagem_base64, 'base64');

    //alterando nome da imagem
    let dataAtual = new Date().toLocaleString().replace(/\//g, '')
    .replace(/:/g,'').replace(/-/g,'').replace(/ /g,'');

    let nomeImagemCaminho = pastePublic + dataAtual + req.body.dados_imagem.nome_arquivo;
        fs.writeFileSync(nomeImagemCaminho, bitmap);
        req.body.camino = nomeImagemCaminho;

    GaleriaModel.tack(req.body, function(erro, retorno){

        if (erro){
            resposta.erro = true;
            resposta.msg = "Ocorreu erro";
            console.log('erro:', erro);                
        }else{
            if(retorno.affectedRows > 0 ){
                resposta.msg = "cadastro realizado com sucesso.";
            }else{
                resposta.erro = true;
                resposta.msg = "Não foi possivel realizar a operação.";
                console.log('erro:', erro);
            }
        }
    console.log('resp:', resposta)
    resp.json(resposta);
    }); 

    }else{
        resposta.erro = true;
        resposta.msg = "Não foi enviado Imagem"; 
        console.log('erro', resposta.msg );
        resp.json(resposta);
    }
});

//editar dados no servidor
router.put("/", function(req, resp, next ) {

    let resposta = new RespostaClass();

    // verificando se recebeu
    if (req.body.dados_imagem != null) {

    //salvar imagem
    //let bitmap = new Buffer(req.body.dados_imagem.imagem_base64, 'base64');
    //Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from()
    let bitmap = new Buffer.from(req.body.dados_imagem.imagem_base64, 'base64');

    //alterando nome da imagem
    let dataAtual = new Date().toLocaleString().replace(/\//g, '')
    .replace(/:/g,'').replace(/-/g,'').replace(/ /g,'');

    let nomeImagemCaminho = pastePublic + dataAtual + req.body.dados_imagem.nome_arquivo;
        fs.writeFileSync(nomeImagemCaminho, bitmap);
        req.body.camino = nomeImagemCaminho;
    }

    GaleriaModel.edit(req.body, function(erro, retorno){

        if (erro){
            resposta.erro = true;
            resposta.msg = "Ocorreu erro";
            console.log('erro:', erro);                
        }else{
            if(retorno.affectedRows > 0 ){
                resposta.msg = "Registro alterado com sucesso.";
            }else{
                resposta.erro = true;
                resposta.msg = "Não foi possivel alterar o registro.";
                console.log('erro:', erro);
            }
        }
    console.log('resp:', resposta)
    resp.json(resposta);
    }); 
});
// deletar do servidor
router.delete("/:id?", function(req, resp, next ) {
    GaleriaModel.getDelete(req.params.id, function(erro, retorno){
        
        let resposta = new RespostaClass();
        
        if (erro){
            resposta.erro = true;
            resposta.msg = "Ocorreu erro";
            console.log('erro:', erro);
        } else{
            if(retorno.affectedRows > 0 ){
                resposta.msg = "Registro excluido com sucesso.";
            }else{
                resposta.erro = true;
                resposta.msg = "Não foi possivel excluir o registro.";
                console.log('erro:', erro);
            }
            resposta.dados = retorno;
        }
        resp.json(resposta);
    });
});


module.exports = router;