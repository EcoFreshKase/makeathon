function play(note: Note) {
    music.playTone(note, music.beat(BeatFraction.Whole));
}

function playC() {
    play(Note.C);
}
function playE() {
    play(Note.E);
}



basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        playC();
    }
    if (input.buttonIsPressed(Button.B)) {
        playE();
    }
})