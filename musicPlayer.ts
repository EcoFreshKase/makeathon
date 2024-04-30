interface SpielbareNote {
    frequenz: number;
    laenge: number;
}

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

        music.playTone(note.frequenz, note.laenge);
        this.aktuellernotenindex = (this.aktuellernotenindex + 1) % this.noten.length;
    }

    spielepause() {
        music.playTone(0, music.beat(BeatFraction.Whole));
    }

    setzenoten(noten: SpielbareNote[]) {
        this.noten = noten;
        this.aktuellernotenindex = 0;
    }

}

function spielenote(frequenz: number, laenge: number) {
    music.playTone(frequenz, music.beat(laenge));
}

