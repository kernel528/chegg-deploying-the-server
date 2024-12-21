const express = require('express');
const cors = require('cors');

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 5011;

router.get('/', cors(), (req, res) => {
    res.json({ message: 'Hello Render!' });
});

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT} `);
});

module.exports = app;