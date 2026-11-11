export class Consulta{
    constructor(data_hora, motivo, status, id){
        this.data_hora = data_hora;
        this.movito = motivo;
        this.status = status;
        this.id = id;
    }
    
 validar(){
        if (!this.nome || this.nome.trim().length < 3) {
            throw new Error("Nome deve ter pelo menos 3 caracteres")
        }
    
        if (!this.data_hora || this.data_hora.trim().length === 0) {
            throw new Error("Data e hora são obrigatórios");
        }

        if (!this.cpf || this.cpf.trim().length  > 11 || this.cpf < 11) {
            throw new Error("CPF deve ter exatos11 caracteres")
        }
    }
        static validarId(id, consulta) {
            if (!Number.isInteger(id) || id <= 0) {
                throw new Error(
                    "ID da " + consulta + " deve ser um número inteiro positivo"
    );
  }
}
}
