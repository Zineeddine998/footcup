import express from 'express';
import players from "./players/index.js";

const router = express.Router();

router.use("/players", players);

export default router;