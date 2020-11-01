const express = require('express');
const feedbackRouter = express.Router();
const pool = require ('../modules/pool');

feedbackRouter.post('/', (req, res) => {
    let feeling = Number(req.body.feeling);
    let understanding = Number(req.body.understanding);
    let support = Number(req.body.support);

    let queryText = (`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4)`);
    let queryParams = [feeling, understanding, support, req.body.comments];

    pool.query(queryText, queryParams).then(result => {
        res.sendStatus(200);
    }).catch(error => {
        console.log(error);
        res.sendStatus(500);
    });
});

module.exports = feedbackRouter;