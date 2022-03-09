class Agenda {

    agendaId = [];
    agendaNome = [];
    agendaTelefone = [];
    posicaoId = 0;
    posicaoNome = 0;
    posicaoTelefone = 0;

    constructor() {}

    inserirAgenda(id, nome, telefone) {

        this.agendaId[this.posicaoId] = id;
        this.agendaNome[this.posicaoNome] = nome;
        this.agendaTelefone[this.posicaoTelefone] = telefone;

        this.posicaoId++;
        this.posicaoNome++;
        this.posicaoTelefone++;
    }

    removerAgenda(id) {

        let removeUser = 0;

        console.log('\n Vamos remover o usuario se encontrado')

        for (let i = 0; i < this.agendaId.length; i++) {

            if (this.agendaId[i] == id) {
                this.agendaId.splice(i, 1)
                this.agendaNome.splice(i, 1)
                this.agendaTelefone.splice(i, 1)
                removeUser = 1;
            }
        }

    }


    buscarAgenda(id) {

        let findUser = 0;
        console.log('\nBuscando usuário na Agenda')

        for (let i = 0; i < this.agendaId.length; i++) {
            if (this.agendaId[i] == id) {
                console.log('\nUsuário encontrado parabéns!')
                console.log('\n******************')
                console.log(this.agendaId[i])
                console.log(this.agendaNome[i])
                console.log(this.agendaTelefone[i])
                console.log('******************')
                findUser = 1;
                break;
            }
        }
        if (!findUser) {
            console.log('\n Desculpe usuário com esse identificar não encontrado!')
        }
    }

    listarAgenda() {
        console.log('\n -- Listando usuários cadastrados!--')
        for (let i = 0; i < this.agendaId.length; i++) {
            console.log(this.agendaId[i])
            console.log(this.agendaNome[i])
            console.log(this.agendaTelefone[i])
            console.log('-----------------')
        }
    }
}

module.exports = Agenda;