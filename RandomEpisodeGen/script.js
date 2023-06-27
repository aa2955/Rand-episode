var animeInput = document.getElementById("animeInput");
var randomButton = document.getElementById("submitBtn");


function generateRandomEpisode() {
    var animeDict = {
        "naruto": 220,
        "one piece": 1094,
        "naruto shippuden": 500,
        "dragon ball": 400,
    };

    var animeName = animeInput.value.toLowerCase(); 
    var output = document.getElementById("output");
    if (animeName.trim() !== "") {
        var episodeCount = animeDict[animeName];
        if (episodeCount !== undefined) {
            //pick a random number between 1 and episode count and output it
            var randomEpisode = Math.floor(Math.random() * episodeCount) + 1;
            output.textContent = randomEpisode;
        } else {
            output.textContent = "Anime not found";
        }
    } else {
        output.textContent = "Please enter an anime name";
    }

}

randomButton.addEventListener("click", generateRandomEpisode);
animeInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        generateRandomEpisode();
    }
});