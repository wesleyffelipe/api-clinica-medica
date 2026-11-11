import { Router } from "express";
import {
  cadastrarPaciente,
  listarPaciente,
  buscarPaciente,
  editarPaciente,
  removerPaciente,
} from "../controller/pacienteController.js";

const router = Router();

router.post("/", cadastrarPaciente);
router.get("/", listarPaciente);
router.get("/:id", buscarPaciente);
router.put("/:id", editarPaciente);
router.delete("/:id", removerPaciente);

export default router;
