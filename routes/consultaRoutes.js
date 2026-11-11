import { Router } from "express";
import {
  cadastrarConsulta,
  listarConsultas,
  buscarConsulta,
  editarConsulta,
  removerConsulta,
} from "../controller/consultaController.js";

const router = Router();

router.post("/", cadastrarConsulta);
router.get("/", listarConsultas);
router.get("/:id", buscarConsulta);
router.put("/:id", editarConsulta);
router.delete("/:id", removerConsulta);

export default router;
