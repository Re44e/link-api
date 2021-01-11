import Parser from 'xml2js';

export function xmlConverter(deals: any) {

  const builder = new Parser.Builder();
  let packageXml: any = [];
  let result;

  deals.data.map((deal: any) => {

    const order = {
      pedido: {
        cliente: {
          nome: deal.org_name
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

