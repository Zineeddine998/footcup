import express from 'express';
import { getAllPlayers, getPlayerById, deletePlayerById, createPlayer, updatePlayer } from "./controller.js";


const router = express.Router();


// get all players
router.get('/all', getAllPlayers);

// get player by id
router.get('/:id', getPlayerById);


// update player by idchrome


// delete player
router.delete('/:id', deletePlayerById);


router.post('/', createPlayer);
router.put('/', updatePlayer);


export default router;

