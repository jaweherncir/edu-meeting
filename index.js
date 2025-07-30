const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 4000;

// Fichiers statiques dans le dossier racine
app.use(express.static(__dirname));

// Si quelqu’un visite une autre page que "/", on renvoie index.html
app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});