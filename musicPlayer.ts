class Musikspieler {
    private aktuellernotenindex: number;
    private noten: SpielbareNote[];

    constructor(noten: SpielbareNote[]) {
        this.aktuellernotenindex = 0;
        this.noten = noten;
    }

    spiele() {
        if (this.aktuellernotenindex === 0) {
            this.spielepause();
        }
        let note = this.noten[this.aktuellernotenindex];

        music.playTone(note.frequenz, note.zeit);
        this.aktuellernotenindex = (this.aktuellernotenindex + 1) % this.noten.length;
    }

    static spieleNote(frequenz: NoteOptional, schlag: BeatFraction) {
        music.playTone(frequenz, music.beat(schlag));
    }

    spielepause() {
        music.playTone(0, music.beat(BeatFraction.Whole));
    }

    setzenoten(noten: SpielbareNote[]) {
        this.noten = noten;
        this.aktuellernotenindex = 0;
    }

}

