const NUM_OCTAVES = 3;

var keysPressed = [];
var intervals = [];

function renderKeyboard() {
    var keyboardHTML = "<ul class='keyboard'>\n";

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

function processKeypress() {
    const currKey = $(this).index(); // get the pressed keyboard key

    // update interval info if more than one key has been pressed
    if(keysPressed.length > 0) {
        const newInterval = currKey - keysPressed[keysPressed.length-1];
        
        $('#intervals-display').append(newInterval + ', ');
        intervals.push(newInterval);
    }

    // either way, update notes info
    $('#notes-display').append(currKey + ', ');
    keysPressed.push(currKey);
}