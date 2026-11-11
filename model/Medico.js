export class Medico {
    constructor(id, nome, crm, especialidade){
        this.id = id;
        this.nome = nome;
        this.crm = crm;
        this.especialidade = especialidade;
    }

    validar(){
        if (!this.nome || this.nome.trim().length < 3) {
            throw new Error("Nome deve ter pelo menos 3 caracteres")
        }
    
        if (!this.crm || this.crm.trim().length === 0) {
            throw new Error("CRM é obrigatório");
        }

        if (!this.especialidade || this.especialidade.trim().length < 3) {
            throw new Error("Especialidade deve ter pelo menos 3 caracteres")
      }

    }
        static validarId(id, Medico) {
            if (!Number.isInteger(id) || id <= 0) {
                throw new Error(
                    "ID de " + Medico + " deve ser um número inteiro positivo"
    );
  }
}
}
