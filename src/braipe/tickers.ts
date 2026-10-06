import Brapi from "brapi";
import { E } from "../shared/either";
import { TickerListResponse } from "./types/TickerListResponse";
import { InternalException } from "../shared/error/exceptions";
import { StockProfileResponse } from "./types/StockFundamentals";

const brapiClient = new Brapi({
  apiKey: process.env.BRAPI_API_KEY,
});

export async function ListAllTickers(): E.R<
  TickerListResponse,
  InternalException
> {
  const { err, v } = await E.External(
    brapiClient.get<TickerListResponse>("/api/v2/tickers", {query: {limit: 2000}}),
  );
  if (err) return E.Fail(err);

  return E.Ok(v);
}

export async function DetailAllTickers(q: string): E.R<
  StockProfileResponse<any>,
  InternalException
> {
  const { err, v } = await E.External(
    brapiClient.get<StockProfileResponse<any>>("/api/v2/stocks/profile", {query: {symbols: q}}),
  );
  if (err) return E.Fail(err);

  return E.Ok(v);
}
