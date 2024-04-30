// Gib deinen Code hier ein
enum leereNote {
    Pause = 0
}

type NoteOptional = leereNote | Note;

interface SpielbareNote {
    frequenz: NoteOptional;
    zeit: number;
}

const GanzePause: SpielbareNote = { frequenz: 0, zeit: music.beat(BeatFraction.Whole) }
const HalbeC: SpielbareNote = { frequenz: Note.C, zeit: music.beat(BeatFraction.Half) }
const HalbeCis: SpielbareNote = { frequenz: Note.CSharp, zeit: music.beat(BeatFraction.Half) }
const HalbeD: SpielbareNote = { frequenz: Note.D, zeit: music.beat(BeatFraction.Half) }
const HalbeEb: SpielbareNote = { frequenz: Note.Eb, zeit: music.beat(BeatFraction.Half) }
const HalbeE: SpielbareNote = { frequenz: Note.E, zeit: music.beat(BeatFraction.Half) }
const HalbeF: SpielbareNote = { frequenz: Note.F, zeit: music.beat(BeatFraction.Half) }
const HalbeFis: SpielbareNote = { frequenz: Note.FSharp, zeit: music.beat(BeatFraction.Half) }
const HalbeG: SpielbareNote = { frequenz: Note.G, zeit: music.beat(BeatFraction.Half) }
const HalbeGis: SpielbareNote = { frequenz: Note.GSharp, zeit: music.beat(BeatFraction.Half) }
const HalbeA: SpielbareNote = { frequenz: Note.A, zeit: music.beat(BeatFraction.Half) }
const HalbeBb: SpielbareNote = { frequenz: Note.Bb, zeit: music.beat(BeatFraction.Half) }
const HalbeB: SpielbareNote = { frequenz: Note.B, zeit: music.beat(BeatFraction.Half) }
const HalbeC3: SpielbareNote = { frequenz: Note.C3, zeit: music.beat(BeatFraction.Half) }
const HalbeCis3: SpielbareNote = { frequenz: Note.CSharp3, zeit: music.beat(BeatFraction.Half) }
const HalbeD3: SpielbareNote = { frequenz: Note.D3, zeit: music.beat(BeatFraction.Half) }
const HalbeEb3: SpielbareNote = { frequenz: Note.Eb3, zeit: music.beat(BeatFraction.Half) }
const HalbeE3: SpielbareNote = { frequenz: Note.E3, zeit: music.beat(BeatFraction.Half) }
const HalbeF3: SpielbareNote = { frequenz: Note.F3, zeit: music.beat(BeatFraction.Half) }
const HalbeFis3: SpielbareNote = { frequenz: Note.FSharp3, zeit: music.beat(BeatFraction.Half) }
const HalbeG3: SpielbareNote = { frequenz: Note.G3, zeit: music.beat(BeatFraction.Half) }
const HalbeGis3: SpielbareNote = { frequenz: Note.GSharp3, zeit: music.beat(BeatFraction.Half) }
const HalbeA3: SpielbareNote = { frequenz: Note.A3, zeit: music.beat(BeatFraction.Half) }
const HalbeBb3: SpielbareNote = { frequenz: Note.Bb3, zeit: music.beat(BeatFraction.Half) }
const HalbeB3: SpielbareNote = { frequenz: Note.B3, zeit: music.beat(BeatFraction.Half) }
const HalbeC4: SpielbareNote = { frequenz: Note.C4, zeit: music.beat(BeatFraction.Half) }
const HalbeCis4: SpielbareNote = { frequenz: Note.CSharp4, zeit: music.beat(BeatFraction.Half) }
const HalbeD4: SpielbareNote = { frequenz: Note.D4, zeit: music.beat(BeatFraction.Half) }
const HalbeEb4: SpielbareNote = { frequenz: Note.Eb4, zeit: music.beat(BeatFraction.Half) }
const HalbeE4: SpielbareNote = { frequenz: Note.E4, zeit: music.beat(BeatFraction.Half) }
const HalbeF4: SpielbareNote = { frequenz: Note.F4, zeit: music.beat(BeatFraction.Half) }
const HalbeFis4: SpielbareNote = { frequenz: Note.FSharp4, zeit: music.beat(BeatFraction.Half) }
const HalbeG4: SpielbareNote = { frequenz: Note.G4, zeit: music.beat(BeatFraction.Half) }
const HalbeGis4: SpielbareNote = { frequenz: Note.GSharp4, zeit: music.beat(BeatFraction.Half) }
const HalbeA4: SpielbareNote = { frequenz: Note.A4, zeit: music.beat(BeatFraction.Half) }
const HalbeBb4: SpielbareNote = { frequenz: Note.Bb4, zeit: music.beat(BeatFraction.Half) }
const HalbeB4: SpielbareNote = { frequenz: Note.B4, zeit: music.beat(BeatFraction.Half) }
const HalbeC5: SpielbareNote = { frequenz: Note.C5, zeit: music.beat(BeatFraction.Half) }
const HalbeCis5: SpielbareNote = { frequenz: Note.CSharp5, zeit: music.beat(BeatFraction.Half) }
const HalbeD5: SpielbareNote = { frequenz: Note.D5, zeit: music.beat(BeatFraction.Half) }
const HalbeEb5: SpielbareNote = { frequenz: Note.Eb5, zeit: music.beat(BeatFraction.Half) }
const HalbeE5: SpielbareNote = { frequenz: Note.E5, zeit: music.beat(BeatFraction.Half) }
const HalbeF5: SpielbareNote = { frequenz: Note.F5, zeit: music.beat(BeatFraction.Half) }
const HalbeFis5: SpielbareNote = { frequenz: Note.FSharp5, zeit: music.beat(BeatFraction.Half) }
const HalbeG5: SpielbareNote = { frequenz: Note.G5, zeit: music.beat(BeatFraction.Half) }
const HalbeGis5: SpielbareNote = { frequenz: Note.GSharp5, zeit: music.beat(BeatFraction.Half) }
const HalbeA5: SpielbareNote = { frequenz: Note.A5, zeit: music.beat(BeatFraction.Half) }
const HalbeBb5: SpielbareNote = { frequenz: Note.Bb5, zeit: music.beat(BeatFraction.Half) }
const HalbeB5: SpielbareNote = { frequenz: Note.B5, zeit: music.beat(BeatFraction.Half) }
const HalbePause: SpielbareNote = { frequenz: 0, zeit: music.beat(BeatFraction.Half) }

const ViertelC: SpielbareNote = { frequenz: Note.C, zeit: music.beat(BeatFraction.Quarter) }
const ViertelCis: SpielbareNote = { frequenz: Note.CSharp, zeit: music.beat(BeatFraction.Quarter) }
const ViertelD: SpielbareNote = { frequenz: Note.D, zeit: music.beat(BeatFraction.Quarter) }
const ViertelEb: SpielbareNote = { frequenz: Note.Eb, zeit: music.beat(BeatFraction.Quarter) }
const ViertelE: SpielbareNote = { frequenz: Note.E, zeit: music.beat(BeatFraction.Quarter) }
const ViertelF: SpielbareNote = { frequenz: Note.F, zeit: music.beat(BeatFraction.Quarter) }
const ViertelFis: SpielbareNote = { frequenz: Note.FSharp, zeit: music.beat(BeatFraction.Quarter) }
const ViertelG: SpielbareNote = { frequenz: Note.G, zeit: music.beat(BeatFraction.Quarter) }
const ViertelGis: SpielbareNote = { frequenz: Note.GSharp, zeit: music.beat(BeatFraction.Quarter) }
const ViertelA: SpielbareNote = { frequenz: Note.A, zeit: music.beat(BeatFraction.Quarter) }
const ViertelBb: SpielbareNote = { frequenz: Note.Bb, zeit: music.beat(BeatFraction.Quarter) }
const ViertelB: SpielbareNote = { frequenz: Note.B, zeit: music.beat(BeatFraction.Quarter) }
const ViertelC3: SpielbareNote = { frequenz: Note.C3, zeit: music.beat(BeatFraction.Quarter) }
const ViertelCis3: SpielbareNote = { frequenz: Note.CSharp3, zeit: music.beat(BeatFraction.Quarter) }
const ViertelD3: SpielbareNote = { frequenz: Note.D3, zeit: music.beat(BeatFraction.Quarter) }
const ViertelEb3: SpielbareNote = { frequenz: Note.Eb3, zeit: music.beat(BeatFraction.Quarter) }
const ViertelE3: SpielbareNote = { frequenz: Note.E3, zeit: music.beat(BeatFraction.Quarter) }
const ViertelF3: SpielbareNote = { frequenz: Note.F3, zeit: music.beat(BeatFraction.Quarter) }
const ViertelFis3: SpielbareNote = { frequenz: Note.FSharp3, zeit: music.beat(BeatFraction.Quarter) }
const ViertelG3: SpielbareNote = { frequenz: Note.G3, zeit: music.beat(BeatFraction.Quarter) }
const ViertelGis3: SpielbareNote = { frequenz: Note.GSharp3, zeit: music.beat(BeatFraction.Quarter) }
const ViertelA3: SpielbareNote = { frequenz: Note.A3, zeit: music.beat(BeatFraction.Quarter) }
const ViertelBb3: SpielbareNote = { frequenz: Note.Bb3, zeit: music.beat(BeatFraction.Quarter) }
const ViertelB3: SpielbareNote = { frequenz: Note.B3, zeit: music.beat(BeatFraction.Quarter) }
const ViertelC4: SpielbareNote = { frequenz: Note.C4, zeit: music.beat(BeatFraction.Quarter) }
const ViertelCis4: SpielbareNote = { frequenz: Note.CSharp4, zeit: music.beat(BeatFraction.Quarter) }
const ViertelD4: SpielbareNote = { frequenz: Note.D4, zeit: music.beat(BeatFraction.Quarter) }
const ViertelEb4: SpielbareNote = { frequenz: Note.Eb4, zeit: music.beat(BeatFraction.Quarter) }
const ViertelE4: SpielbareNote = { frequenz: Note.E4, zeit: music.beat(BeatFraction.Quarter) }
const ViertelF4: SpielbareNote = { frequenz: Note.F4, zeit: music.beat(BeatFraction.Quarter) }
const ViertelFis4: SpielbareNote = { frequenz: Note.FSharp4, zeit: music.beat(BeatFraction.Quarter) }
const ViertelG4: SpielbareNote = { frequenz: Note.G4, zeit: music.beat(BeatFraction.Quarter) }
const ViertelGis4: SpielbareNote = { frequenz: Note.GSharp4, zeit: music.beat(BeatFraction.Quarter) }
const ViertelA4: SpielbareNote = { frequenz: Note.A4, zeit: music.beat(BeatFraction.Quarter) }
const ViertelBb4: SpielbareNote = { frequenz: Note.Bb4, zeit: music.beat(BeatFraction.Quarter) }
const ViertelB4: SpielbareNote = { frequenz: Note.B4, zeit: music.beat(BeatFraction.Quarter) }
const ViertelC5: SpielbareNote = { frequenz: Note.C5, zeit: music.beat(BeatFraction.Quarter) }
const ViertelCis5: SpielbareNote = { frequenz: Note.CSharp5, zeit: music.beat(BeatFraction.Quarter) }
const ViertelD5: SpielbareNote = { frequenz: Note.D5, zeit: music.beat(BeatFraction.Quarter) }
const ViertelEb5: SpielbareNote = { frequenz: Note.Eb5, zeit: music.beat(BeatFraction.Quarter) }
const ViertelE5: SpielbareNote = { frequenz: Note.E5, zeit: music.beat(BeatFraction.Quarter) }
const ViertelF5: SpielbareNote = { frequenz: Note.F5, zeit: music.beat(BeatFraction.Quarter) }
const ViertelFis5: SpielbareNote = { frequenz: Note.FSharp5, zeit: music.beat(BeatFraction.Quarter) }
const ViertelG5: SpielbareNote = { frequenz: Note.G5, zeit: music.beat(BeatFraction.Quarter) }
const ViertelGis5: SpielbareNote = { frequenz: Note.GSharp5, zeit: music.beat(BeatFraction.Quarter) }
const ViertelA5: SpielbareNote = { frequenz: Note.A5, zeit: music.beat(BeatFraction.Quarter) }
const ViertelBb5: SpielbareNote = { frequenz: Note.Bb5, zeit: music.beat(BeatFraction.Quarter) }
const ViertelB5: SpielbareNote = { frequenz: Note.B5, zeit: music.beat(BeatFraction.Quarter) }
const ViertelPause: SpielbareNote = { frequenz: 0, zeit: music.beat(BeatFraction.Quarter) }

