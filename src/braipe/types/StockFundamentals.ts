
/** @example {"results":[{"requestedSymbol":"VVAR3","symbol":"BHIA3","changed":true,"data":{"address1":"Rua Flórida, 1970","address2":"5 andar","address3":null,"city":"SÃO PAULO","state":"SP","zip":"4565001","country":"BRASIL","phone":"(11) 42256017","fax":"(11) 42256996","website":"https://ri.grupocasasbahia.com.br","industry":"Eletrodomésticos","industryKey":"eletrodomesticos","industryDisp":"Eletrodomésticos","sector":"Consumo Cíclico","sectorKey":"consumo-ciclico","sectorDisp":"Consumo Cíclico","longBusinessSummary":"O Grupo Casas Bahia S.A., listado na B3 sob BHIA3, atua no varejo de bens duráveis e eletroeletrônicos no Brasil, com operação omnicanal que combina lojas físicas, comércio eletrônico e marketplace. A companhia opera marcas de varejo conhecidas nacionalmente e mantém estrutura de logística, distribuição e serviços financeiros para apoiar vendas parceladas e recorrência de clientes. A base de receita inclui venda de produtos, serviços e intermediação em canais digitais.\n\nA dinâmica de resultados é influenciada por consumo das famílias, custo de crédito, inadimplência, nível de estoques e eficiência logística. O setor de varejo de eletrodomésticos é sensível a renda disponível, juros e competição de preço entre grandes plataformas. Nos últimos anos, a empresa passou por reorganização de marca e ajustes operacionais para reduzir alavancagem, melhorar geração de caixa e priorizar rentabilidade por canal e categoria de produto.","fullTimeEmployees":57500,"companyOfficers":null,"twitter":"@CasasBahia","name":"PONTO FRIO","startDate":"1952-01-01","description":null,"logoUrl":"https://icons.brapi.dev/icons/BHIA3.svg","cnpj":"33041260065290","administratorName":null,"administratorCnpj":null,"administratorAddress":null,"administratorAddressNumber":null,"administratorAddressComplement":null,"administratorDistrict":null,"administratorCity":null,"administratorState":null,"administratorZipCode":null,"administratorPhone1":null,"administratorPhone2":null,"administratorPhone3":null,"administratorWebsite":null,"administratorEmail":null}}],"requestedAt":"2026-06-14T05:03:16.000Z","took":200} */
export interface StockProfileResponse<T=unknown> {
  results: StockFundamentalsSeries<T>[];

  /**
   * Data e hora da requisição em ISO 8601.
   *
   * @example "2025-01-24T17:32:38.000Z"
   */
  requestedAt: string;

  /**
   * Tempo de processamento, em milissegundos.
   *
   * @example 45
   */
  took: number;
}

export interface StockFundamentalsSeries<T=unknown> {
  /** @example "VVAR3" */
  requestedSymbol: string;

  /** @example "BHIA3" */
  symbol: string;

  /** @example true */
  changed: boolean;

  /** Dados do endpoint. Pode ser objeto, array ou null. */
  data?: T;
}
