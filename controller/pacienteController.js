import { Paciente } from "../model/Paciente.js";
import {
  cadastrarPac,
  listarPac,
  buscarPorIdPac,
  atualizarPac,
  excluirPac,
} from "../repository/pacienteRepository.js";

export async function cadastrarPaciente(req, res) {
  try {
    const { id, nome, cpf, data_nascimento } = req.body;

    if (!data_nascimento) {
      return res.status(400).json({
        mensagem: "data de nascimento é obrigatória"
      });
    }

    const paciente = new Paciente(id, nome, cpf, data_nascimento);
    const Id = await cadastrarMed(paciente);

    return res.status(201).json({
      id_paciente: id,
      ...paciente
    });
  } catch (erro) {
    return res.status(500).json({
      mensagem: "Erro ao cadastrar paciente"
    });
  }
}

export async function listarPaciente(req, res) {
  try {
    const pacientes = await listarPac();
    return res.status(200).json(pacientes);
  } catch (erro) {
    return res.status(500).json({
      mensagem: "Erro ao listar pacientes"
    });
  }
}

export async function buscarPaciente(req, res) {
  try {
    const paciente = await buscarPorIdPac(req.params.id);

    if (!paciente) {
      return res.status(404).json({
        mensagem: "Paciente não encontrado"
      });
    }

    return res.status(200).json(paciente);
  } catch (erro) {
    return res.status(500).json({
      mensagem: "Erro ao buscar paciente"
    });
  }
}

export async function editarPaciente(req, res) {
  try {
    const { id, nome, cpf, data_nascimento } = req.body;

    if (!data_nascimento) {
      return res.status(400).json({
        mensagem: "Data de nascimento é obrigatória"
      });
    }

    const paciente = new Paciente (id, nome, cpf, data_nascimento);
    const linhasAlteradas = await atualizarPac(req.params.id, paciente);

    if (linhasAlteradas === 0) {
      return res.status(404).json({
        mensagem: "Paciente não encontrado"
      });
    }

    return res.status(200).json({
      mensagem: "Paciente atualizado com sucesso"
    });
  } catch (erro) {
    return res.status(500).json({
      mensagem: "Erro ao atualizar paciente"
    });
  }
}

export async function removerPaciente(req, res) {
  try {
    const linhasExcluidas = await excluirPac(req.params.id);

    if (linhasExcluidas === 0) {
      return res.status(404).json({
        mensagem: "Paciente não encontrado"
      });
    }

    return res.status(204).send();
  } catch (erro) {
    return res.status(500).json({
      mensagem: "Erro ao excluir paciente"
    });
  }
}
