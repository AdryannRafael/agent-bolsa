// // import { Elysia } from "elysia";

import { ListAllTickers, DetailAllTickers } from "./braipe/tickers";
import { Ticker } from "./app/tickers/ticker.domain";
import { SetAllTicker, SetTickerInfo } from "./app/tickers/ticker.repo";
// // const app = new Elysia().get("/", () => "Hello Elysia").listen(3000);

// // console.log(
// //   `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
// // );
// import Brapi, from 'brapi';

// const brapiClient = new Brapi({
//   apiKey: process.env.BRAPI_API_KEY,
// });

// brapiClient.get("/api/v2/tickers")

/**
 * stock = AÇÃO
 * fund = FII
 * bdr =
 * "stock" | "fund" | "bdr";
 * "stock" | "unit" | "fii" | "etf" | "fi-agro"
 */
(async () => {
  const { v, err } = await ListAllTickers();
  if (err) throw err;

  let fii = [];
  let acoes = [];
  let etf = [];

  const rAcao = ["stock", "unit"];
  const rFii = ["fii", "fi-agro", "fi-infra"];
  const rEtf = ["etf", "bdr"];
  for (const a of v.results) {
    const { assetType, isActive, symbol: v } = a;
    if (isActive) {
      const last = v.charAt(v.length - 1);

      if (v == "AZUL98") {
        console.log(v);
      }
      if (last !== "F") {
        if (rAcao.includes(assetType)) {
          acoes.push(v);
        }
        if (rFii.includes(assetType)) {
          fii.push(v);
        }
        if (rEtf.includes(assetType)) {
          etf.push(v);
        }
      }
    }
  }

  // const etffile = Bun.file("./etf.txt");
  // etffile.write(etf.join(","));

  // const fiifile = Bun.file("./fii.txt");
  // fiifile.write(fii.join(","));

  const acoesfile = Bun.file("./acoes.txt");
  // await acoesfile.write(acoes.join(","));
  const newLocal = await acoesfile.text(); // acoes.join(",");
  let tikers = [];
  for (const t of newLocal.split(",")) {
    const { err: errDatil, v: detail } = await DetailAllTickers(t);
    if (errDatil) throw errDatil;
    if (detail.results.length) {
      const a = detail.results[0]!;
      if (a.data) {
        const ticker: Ticker = {
          cnpj: a.data.cnpj,
          name: a.symbol,
          setorKey: a.data.sectorKey,
        };
        tikers.push({ ...ticker });
      }
    }
  }
  const { err: e } = await SetAllTicker(tikers);
  if (e) throw e;
})();
