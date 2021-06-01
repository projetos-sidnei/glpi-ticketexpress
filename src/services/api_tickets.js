import axios from 'axios';
const url = 'http://api.tigcm.com.br:3000/glpi';
export default {
  async getApiTicket(session_token, id_user) {
    try {
      const ticket = await axios(`${url}/tickets/user/${id_user}`,
        {
          method: 'GET',
          headers: {
            session_token:session_token
          }
        }
      );
      return ticket;
    } catch (err) {
      return;
    }
  }
}