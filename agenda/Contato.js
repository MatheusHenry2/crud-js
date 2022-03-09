 class Contato {

     constructor(id, nome, telefone) {
         this.id = id;
         this.nome = nome;
         this.telefone = telefone;
     }
     getContatoId() {
         return this.id;
     }
     getContatoNome() {
         return this.nome;
     }
     getContatoTelefone() {
         return this.telefone;
     }
 }

 module.exports = Contato;