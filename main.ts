import { Serie } from './Serie.js';
import { series } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series-info')!;
const averageSeasonElm: HTMLElement = document.getElementById("average-seasons")!;

renderSeriesInTable(series);

averageSeasonElm.innerHTML = `Average number of seasons: ${getAverageSeasons(series)}`

function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando series en la tabla...');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<th class="firstnum" scope="row">${serie.num}</th>
                           <td class="seriesname">${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function getAverageSeasons(series: Serie[]): number {
  let totalSeasons: number = 0;
  series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
  return totalSeasons/series.length;
}