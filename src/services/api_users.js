import axios from 'axios';
const url = 'http://api.tigcm.com.br:3000/glpi';
export default {
  async getApiUser(session_token, user) {    
    try {
      const id_user = await axios(`${url}/user/login/${user}`,
        {
          method: 'GET',
          headers: {
            session_token:session_token
          }
        }
      );
      return id_user;
    } catch (err) {
      return;
    }
  }
}