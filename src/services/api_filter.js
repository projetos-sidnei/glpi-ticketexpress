import axios from 'axios';
const url = 'http://api.tigcm.com.br:3000/glpi';
const filter = 'filter?is_deleted=0&as_map=0&criteria%5B0%5D%5Blink%5D=AND&criteria%5B0%5D%5Bfield%5D=5&criteria%5B0%5D%5Bsearchtype%5D=equals&criteria%5B0%5D%5Bvalue%5D=';
const search = '&search=Pesquisar&itemtype=Ticket&start=0&_glpi_csrf_token=e82d28efb207eb1db5709774b254b431';
const force_display='&uid_cols=true&forcedisplay[0]=12&forcedisplay[1]=15&forcedisplay[2]=21';
const range = '&range=0-10000';
export default {
  async getApiTicket(session_token, id_user) {
    try {
      const ticket = await axios(`${url}/tickets/${filter}${id_user}${search}${force_display}${range}`,     
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