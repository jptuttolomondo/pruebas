import { Router } from "express";
export const router = Router();
router.get("/ruta1", (req, res) => {
  res.send("hola GET RUTA1");
});
