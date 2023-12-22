const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const comments = [];

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const { name, comment } = req.body;
    const newComment = { name, comment };
    comments.push(newComment);
    res.json(newComment);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
