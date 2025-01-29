const sqlite3 = require('sqlite3').verbose();

// Verbindung zur Datenbank herstellen (oder Datei erstellen, falls sie nicht existiert)
const db = new sqlite3.Database('./users.db', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');

        // Tabelle erstellen, falls sie noch nicht existiert
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )`, (err) => {
            if (err) {
                console.error('Error creating table:', err.message);
            } else {
                console.log('Users table is ready.');
            }
        });
    }
});

module.exports = db;
