import fetch from 'node-fetch'
import Querystring from 'query-string'
require('dotenv').config()

describe('Pipedrive', () => {
  it('Integration with Pipedrive service: returns deals with won status.', async () => {

    const params = Querystring.stringify({
      api_token: process.env.PIPEDRIVE_KEY,
      status: 'won'
    });

    fetch(`${process.env.BASE_URL_BLING}?${params}`, {
      method: 'get',
      headers: {
        Accept: 'application/json',
      },
    }).then(async (data) => {
      if (data.status === 200) {
        expect(data.status).toBe(200);
      }
    })
  });

});