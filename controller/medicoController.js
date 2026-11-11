import { Medico } from "../model/Medico.js";
import {
  cadastrarMed,
  listarMed,
  buscarPorIdMed,
  atualizarMed,
  excluirMed,
} from "../repository/medicoRepository.js";

export async function cadastrarMedico(req, res) {
  try {
    const { id, nome, crm, especialidade } = req.body;

    if (!crm) {
      return res.status(400).json({
        mensagem: "CRM é obrigatório"
      });
    }

    const medico = new Medico(id, nome, crm, especialidade);
    const Id = await cadastrarMed(medico);

    return res.status(201).json({
      id_medico: id,
      ...medico
    });
  } catch (erro) {
    return res.status(500).json({
      mensagem: "Erro ao cadastrar medico"
    });
  }
}

export async function listarMedico(req, res) {
  try {
    const medicos = await listarMed();
    return res.status(200).json(medicos);
  } catch (erro) {
    return res.status(500).json({
      mensagem: "Erro ao listar medicos"
    });
  }
}

export async function buscarMedico(req, res) {
  try {
    const medico = await buscarPorIdMed(req.params.id);

    if (!medico) {
      return res.status(404).json({
        mensagem: "Medico não encontrado"
      });
    }

    return res.status(200).json(medico);
  } catch (erro) {
    return res.status(500).json({
      mensagem: "Erro ao buscar medico"
    });
  }
}

export async function editarMedico(req, res) {
  try {
    const { id, nome, crm, especialidade } = req.body;

    if (!crm) {
      return res.status(400).json({
        mensagem: "CRM é obrigatório"
      });
    }

    const medico = new Medico (id, nome, crm, especialidade);
    const linhasAlteradas = await atualizarMed(req.params.id, medico);

    if (linhasAlteradas === 0) {
      return res.status(404).json({
        mensagem: "Medico não encontrado"
      });
    }

    return res.status(200).json({
      mensagem: "Medico atualizado com sucesso"
    });
  } catch (erro) {
    return res.status(500).json({
      mensagem: "Erro ao atualizar medico"
    });
  }
}

export async function removerMedico(req, res) {
  try {
    const linhasExcluidas = await excluir(req.params.id);

    if (linhasExcluidas === 0) {
      return res.status(404).json({
        mensagem: "Medico não encontrado"
      });
    }

    return res.status(204).send();
  } catch (erro) {
    return res.status(500).json({
      mensagem: "Erro ao excluir medico"
    });
  }
}
