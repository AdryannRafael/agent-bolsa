import {redis} from "bun"
import {E} from "~/shared/either"
import { Ticker } from "./ticker.domain";

// const TICKER_KEY = "TICKERS"

function MountKeyInfo(ticker: string) {
    return `${ticker}_INFO`
}

export async function GetTickerInfo(ticker: string):E.R<Ticker|null> {
    const {err,v} = await E.Db(redis.get(MountKeyInfo(ticker)), "query")
    if(err) return E.Fail(err)
    if(v === null) return E.Ok(null)

    const tickerInfo:Ticker = JSON.parse(v);
    return E.Ok(tickerInfo)
}

export async function SetTickerInfo(ticker: Ticker):E.R<null> {
    const {err} = await E.Db(redis.set(MountKeyInfo(ticker.name), JSON.stringify(ticker)), "query")
    if(err) return E.Fail(err)
    return E.Ok(null)
}
export async function SetAllTicker(tickers: Ticker[]):E.R<null> {
    const {err} = await E.Db(redis.set("ALL_TICKERS", JSON.stringify(tickers)), "query")
    if(err) return E.Fail(err)
    return E.Ok(null)
}




