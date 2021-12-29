import express from 'express';
import { login, signUp } from './controller.js';

const router = express.Router();


router.post('/login', login);

router.post('/signup', signUp);

export default router;
