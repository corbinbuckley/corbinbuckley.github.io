var cityName = document.getElementById('cityName');


var requestURL = 'https://byui-cit230.github.io/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var townData = request.response;
    for (var i = 0; i < townData.towns.length; i++) {
        if (townData.towns[i].name === "Franklin") {
            document.getElementById("motto").innerHTML = townData.towns[i].motto;
            document.getElementById("yearFounded").innerHTML = townData.towns[i].yearFounded;
            document.getElementById("currentPopulation").innerHTML = townData.towns[i].currentPopulation;
            document.getElementById("averageRainfall").innerHTML = townData.towns[i].averageRainfall;
            for (var j = 0; j < townData.towns[i].events.length; j++) {
                var newListItem = document.createElement("li");
                newListItem.innerHTML = townData.towns[i].events[j];
                document.getElementById("events").append(newListItem);
            }
        }

    }
}
