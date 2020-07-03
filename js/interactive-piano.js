const NUM_OCTAVES = 3;
const STARTING_OCTAVE = 3; // keyboard starts on C3

var keysPressed = [];
var intervals = [];

function renderKeyboard() {
    var keyboardHTML = "<ul class='keyboard'>\n";

    // fill in keys
    for (var i = 0; i < NUM_OCTAVES; i++) {
        keyboardHTML += "\
        <li class='white-key'></li>\n\
        <li class='black-key'></li>\n\
        <li class='white-key'></li>\n\
        <li class='black-key'></li>\n\
        <li class='white-key'></li>\n\
        <li class='white-key'></li>\n\
        <li class='black-key'></li>\n\
        <li class='white-key'></li>\n\
        <li class='black-key'></li>\n\
        <li class='white-key'></li>\n\
        <li class='black-key'></li>\n\
        <li class='white-key'></li>\n"
    }

    keyboardHTML += "<li class='white-key'></li>\n</ul>\n";

    return keyboardHTML;
}

function processPianoKeypress() {
    const keyIndex = $(this).index(); // get the pressed keyboard key

    // play audio for the key
    var audio = new Audio('static/key_sounds/' + getPianoKeyID(keyIndex) + '.m4a');
    audio.play();

    // update interval info if more than one key has been pressed
    if(keysPressed.length > 0) {
        const newInterval = keyIndex - keysPressed[keysPressed.length-1];
        
        $('#intervals-display').append(newInterval + ', ');
        intervals.push(newInterval);
    }

    // either way, update notes info
    $('#notes-display').append(keyIndex + ', ');
    keysPressed.push(keyIndex);
}

// D4, A5, etc.
function getPianoKeyID(keyIndex) {
    const allKeys = ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'];
    console.log(allKeys[keyIndex % 12] + Math.floor(STARTING_OCTAVE + keyIndex / 12));
    return allKeys[keyIndex % 12] + Math.floor(STARTING_OCTAVE+keyIndex/12);
}