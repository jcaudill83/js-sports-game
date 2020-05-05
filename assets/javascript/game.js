let resetButton = document.querySelector("#reset-button"); //add event listener to buttons
let teamoneshootButton = document.querySelector("#teamone-shoot-button");
let teamtwoshootButton = document.querySelector("#teamtwo-shoot-button");
let teamonenumgoals = document.querySelector("#teamone-numgoals");
let teamtwonumgoals = document.querySelector("#teamtwo-numgoals");
let teamonenumshots = document.querySelector("#teamone-numshots");
let teamtwonumshots = document.querySelector("#teamtwo-numshots");
let reset = document.querySelector("#num-resets")


resetButton.addEventListener("click", function () {
    console.log("reset button clicked");
    let refresh = Number(reset.innerHTML) + 1;
    reset.innerHTML = refresh;
})

teamoneshootButton.addEventListener("click", function () {
    console.log("shoot button clicked");
    let shots = Number(teamonenumshots.innerHTML) + 1;
    teamonenumshots.innerHTML = shots;
    var d = Math.random();
if (d < 0.5){
    console.log("made shots")
    let madeshots = Number(teamonenumgoals.innerHTML) + 1;
    teamonenumgoals.innerHTML = madeshots;
}
})
teamtwoshootButton.addEventListener("click", function () {
    console.log("shoot button clicked");
    let shots = Number(teamtwonumshots.innerHTML) + 1;
    teamtwonumshots.innerHTML = shots;
    var d = Math.random();
if (d < 0.5){
    console.log("made shots")
    let madeshots = Number(teamtwonumgoals.innerHTML) + 1;
    teamtwonumgoals.innerHTML = madeshots;
}
})


