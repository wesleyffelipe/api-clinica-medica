import { Router } from "express";
import {
  cadastrarMedico,
  listarMedico,
  buscarMedico,
  editarMedico,
  removerMedico,
} from "../controller/medicoController.js";

const router = Router();

router.post("/", cadastrarMedico);
router.get("/", listarMedico);
router.get("/:id", buscarMedico);
router.put("/:id", editarMedico);
router.delete("/:id", removerMedico);

export default router;
