basic.forever(function () {
    music.playTone(Note.E, music.beat(BeatFraction.Quarter))
    music.playTone(Note.E, music.beat(BeatFraction.Quarter))
    music.playTone(0, music.beat(BeatFraction.Quarter))
    music.playTone(Note.E, music.beat(BeatFraction.Quarter))

    music.playTone(0, music.beat(BeatFraction.Quarter))
    music.playTone(Note.C, music.beat(BeatFraction.Quarter))
    music.playTone(Note.E, music.beat(BeatFraction.Half))

    music.playTone(Note.G, music.beat(BeatFraction.Half))
    music.playTone(0, music.beat(BeatFraction.Half))

    music.playTone(Note.C, music.beat(BeatFraction.Half))

    music.playTone(0, music.beat(BeatFraction.Whole))
})
