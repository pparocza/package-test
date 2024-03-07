const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

exports.isWds = function(string)
{
    // test 1
    console.log("Run Function!");
    // var oscillator = audioContext.createOscillator();
    console.log("Oscillator created!");
    return string;
}