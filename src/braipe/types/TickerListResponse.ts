
export interface TickerListResponse {
  results: TickerListItem[];
  indexes: TickerIndexItem[];
  facets: TickerFacets;
  pagination: TickerPagination;

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

export interface TickerListItem {
  /**
   * Ticker do ativo.
   *
   * @example "PETR4"
   */
  symbol: string;

  /**
   * Nome da empresa ou do fundo.
   *
   * @example "Petróleo Brasileiro S.A."
   */
  name: string;

  /**
   * Nome longo. Pode ser nulo.
   *
   * @example "Petroleo Brasileiro SA Petrobras Preference Shares"
   */
  longName: string;

  /**
   * Tipo do ativo.
   *
   * @example "stock"
   */
  assetType: "stock" | "fund" | "bdr";

  /**
   * Subtipo do ativo: stock, unit, fii, etf, fi-infra, fi-agro, fip, fidc ou bdr.
   *
   * @example "stock"
   */
  subType: "stock" | "unit" | "fii" | "etf" | "fi-infra" | "fi-agro" | "fip" | "fidc" | "bdr";

  /**
   * Bolsa.
   *
   * @example "B3"
   */
  exchange: "B3";

  /**
   * Moeda.
   *
   * @example "BRL"
   */
  currency: "BRL";

  /**
   * Setor. Pode ser nulo.
   *
   * @example "Energy Minerals"
   */
  sector: string;

  /**
   * Subsetor. Pode ser nulo.
   *
   * @example "Petróleo, Gás e Biocombustíveis"
   */
  subsector: string;

  /**
   * `true` quando o ativo está em negociação.
   *
   * @example true
   */
  isActive: boolean;

  /**
   * URL do logo.
   *
   * @example "https://icons.brapi.dev/icons/PETR4.svg"
   */
  logoUrl: string;
  quote: TickerQuoteSummary;
}

export interface TickerIndexItem {
  /** @example "^BVSP" */
  symbol: string;

  /** @example "IBOVESPA" */
  name: string;

  /** @example "B3" */
  exchange: "B3";

  /** @example "index" */
  assetType: "index";
}

export interface TickerFacets {
  /** Valores aceitos em `sector`. */
  sectors: string[];

  /** Valores aceitos em `subsector`. */
  subsectors: string[];

  /**
   * Valores aceitos em `type`.
   *
   * @example ["stock","fund","bdr"]
   */
  assetTypes: string[];

  /**
   * Valores aceitos em `subType`.
   *
   * @example ["stock","unit","fii","etf","bdr"]
   */
  subTypes: string[];
}

export interface TickerPagination {
  /** @example 1 */
  page: number;

  /** @example 20 */
  limit: number;

  /** @example 2302 */
  totalItems: number;

  /** @example 116 */
  totalPages: number;

  /** @example true */
  hasNextPage: boolean;
}

export interface TickerQuoteSummary {
  /**
   * Último preço.
   *
   * @example 36.65
   */
  lastPrice: number;

  /**
   * Variação no dia, em porcentagem.
   *
   * @example -0.95
   */
  changePercent: number;

  /**
   * Volume negociado no dia.
   *
   * @example 27681100
   */
  volume: number;

  /**
   * Valor de mercado, em reais. Pode ser nulo.
   *
   * @example 483937892568
   */
  marketCap: number;
}
