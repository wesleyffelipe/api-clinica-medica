export class Medico {
  constructor(nome, crm, especialidade) {
    this.nome = nome;
    this.crm = crm;
    this.especialidade = especialidade;
  }

  validar() {
    if (!this.nome || this.nome.trim().length < 3) {
      throw new Error("Nome deve ter pelo menos 3 caracteres");
    }

    if (!this.crm || this.crm.trim().length === 0) {
      throw new Error("CRM é obrigatório");
    }
  }
}
