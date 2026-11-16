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
    const { data_hora, motivo, status_consulta } = req.body;

    if (!data_hora) {
      return res.status(400).json({
        mensagem: "Data e hora são obrigatórios"
      });
    }

    const consulta = new Consulta(data_hora, motivo, status_consulta);
    const Id = await cadastrarCon(consulta);

    return res.status(201).json({
      id_consulta: Id,
      ...consulta
    });
  } catch (erro) {
    return res.status(500).json({
      mensagem: "Erro ao cadastrar consulta " + erro
    });
  }
}

export async function listarConsultas(req, res) {
  try {
    const consultas = await listarCon();
    return res.status(200).json(consultas);
  } catch (erro) {
    return res.status(500).json({
      mensagem: "Erro ao listar consultas"
    });
  }
}

export async function buscarConsulta(req, res) {
  try {
    const consulta = await buscarPorIdCon(req.params.id);

    if (!consulta) {
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
    const { data_hora, motivo, status_consulta } = req.body;

    if (!data_hora) {
      return res.status(400).json({
        mensagem: "Data e hora são obrigatórios"
      });
    }

    const consulta = new Consulta(data_hora, motivo, status_consulta);
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
