import express, { Router } from 'express';
import { getMovies } from '../controllers/homepage.js';

const router = express.Router()

router.get('/getMovies', getMovies);

export default router;