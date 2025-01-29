const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const userRoutes = require('./userRoutes'); // Import der Benutzerrouten
const fs = require('fs');

const app = express();
const PORT = 3001;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Statische Dateien
app.use(express.static(path.join(__dirname, '../')));

// Initialisiere die Benutzerdatei, falls nicht vorhanden
const usersFilePath = path.join(__dirname, 'users.db'); // SQLite-Datenbank
if (!fs.existsSync(usersFilePath)) {
    fs.writeFileSync(usersFilePath, JSON.stringify([]));
}

// Benutzerrouten einbinden
app.use('/api/users', userRoutes);

// Platzhalter für weitere Routen oder Middleware
// Beispiel: app.use('/api/something', somethingRoutes);

// Server starten
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
