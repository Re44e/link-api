import fetch from 'node-fetch';
import Querystring from 'query-string';
require('dotenv').config()

/* Integração com o serviço: Bling */
class Bling {

  private baseURL
  private tokenAPI

  constructor() {
    this.baseURL = process.env.BASE_URL_BLING
    this.tokenAPI = process.env.BLING_KEY
  }

  public async registerDeals(deal: any) {

    const params = Querystring.stringify({
      apikey: this.tokenAPI,
      xml: deal
    });

    return fetch(`${this.baseURL}/pedido/json/?${params}`, {
      method: 'post',
    }).then(async (data) => {
      const result = await data.json();
      if (result.retorno && !result.retorno.erros) {
        return result.retorno;
      }
      throw result.retorno.erros[0];
    });

  }

  public async getAllOrders(){
    const params = Querystring.stringify({
      apikey: this.tokenAPI
    });

    return fetch(`${this.baseURL}/pedidos/json?${params}`, {
      method: 'get',
    }).then(async (data) => {
      const result = await data.json();
      if (result.retorno && !result.retorno.erros) {
        return result.retorno;
      }
      throw result.retorno.erros[0];
    });
  }
}

export default new Bling();