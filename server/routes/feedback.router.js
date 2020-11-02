const express = require('express');
const feedbackRouter = express.Router();
const pool = require ('../modules/pool');

// POST request to DB for new feedback entry.
feedbackRouter.post('/', (req, res) => {
    let feeling = Number(req.body.feeling);
    let understanding = Number(req.body.understanding);
    let support = Number(req.body.support);

    let queryText = (`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);`);
    let queryParams = [feeling, understanding, support, req.body.comments];

    pool.query(queryText, queryParams).then(result => {
        res.sendStatus(200);
    }).catch(error => {
        console.log(error);
        res.sendStatus(500);
    });
});

// GET request to DB for all stored feedback entries.
feedbackRouter.get('/', (req, res) => {
    let queryText = (`SELECT * FROM "feedback" ORDER BY "id" DESC;`);

    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch(error => {
        res.sendStatus(500);
    });
});

// DELETE request to remove a specific feedback entry.
feedbackRouter.delete('/:id', (req, res) => {
    console.log(req.params);
    let id = req.params.id;
    let queryText = `DELETE FROM "feedback" WHERE "id" = $1;`;

    pool.query(queryText, [id]).then(result => {
        res.sendStatus(200);
    }).catch(error => {
        res.sendStatus(500);
    });
});

// PUT route to update feedback entries marked for review.
feedbackRouter.put('/:id', (req, res) => {
    let id = req.params.id;
    let flag = req.body.flag;
    console.log(req.body);

    let queryText = `UPDATE "feedback" SET "flagged" = $1 WHERE "id" = $2;`;

    pool.query(queryText, [flag, id]).then(result => {
        res.sendStatus(200);
    }).catch(error => {
        res.sendStatus(500);
    });
});

module.exports = feedbackRouter;