class MusicPlayer {
    private curNoteIndex: number;
    private notes: PlayableNote[];

    constructor(notes: PlayableNote[]) {
        this.curNoteIndex = 0;
        this.notes = notes;
    }

    play() {
        if (this.curNoteIndex === 0) {
            this.playPause();
        }
        let note = this.notes[this.curNoteIndex];

        music.playTone(note.frequency, note.time);
        this.curNoteIndex = (this.curNoteIndex + 1) % this.notes.length;
    }

    playNote(frequency: NoteOptional, beat: BeatFraction) {
        music.playTone(frequency, music.beat(beat));
    }

    playPause() {
        music.playTone(0, music.beat(BeatFraction.Whole));
    }
}
