const express = require('express');
const { registerUser, loginUser } = require('./userController');
const router = express.Router();


// Route für die Benutzerregistrierung
router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send('Benutzername und Passwort sind erforderlich.');
    }

    try {
        await registerUser(username, password);
        res.redirect('/logout.html');
    } catch (err) {
        res.status(400).send(err.message);
    }
});


// Route für den Benutzerlogin
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send('Benutzername und Passwort sind erforderlich.');
    }

    try {
        const result = await loginUser(username, password);
        res.redirect('/logout.html');
    } catch (err) {
        res.status(400).send(err.message);
    }
});

module.exports = router;
