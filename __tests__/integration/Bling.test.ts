import fetch from 'node-fetch'
import Querystring from 'query-string'
require('dotenv').config()

describe('Bling', () => {
  it('Integration with Bling service: returns orders.', async () => {

    const params = Querystring.stringify({
      apikey: process.env.BLING_KEY
    });

    return fetch(`${process.env.BASE_URL_BLING}/pedidos/json?${params}`, {
      method: 'get',
    }).then(async (data) => {
      const result = await data.json();
      if (result.retorno && !result.retorno.erros) {
        expect(result.retorno).toHaveLength
      }
    });
  
  });
  
});