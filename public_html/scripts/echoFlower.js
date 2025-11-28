const echoes = [
    "* TALENT among the fresh grass",
    "* ANGUISH in a dark cave",
    "* the LIE behind the rainbow",
    "",
    "* the shadow behind you glows raw",
    "* it licks wide across the empty landscape",
    "* it stretches farther and farther",
    "* no end",
    "* ...",
    "* its me and the shadow again",
    "* again im sitting here",
    "* looking out over the landscape",
    "",
    "liliths house"
];

var isTyping = false;
var counter = 0;
const textSpeed = 30;

function aPassingConversation() {
    let voice = document.getElementById("echoText");
    var currentVoice = echoes[counter];
    let currentLetter = 0;

    
    if (isTyping === false) {
        isTyping = true;
        voice.textContent = "";
        echoSay();
        counter++;
    }

    function echoSay() {
        if (isTyping === true && currentLetter < currentVoice.length) {
            voice.textContent += currentVoice.charAt(currentLetter);
            currentLetter++;
            setTimeout(echoSay, textSpeed);
        }
        if (currentLetter >= currentVoice.length){
            isTyping = false;
        }
    }


    if (counter >= echoes.length) {
        counter = 0;
    }
}
