import { Router } from "express";
import { obtenerTrader, agregarTrader, borrarTrader, updateTrader } from "../controllers/trader.controllers.js";

const router = Router();

router.get("/all", obtenerTrader);
router.post("/add", agregarTrader);
router.delete("/del/:id", borrarTrader);
router.patch("/upd/:id", updateTrader);

export default router;