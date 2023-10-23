import { series } from './data.js';
var seriesTbody = document.getElementById('series-info');
var averageSeasonElm = document.getElementById("average-seasons");
renderSeriesInTable(series);
averageSeasonElm.innerHTML = "Average number of seasons: ".concat(getAverageSeasons(series));
function renderSeriesInTable(series) {
    console.log('Desplegando series en la tabla...');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<th class=\"firstnum\" scope=\"row\">".concat(serie.num, "</th>\n                           <td class=\"seriesname\">").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    return totalSeasons / series.length;
}
