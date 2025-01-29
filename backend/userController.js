const fs = require('fs');
const path = require('path');
const { hashPassword, comparePassword } = require('./auth');

const usersFilePath = path.join(__dirname, 'users.db');

// Benutzerregistrierung
const registerUser = async (username, password) => {
    const users = JSON.parse(fs.readFileSync(usersFilePath));

    if (users.find((user) => user.username === username)) {
        throw new Error('Benutzername bereits vergeben.');
    }

    const hashedPassword = await hashPassword(password);
    users.push({ username, password: hashedPassword });
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

// Benutzerlogin
const loginUser = async (username, password) => {
    const users = JSON.parse(fs.readFileSync(usersFilePath));
    const user = users.find((user) => user.username === username);

    if (!user) {
        throw new Error('Benutzername oder Passwort falsch.');
    }

    const isPasswordCorrect = await comparePassword(password, user.password);
    if (!isPasswordCorrect) {
        throw new Error('Benutzername oder Passwort falsch.');
    }

    return { message: 'Login erfolgreich!' };
};

module.exports = { registerUser, loginUser };
