export class Paciente{
    constructor(id, nome, cpf, data_nascimento){
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.data_nascimento = data_nascimento;
    }

    validar(){
        if (!this.nome || this.nome.trim().length < 3) {
            throw new Error("Nome deve ter pelo menos 3 caracteres")
        }
    
        if (!this.cpf || this.crm.trim().length === 0) {
            throw new Error("CRM é obrigatório");
        }

        if (!this.cpf || this.cpf.trim().length  > 11 || this.cpf < 11) {
            throw new Error("CPF deve ter exatos11 caracteres")
      }
   }
        static validarId(id, Paciente) {
            if (!Number.isInteger(id) || id <= 0) {
                throw new Error(
                    "ID de " + Paciente + " deve ser um número inteiro positivo"
    );
  }
}
}
