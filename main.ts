enum emptyNote {
    Pause = 0
}

type PlayableNote = emptyNote | Note

class MusicPlayer {
    curNote: number;
    notes: PlayableNote[];

    constructor(notes: PlayableNote[]) {
        this.curNote = 0;
        this.notes = notes;
    }

    play() {
        if (this.curNote > this.notes.length) {
            this.playPause();
        }
        music.playTone(this.notes[this.curNote], music.beat(BeatFraction.Half));
        this.curNote = (this.curNote + 2) % this.notes.length;
    }

    playPause() {
        music.playTone(0, music.beat(BeatFraction.Whole));
    }
}


let musicPlayer: MusicPlayer = new MusicPlayer([Note.E, Note.E, emptyNote.Pause, Note.E, emptyNote.Pause, Note.C, Note.E])

basic.forever(function () {
    musicPlayer.play();
    // music.playTone(Note.E, music.beat(BeatFraction.Quarter))
    // music.playTone(Note.E, music.beat(BeatFraction.Quarter))
    // music.playTone(0, music.beat(BeatFraction.Quarter))
    // music.playTone(Note.E, music.beat(BeatFraction.Quarter))

    // music.playTone(0, music.beat(BeatFraction.Quarter))
    // music.playTone(Note.C, music.beat(BeatFraction.Quarter))
    // music.playTone(Note.E, music.beat(BeatFraction.Half))

    // music.playTone(Note.G, music.beat(BeatFraction.Half))
    // music.playTone(0, music.beat(BeatFraction.Half))

    // music.playTone(Note.C, music.beat(BeatFraction.Half))

    // music.playTone(0, music.beat(BeatFraction.Whole))
})