import conexao from "../database/conexao.js";

export async function cadastrarMed(medico) {
  const sql = "INSERT INTO medico (id, nome, crm, especialidade) VALUES (?, ?, ?, ?)";
  const [resultado] = await conexao.execute(sql, [
   medico.id,
   medico.nome,
   medico.crm,
   medico.especialidade,
  
  ]);

  return resultado.insertId;
}

export async function listarMed() {
  const sql = "SELECT * FROM medico ORDER BY id_medico";
  const [linhas] = await conexao.execute(sql);

  return linhas;
}

export async function buscarPorIdMed(id) {
  const sql = "SELECT * FROM medico WHERE id_medico = ?";
  const [linhas] = await conexao.execute(sql, [id]);

  return linhas[0];
}

export async function atualizarMed(id, medico) {
  const sql = "UPDATE medico SET id = ?, nome = ?, crm = ?, especialidade = ? WHERE id_medico = ?";
  const [resultado] = await conexao.execute(sql, [
    medico.id,
    medico.nome,
    medico.crm,
    medico.especialidade,
    id
  ]);

  return resultado.affectedRows;
}

export async function excluirMed(id) {
  const sql = "DELETE FROM medico WHERE id_medico = ?";
  const [resultado] = await conexao.execute(sql, [id]);

  return resultado.affectedRows;
}
