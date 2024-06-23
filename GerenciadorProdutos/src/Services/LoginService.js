// services/loginService.js

const Login = require('../Models/Login');

class LoginService {
    async createLogin(LoginData) {
        try {
            return await Login.create(LoginData);
        } catch (error) {
            throw new Error('Could not create login: ' + error.message);
        }
    }

    async getAllLogins() {
        try {
            return await Login.findAll();
        } catch (error) {
            throw new Error('Could not get logins: ' + error.message);
        }
    }

    async getLoginById(LoginId) {
        try {
            return await Login.findByPk(LoginId);
        } catch (error) {
            throw new Error('Could not get login: ' + error.message);
        }
    }

    async updateLogin(LoginId, LoginData) {
        try {
            const Login = await Login.findByPk(LoginId);
            if (!Login) {
                throw new Error('login not found');
            }
            await Login.update(LoginData);
            return Login;
        } catch (error) {
            throw new Error('Could not update login: ' + error.message);
        }
    }

    async deleteLogin(LoginId) {
        try {
            const Login = await Login.findByPk(LoginId);
            if (!Login) {
                throw new Error('login not found');
            }
            await Login.destroy();
        } catch (error) {
            throw new Error('Could not delete login: ' + error.message);
        }
    }

    async verificarLogin(Login) {
        const logins = await this.getAllLogins();
        logins.forEach(login => {
            if((login.Nome == Login.Nome) && (login.Senha == Login.Senha)) {
                return true;
            }
        });
        return false;
    }


    
}

module.exports = new LoginService();
