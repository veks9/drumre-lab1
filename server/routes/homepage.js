import express, { Router } from 'express';

const router = express.Router()

router.get('/', (req, res) => {
    console.log('homerute')
    res.send('THIS WORKS')
});

export default router