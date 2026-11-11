import conexao from "../database/conexao.js";

export async function cadastrarCon(consulta) {
  const sql = "INSERT INTO consulta (data_hora, motivo, status, id) VALUES (?, ?, ?, ?)";
  const [resultado] = await conexao.execute(sql, [
    consulta.data_hora,
    consulta.motivo,
    consulta.status,
    consulta.id
  ]);

  return resultado.insertId;
}

export async function listarCon() {
  const sql = "SELECT * FROM consulta ORDER BY id_consulta";
  const [linhas] = await conexao.execute(sql);

  return linhas;
}

export async function buscarPorIdCon(id) {
  const sql = "SELECT * FROM consulta WHERE id_consulta = ?";
  const [linhas] = await conexao.execute(sql, [id]);

  return linhas[0];
}

export async function atualizarCon(id, consulta) {
  const sql = "UPDATE consulta SET data_hora = ?, motivo = ?, status = ?, id = ? WHERE id_consulta = ?";
  const [resultado] = await conexao.execute(sql, [
    consulta.id,
    consulta.data_hora,
    consulta.motivo,
    consulta.status,
    id
  ]);

  return resultado.affectedRows;
}

export async function excluirCon(id) {
  const sql = "DELETE FROM consulta WHERE id_consulta = ?";
  const [resultado] = await conexao.execute(sql, [id]);

  return resultado.affectedRows;
}
