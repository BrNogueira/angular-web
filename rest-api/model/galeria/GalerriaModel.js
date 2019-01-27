const db = require('../../banco/dbconexao');

module.exports =  class GaleriaModel{

    static getAll(callback){
      return db.query("SELECT * FROM galeria", callback);
    }

    static getId(id, callback){
      return db.query("SELECT * FROM galeria WHERE id_galeria = ?",
      [id], callback);
  }

  static tack(dados, callback){
      return db.query("INSERT INTO galeria (titulo, caminho) VALUES(?, ?)",
      [dados.titulo, dados.caminho], callback);
  }
  
  static edit(dados, callback){
    return db.query("UPDATE galeria SET titulo =? , caminho = ? WHERE id_galeria = ?",
    [dados.titulo, dados.caminho, dados.id_galeria], callback);
}

  static getDelete(id, callback){
    return db.query("DELETE FROM galeria WHERE id_galeria = ?",
    [id], callback);
  }
}