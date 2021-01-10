import Parser from 'xml2js';

export function xmlConverter(deals: any) {

  const builder = new Parser.Builder();
  let packageXml: any = [];
  let result;

  deals.data.map((deal: any) => {

    const order = {
      pedido: {
        cliente: {
          nome: deal.org_name,
          endereco: 'Rua Propeno',
          cpf_cnpj: '23.719.654/0001-75',
          ie_rg: '3067663000',
          numero: '400',
          complemento: 'Sala 54',
          bairro: 'Polo Petroquímico',
          cep: '95.700-000',
          cidade: 'Camaçari',
          uf: 'RS',
          fone: '5481153376',
          email: 'braskem@braskem.com.br',
        },
        itens: {
          item: [
            {
              codigo: '001',
              descricao: deal.title,
              un: 'N/A',
              qtde: '1',
              vlr_unit: deal.value,
            },
          ],
        }
      },
    };
    const xml = builder.buildObject(order);
    result = encodeURI(xml);
    packageXml.push(result);
  });

  return packageXml;

}

