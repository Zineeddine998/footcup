import express from 'express';
import players from "./players/index.js";
import auth from "./auth/index.js";

const router = express.Router();

router.use("/players", players);
router.use("/auth", auth);

export default router;