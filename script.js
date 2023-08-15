const url = "https://global-warming.org/api/co2-api";

const yearInput = document.getElementById("year");
const monthInput = document.getElementById("month");
const dayInput = document.getElementById("day");
const button = document.getElementById("click-btn");
const divRef = document.getElementById("stats");
const statDiv = document.getElementById("statsContainer");
const co2stat = document.getElementById("co2stat");
const wordsContainer = document.getElementById("wordsContainer");
const words = document.getElementById("words");

const good = document.getElementById("good-amnt");
const mid = document.getElementById("mid-amnt");
const bad =  document.getElementById("bad-amnt");
const reallyBad = document.getElementById("really-bad");

const body = document.querySelector("body");
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
                        divRef.appendChild(statsContainer);

                        co2stat.innerHTML = `This is the amount of CO2 in ppm(parts per million): ${statsJSON.co2[i].trend}`;
                        statsContainer.appendChild(co2stat);

                        let num = parseInt(statsJSON.co2[i].trend)
                        if (num >= 300 && num <= 350) {
                            good.style.display = "flex";
                            bad.style.display = "none"
                            reallyBad.style.display = "none"
                            mid.style.display = "none"
                            body.style.backgroundImage = "url(images/green.png)";
                        }
                        else if (num > 350 && num < 400) {
                            mid.style.display = "flex";
                            good.style.display = "none";
                            bad.style.display = "none"
                            reallyBad.style.display = "none"
                            body.style.backgroundImage = "url(images/mid.png)";
                        }
                        else if (num > 400 && num < 450) {
                            bad.style.display = "flex";
                            reallyBad.style.display = "none"
                            mid.style.display = "none"
                            good.style.display = "none"
                            console.log("this works")
                            body.style.backgroundImage = "url(images/y.png)";
                        }
                        else if (num > 450) {
                            reallyBad.style.display = "flex";
                            good.style.display = "none";
                            bad.style.display = "none"
                            mid.style.display = "none"
                        }
                    }
                }
            }
        }
    })
} 