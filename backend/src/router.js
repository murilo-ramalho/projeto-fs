const express = require('express');

const router = express.Router();

router.get('/tasks', (req,res) => res.status(200).send("deu certo pia"));

module.exports = router;