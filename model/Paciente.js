export class Paciente{
    constructor(nome, cpf, data_nascimento){
        this.nome = nome;
        this.cpf = cpf;
        this.data_nascimento = data_nascimento;
    }

    validar(){
        if (!this.nome || this.nome.trim().length < 3) {
            throw new Error("Nome deve ter pelo menos 3 caracteres")
        }
    
        if (!this.data_nascimento || this.data_nascimento.trim().length === 0) {
            throw new Error("Data de nascimento é obrigatória");
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
