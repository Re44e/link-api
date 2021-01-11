import fetch from 'node-fetch';
import Querystring from 'query-string';
import { IdealsDTO } from '../../domain/interfaces/deals.DTO'
require('dotenv').config()

/* Integração com o serviço: Pipedrive */
class Pipedrive {

  private baseURL: string | undefined
  private tokenAPI: string | undefined

  constructor() {
    this.baseURL = process.env.BASE_URL_PIPEDRIVE;
    this.tokenAPI = process.env.PIPEDRIVE_KEY
  }

  public async getAllDealsByStatus(status: string) {

    const params = Querystring.stringify({
      api_token: this.tokenAPI,
      status: 'won'
    });
    return fetch(`${this.baseURL}?${params}`, {
      method: 'get',
      headers: {
        Accept: 'application/json',
      },
    }).then(async (data) => {
      if (data.status === 200) {

        const result = await data.json();
        let payload: IdealsDTO;
        let deals: any = [];

        result.data.map((deal: any) => {
          payload = {
            organization: deal.org_name,
            title: deal.title,
            value: deal.value
          }
          deals.push(payload);
        })
        return result;
      }
    })
      .catch((error) => { throw error })
  }

}
export default new Pipedrive();