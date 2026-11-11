import { Consulta } from "../model/Consulta.js";
import {
    cadastrarCon,
    listarCon,
    buscarPorIdCon,
    atualizarCon,
    excluirCon,
} from "../repository/consultaRepository.js";

export async function cadastrarConsulta(req, res) {
  try {
    const { data_hora, motivo, status, id } = req.body;

    if (!data_hora) {
      return res.status(400).json({
        mensagem: "Data ee hora são obrigatórios"
      });
    }

    const consulta = new Consulta(data_hora, motivo, status, id);
    const Id = await cadastrarCon(consulta);

    return res.status(201).json({
      id_consulta: id,
      ...consulta
    });
  } catch (erro) {
    return res.status(500).json({
      mensagem: "Erro ao cadastrar consulta"
    });
  }
}

export async function listarConsultas(req, res) {
  try {
    const consultas = await listar();
    return res.status(200).json(consultas);
  } catch (erro) {
    return res.status(500).json({
      mensagem: "Erro ao listar consultas"
    });
  }
}

export async function buscarConsulta(req, res) {
  try {
    const consulta = await buscarPorIdConsulta(req.params.id);

    if (!amostra) {
      return res.status(404).json({
        mensagem: "Consulta não encontrada"
      });
    }

    return res.status(200).json(consulta);
  } catch (erro) {
    return res.status(500).json({
      mensagem: "Erro ao buscar consulta"
    });
  }
}

export async function editarConsulta(req, res) {
  try {
    const { data_hora, motivo, status, id } = req.body;

    if (!data_hora) {
      return res.status(400).json({
        mensagem: "Data e hora são obrigatórios"
      });
    }

    const consulta = new Consulta(data_hora, motivo, status, id);
    const linhasAlteradas = await atualizarCon(req.params.id, consulta);

    if (linhasAlteradas === 0) {
      return res.status(404).json({
        mensagem: "Consulta não encontrada"
      });
    }

    return res.status(200).json({
      mensagem: "Consulta atualizada com sucesso"
    });
  } catch (erro) {
    return res.status(500).json({
      mensagem: "Erro ao atualizar Consulta"
    });
  }
}

export async function removerConsulta(req, res) {
  try {
    const linhasExcluidas = await excluirCon(req.params.id);

    if (linhasExcluidas === 0) {
      return res.status(404).json({
        mensagem: "Consulta não encontrada"
      });
    }

    return res.status(204).send();
  } catch (erro) {
    return res.status(500).json({
      mensagem: "Erro ao excluir Consulta"
    });
  }
}
