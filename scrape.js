const fetch = require('node-fetch');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const scrape = async () => {
  const res = await fetch('https://www.homes.co.jp/?cmp_id=001_05005_0006139540&utm_content=001_05005_0006139540&utm_source=google&utm_medium=cpc&utm_term=%25E4%25B8%258D%25E5%258B%2595%25E7%2594%25A3%2520%25E3%2583%259B%25E3%2583%25BC%25E3%2583%25A0%25E3%2582%25BA&utm_campaign=%5B%25E6%259C%25AC%25E7%25A4%25BE%5D%5BV5%5D%25E3%2583%2596%25E3%2583%25A9%25E3%2583%25B3%25E3%2583%2589%25E5%2590%258D&gclid=EAIaIQobChMI3__CnPC97gIVA6uWCh3i4w_LEAAYASAAEgI_pfD_BwE');
//   const res = await fetch('https://www.jma.go.jp/jp/week/319.html');
  const html = await res.text();
  const dom = new JSDOM(html);
  const document = dom.window.document; //ここからは上は変えない
  const nodes = document.querySelectorAll('#prg-searchTypeList');
//   const nodes = document.querySelectorAll('#infotablefont tr:nth-child(7) td');
  const tokyoWeathers = Array.from(nodes).map((td) => td.textContent.trim());
  console.log(tokyoWeathers);
};
scrape();