// Gib deinen Code hier ein

enum emptyNote {
    Pause = 0
}

type NoteOptional = emptyNote | Note;

interface PlayableNote {
    frequency: NoteOptional;
    time: number;
}

const WholePause: PlayableNote = { frequency: 0, time: music.beat(BeatFraction.Whole) }

const HalfC: PlayableNote = { frequency: Note.C, time: music.beat(BeatFraction.Half) }
const HalfCSharp: PlayableNote = { frequency: Note.CSharp, time: music.beat(BeatFraction.Half) }
const HalfD: PlayableNote = { frequency: Note.D, time: music.beat(BeatFraction.Half) }
const HalfEb: PlayableNote = { frequency: Note.Eb, time: music.beat(BeatFraction.Half) }
const HalfE: PlayableNote = { frequency: Note.E, time: music.beat(BeatFraction.Half) }
const HalfF: PlayableNote = { frequency: Note.F, time: music.beat(BeatFraction.Half) }
const HalfFSharp: PlayableNote = { frequency: Note.FSharp, time: music.beat(BeatFraction.Half) }
const HalfG: PlayableNote = { frequency: Note.G, time: music.beat(BeatFraction.Half) }
const HalfGSharp: PlayableNote = { frequency: Note.GSharp, time: music.beat(BeatFraction.Half) }
const HalfA: PlayableNote = { frequency: Note.A, time: music.beat(BeatFraction.Half) }
const HalfBb: PlayableNote = { frequency: Note.Bb, time: music.beat(BeatFraction.Half) }
const HalfB: PlayableNote = { frequency: Note.B, time: music.beat(BeatFraction.Half) }
const HalfC3: PlayableNote = { frequency: Note.C3, time: music.beat(BeatFraction.Half) }
const HalfCSharp3: PlayableNote = { frequency: Note.CSharp3, time: music.beat(BeatFraction.Half) }
const HalfD3: PlayableNote = { frequency: Note.D3, time: music.beat(BeatFraction.Half) }
const HalfEb3: PlayableNote = { frequency: Note.Eb3, time: music.beat(BeatFraction.Half) }
const HalfE3: PlayableNote = { frequency: Note.E3, time: music.beat(BeatFraction.Half) }
const HalfF3: PlayableNote = { frequency: Note.F3, time: music.beat(BeatFraction.Half) }
const HalfFSharp3: PlayableNote = { frequency: Note.FSharp3, time: music.beat(BeatFraction.Half) }
const HalfG3: PlayableNote = { frequency: Note.G3, time: music.beat(BeatFraction.Half) }
const HalfGSharp3: PlayableNote = { frequency: Note.GSharp3, time: music.beat(BeatFraction.Half) }
const HalfA3: PlayableNote = { frequency: Note.A3, time: music.beat(BeatFraction.Half) }
const HalfBb3: PlayableNote = { frequency: Note.Bb3, time: music.beat(BeatFraction.Half) }
const HalfB3: PlayableNote = { frequency: Note.B3, time: music.beat(BeatFraction.Half) }
const HalfC4: PlayableNote = { frequency: Note.C4, time: music.beat(BeatFraction.Half) }
const HalfCSharp4: PlayableNote = { frequency: Note.CSharp4, time: music.beat(BeatFraction.Half) }
const HalfD4: PlayableNote = { frequency: Note.D4, time: music.beat(BeatFraction.Half) }
const HalfEb4: PlayableNote = { frequency: Note.Eb4, time: music.beat(BeatFraction.Half) }
const HalfE4: PlayableNote = { frequency: Note.E4, time: music.beat(BeatFraction.Half) }
const HalfF4: PlayableNote = { frequency: Note.F4, time: music.beat(BeatFraction.Half) }
const HalfFSharp4: PlayableNote = { frequency: Note.FSharp4, time: music.beat(BeatFraction.Half) }
const HalfG4: PlayableNote = { frequency: Note.G4, time: music.beat(BeatFraction.Half) }
const HalfGSharp4: PlayableNote = { frequency: Note.GSharp4, time: music.beat(BeatFraction.Half) }
const HalfA4: PlayableNote = { frequency: Note.A4, time: music.beat(BeatFraction.Half) }
const HalfBb4: PlayableNote = { frequency: Note.Bb4, time: music.beat(BeatFraction.Half) }
const HalfB4: PlayableNote = { frequency: Note.B4, time: music.beat(BeatFraction.Half) }
const HalfC5: PlayableNote = { frequency: Note.C5, time: music.beat(BeatFraction.Half) }
const HalfCSharp5: PlayableNote = { frequency: Note.CSharp5, time: music.beat(BeatFraction.Half) }
const HalfD5: PlayableNote = { frequency: Note.D5, time: music.beat(BeatFraction.Half) }
const HalfEb5: PlayableNote = { frequency: Note.Eb5, time: music.beat(BeatFraction.Half) }
const HalfE5: PlayableNote = { frequency: Note.E5, time: music.beat(BeatFraction.Half) }
const HalfF5: PlayableNote = { frequency: Note.F5, time: music.beat(BeatFraction.Half) }
const HalfFSharp5: PlayableNote = { frequency: Note.FSharp5, time: music.beat(BeatFraction.Half) }
const HalfG5: PlayableNote = { frequency: Note.G5, time: music.beat(BeatFraction.Half) }
const HalfGSharp5: PlayableNote = { frequency: Note.GSharp5, time: music.beat(BeatFraction.Half) }
const HalfA5: PlayableNote = { frequency: Note.A5, time: music.beat(BeatFraction.Half) }
const HalfBb5: PlayableNote = { frequency: Note.Bb5, time: music.beat(BeatFraction.Half) }
const HalfB5: PlayableNote = { frequency: Note.B5, time: music.beat(BeatFraction.Half) }
const HalfPause: PlayableNote = { frequency: 0, time: music.beat(BeatFraction.Half) }

const QuarterC: PlayableNote = { frequency: Note.C, time: music.beat(BeatFraction.Quarter) }
const QuarterCSharp: PlayableNote = { frequency: Note.CSharp, time: music.beat(BeatFraction.Quarter) }
const QuarterD: PlayableNote = { frequency: Note.D, time: music.beat(BeatFraction.Quarter) }
const QuarterEb: PlayableNote = { frequency: Note.Eb, time: music.beat(BeatFraction.Quarter) }
const QuarterE: PlayableNote = { frequency: Note.E, time: music.beat(BeatFraction.Quarter) }
const QuarterF: PlayableNote = { frequency: Note.F, time: music.beat(BeatFraction.Quarter) }
const QuarterFSharp: PlayableNote = { frequency: Note.FSharp, time: music.beat(BeatFraction.Quarter) }
const QuarterG: PlayableNote = { frequency: Note.G, time: music.beat(BeatFraction.Quarter) }
const QuarterGSharp: PlayableNote = { frequency: Note.GSharp, time: music.beat(BeatFraction.Quarter) }
const QuarterA: PlayableNote = { frequency: Note.A, time: music.beat(BeatFraction.Quarter) }
const QuarterBb: PlayableNote = { frequency: Note.Bb, time: music.beat(BeatFraction.Quarter) }
const QuarterB: PlayableNote = { frequency: Note.B, time: music.beat(BeatFraction.Quarter) }
const QuarterC3: PlayableNote = { frequency: Note.C3, time: music.beat(BeatFraction.Quarter) }
const QuarterCSharp3: PlayableNote = { frequency: Note.CSharp3, time: music.beat(BeatFraction.Quarter) }
const QuarterD3: PlayableNote = { frequency: Note.D3, time: music.beat(BeatFraction.Quarter) }
const QuarterEb3: PlayableNote = { frequency: Note.Eb3, time: music.beat(BeatFraction.Quarter) }
const QuarterE3: PlayableNote = { frequency: Note.E3, time: music.beat(BeatFraction.Quarter) }
const QuarterF3: PlayableNote = { frequency: Note.F3, time: music.beat(BeatFraction.Quarter) }
const QuarterFSharp3: PlayableNote = { frequency: Note.FSharp3, time: music.beat(BeatFraction.Quarter) }
const QuarterG3: PlayableNote = { frequency: Note.G3, time: music.beat(BeatFraction.Quarter) }
const QuarterGSharp3: PlayableNote = { frequency: Note.GSharp3, time: music.beat(BeatFraction.Quarter) }
const QuarterA3: PlayableNote = { frequency: Note.A3, time: music.beat(BeatFraction.Quarter) }
const QuarterBb3: PlayableNote = { frequency: Note.Bb3, time: music.beat(BeatFraction.Quarter) }
const QuarterB3: PlayableNote = { frequency: Note.B3, time: music.beat(BeatFraction.Quarter) }
const QuarterC4: PlayableNote = { frequency: Note.C4, time: music.beat(BeatFraction.Quarter) }
const QuarterCSharp4: PlayableNote = { frequency: Note.CSharp4, time: music.beat(BeatFraction.Quarter) }
const QuarterD4: PlayableNote = { frequency: Note.D4, time: music.beat(BeatFraction.Quarter) }
const QuarterEb4: PlayableNote = { frequency: Note.Eb4, time: music.beat(BeatFraction.Quarter) }
const QuarterE4: PlayableNote = { frequency: Note.E4, time: music.beat(BeatFraction.Quarter) }
const QuarterF4: PlayableNote = { frequency: Note.F4, time: music.beat(BeatFraction.Quarter) }
const QuarterFSharp4: PlayableNote = { frequency: Note.FSharp4, time: music.beat(BeatFraction.Quarter) }
const QuarterG4: PlayableNote = { frequency: Note.G4, time: music.beat(BeatFraction.Quarter) }
const QuarterGSharp4: PlayableNote = { frequency: Note.GSharp4, time: music.beat(BeatFraction.Quarter) }
const QuarterA4: PlayableNote = { frequency: Note.A4, time: music.beat(BeatFraction.Quarter) }
const QuarterBb4: PlayableNote = { frequency: Note.Bb4, time: music.beat(BeatFraction.Quarter) }
const QuarterB4: PlayableNote = { frequency: Note.B4, time: music.beat(BeatFraction.Quarter) }
const QuarterC5: PlayableNote = { frequency: Note.C5, time: music.beat(BeatFraction.Quarter) }
const QuarterCSharp5: PlayableNote = { frequency: Note.CSharp5, time: music.beat(BeatFraction.Quarter) }
const QuarterD5: PlayableNote = { frequency: Note.D5, time: music.beat(BeatFraction.Quarter) }
const QuarterEb5: PlayableNote = { frequency: Note.Eb5, time: music.beat(BeatFraction.Quarter) }
const QuarterE5: PlayableNote = { frequency: Note.E5, time: music.beat(BeatFraction.Quarter) }
const QuarterF5: PlayableNote = { frequency: Note.F5, time: music.beat(BeatFraction.Quarter) }
const QuarterFSharp5: PlayableNote = { frequency: Note.FSharp5, time: music.beat(BeatFraction.Quarter) }
const QuarterG5: PlayableNote = { frequency: Note.G5, time: music.beat(BeatFraction.Quarter) }
const QuarterGSharp5: PlayableNote = { frequency: Note.GSharp5, time: music.beat(BeatFraction.Quarter) }
const QuarterA5: PlayableNote = { frequency: Note.A5, time: music.beat(BeatFraction.Quarter) }
const QuarterBb5: PlayableNote = { frequency: Note.Bb5, time: music.beat(BeatFraction.Quarter) }
const QuarterB5: PlayableNote = { frequency: Note.B5, time: music.beat(BeatFraction.Quarter) }
const QuarterPause: PlayableNote = { frequency: 0, time: music.beat(BeatFraction.Quarter) }
