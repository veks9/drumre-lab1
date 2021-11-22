import express, { Router } from 'express';
import { login, register, fbLogin } from '../controllers/auth.js'

const router = express.Router()

router.post('/login', login);
router.post('/register', register);
router.post('/fbLogin', fbLogin);


export default router