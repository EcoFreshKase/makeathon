
//// Play Super Mario Bros Theme on repeat
// const notes = [QuarterE, QuarterE, QuarterPause, QuarterE, QuarterPause, QuarterC, HalfE, HalfG, HalfPause, HalfC]

// let musicPlayer: MusicPlayer = new MusicPlayer(notes)

// basic.forever(function () {
//     musicPlayer.play();
// })

//// Play same note unless button A is pressed
// basic.forever(function () {
//     if (input.buttonIsPressed(Button.A)) {
//         MusicPlayer.playNote(Note.A, BeatFraction.Whole);
//     } else {
//         MusicPlayer.playNote(Note.C, BeatFraction.Whole);
//     }
// })

//// Play tone 4 times than pause
// basic.forever(function () {
//     for (let i = 0; i < 4; i++) {
//         MusicPlayer.playNote(Note.A, BeatFraction.Whole);
//     }
//     MusicPlayer.playNote(0, BeatFraction.Whole);
// })

//// Switch between melody 1 and 2 if button A is pressed
// const notes1 = [QuarterE, QuarterE, QuarterPause, QuarterE, QuarterPause, QuarterC, HalfE, HalfG, HalfPause, HalfC];
// const notes2 = [QuarterC, QuarterC, QuarterG, QuarterG, QuarterA, QuarterA, HalfG, QuarterF, QuarterF, QuarterE, QuarterE, QuarterD, QuarterD, HalfC]

// let curNotes = 1
// let musicPlayer = new MusicPlayer(notes1);

// basic.forever(function () {
//     if (input.buttonIsPressed(Button.A)) {
//         if (curNotes == 1) {
//             musicPlayer.setNotes(notes2);
//             curNotes = 2;
//         } 
//         else if (curNotes == 2) {
//             musicPlayer.setNotes(notes1);
//             curNotes = 1;
//         }
//     }
//     musicPlayer.play();
// })