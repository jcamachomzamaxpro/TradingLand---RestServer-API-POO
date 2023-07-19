import { Router } from "express";
import { obtenerTrader, agregarTrader, borrarTrader, updateTrader, selectTrader } from "../controllers/trader.controllers.js";

const router = Router();

router.get("/all", obtenerTrader);
router.post("/add", agregarTrader);
router.get("/one/:id", selectTrader);
router.delete("/del/:id", borrarTrader);
router.put("/upd/:id", updateTrader);

export default router;