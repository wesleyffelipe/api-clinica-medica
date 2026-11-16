export class Consulta{
    constructor(data_hora, motivo, status_consulta){
        this.data_hora = data_hora;
        this.motivo = motivo;
        this.status_consulta = status_consulta;
    }
    
 validar(){
        if (!this.motivo || this.motivo.trim().length < 3) {
            throw new Error("Motivo deve ter pelo menos 5 caracteres")
        }
    
        if (!this.data_hora || this.data_hora.trim().length === 0) {
            throw new Error("Data e hora são obrigatórios");
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
