//26.6.2 number 1: add code that runs on the window load event
window.addEventListener("load", function() {
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
        response.json().then( function(json) {
            let container = document.getElementById("container");
            for (let i = 0; i < json.length; i++) {
                let color;
                if (json[i].active === true) {
                    color = "green";
                } else {
                    color = "black"
                }
                container.innerHTML +=
                `
                <div class="astronaut">
                <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                        <li style = color:${color}>Active: ${json[i].active}</li>
                        <li>Skills: ${json[i].skills.join(", ")}</li>
                    </ul>
                </div>
                <img class="avatar" src="${json[i].picture}">
                </div>
                `
            }
            let count = document.querySelector('h1');
            count.innerHTML = json.length + " " + count.innerHTML;
        });
    });
});

//26.6.2 number 2: make a GET request using fetch to the astronauts API (do this inside the window load event handler)
// "https://handlers.education.launchcode.org/static/astronauts.json"


//26.6.2 number 3: add each astronaut to the web page using the HTML template shown here
// "https://education.launchcode.org/intro-to-professional-web-dev/chapters/fetch-json/studio.html"  studio instructions page