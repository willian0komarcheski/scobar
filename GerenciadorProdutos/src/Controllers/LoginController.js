// controllers/LoginController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secret = 'your-very-secure-secret';
const LoginService = require('../Services/LoginService');

class LoginController {
    async createLogin(req, res) {
        try {
            login = req.body;
            login.Senha = await bcrypt.hash(login.Senha, 10);
            login.Token = jwt.sign({ login }, secret, { expiresIn: '1h' });
            const Login = await LoginService.createLogin(login);
            res.status(201).json(Login);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAllLogins(req, res) {
        try {
            const Logins = await LoginService.getAllLogins();
            console.log(Logins);
            res.json(Logins);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getLoginById(req, res) {
        try {
            const Login = await LoginService.getLoginById(req.params.id);
            if (!Login) {
                return res.status(404).json({ error: 'Login not found' });
            }
            res.json(Login);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateLogin(req, res) {
        try {
            const Login = await LoginService.updateLogin(req.params.id, req.body);
            res.json(Login);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteLogin(req, res) {
        try {
            await LoginService.deleteLogin(req.params.id);
            res.json({ message: 'Login deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async Login(req, res) {
        logic = await LoginService.verificarLogin(req.body);
        if(logic) {

        }
    }
}

module.exports = new LoginController();
