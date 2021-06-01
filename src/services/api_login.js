import axios from 'axios';
const url = 'http://api.tigcm.com.br:3000/glpi';
export default {
  async getApiGlpi(login, password) {
    try {
      const api = await axios(`${url}/login`,
        {
          method: 'POST',
          data: {
            login,
            password
          }
        }
      );
      return api;
    } catch (error) {
      return;
    }
  }
}

//192.168.7.62:3005/login;