const url = "https://global-warming.org/api/co2-api";

const yearInput = document.getElementById("year");
const monthInput = document.getElementById("month");
const dayInput = document.getElementById("day");
const button = document.getElementById("click-btn");
const divRef = document.getElementById("stats");

button.onclick = function(event) {
    event.preventDefault();

    year = yearInput.value;
    month = monthInput.value;
    day = dayInput.value;

    fetch(url).
    then(function(response) {
        // getting info from the file
        console.log(response);
        return response.json();
    }).
    then(function(statsJSON) {
        console.log(statsJSON);
        // iterating through a loop to get the time that the user inputted
        for (let i = 0; i < statsJSON.co2.length; i++) {
            if (statsJSON.co2[i].year == year) {
                console.log(statsJSON.co2[i].year);
                if (statsJSON.co2[i].month == month) {
                    console.log(statsJSON.co2[i].month);
                    if (statsJSON.co2[i].day == day) {
                        //once the info is looped through and the right one is found
                        let statsContainer = document.createElement("div");
                        divRef.appendChild(statsContainer);

                        let co2Stat = document.createElement("p");
                        co2Stat.innerHTML = `This is the amount of CO2 in ppm(parts per million): ${statsJSON.co2[i].trend}`;
                        statsContainer.appendChild(co2Stat);
                    }
                }
            }
        }
    })
} 