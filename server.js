const express = require("express");
const path = require('path');
const app = express();

const distPath = path.join(__dirname, 'dist/my-notes-frontend/browser');
app.use(express.static(distPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, '0.0.0.0', () => {
    console.log("Servidor rodando na porta: ", port)
});