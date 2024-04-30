class Musikspieler {
    private aktuellerNotenIndex: number;
    private noten: SpielbareNote[];

    constructor(noten: SpielbareNote[]) {
        this.aktuellerNotenIndex = 0;
        this.noten = noten;
    }

    spiele() {
        if (this.aktuellerNotenIndex === 0) {
            this.spielePause();
        }
        let note = this.noten[this.aktuellerNotenIndex];

        music.playTone(note.frequenz, note.zeit);
        this.aktuellerNotenIndex = (this.aktuellerNotenIndex + 1) % this.noten.length;
    }

    static spieleNote(frequenz: NoteOptional, schlag: BeatFraction) {
        music.playTone(frequenz, music.beat(schlag));
    }

    spielePause() {
        music.playTone(0, music.beat(BeatFraction.Whole));
    }

    setzeNoten(noten: SpielbareNote[]) {
        this.noten = noten;
        this.aktuellerNotenIndex = 0;
    }

}

