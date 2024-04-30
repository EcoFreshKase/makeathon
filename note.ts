// Gib deinen Code hier ein
enum leereNote {
    Pause = 0
}

type NoteOptional = leereNote | Note;

interface SpielbareNote {
    frequenz: NoteOptional;
    zeit: number;
}

const ganzepause: SpielbareNote = { frequenz: 0, zeit: music.beat(BeatFraction.Whole) }
const halbec: SpielbareNote = { frequenz: Note.C, zeit: music.beat(BeatFraction.Half) }
const halbecis: SpielbareNote = { frequenz: Note.CSharp, zeit: music.beat(BeatFraction.Half) }
const halbed: SpielbareNote = { frequenz: Note.D, zeit: music.beat(BeatFraction.Half) }
const halbeeb: SpielbareNote = { frequenz: Note.Eb, zeit: music.beat(BeatFraction.Half) }
const halbee: SpielbareNote = { frequenz: Note.E, zeit: music.beat(BeatFraction.Half) }
const halbef: SpielbareNote = { frequenz: Note.F, zeit: music.beat(BeatFraction.Half) }
const halbefis: SpielbareNote = { frequenz: Note.FSharp, zeit: music.beat(BeatFraction.Half) }
const halbeg: SpielbareNote = { frequenz: Note.G, zeit: music.beat(BeatFraction.Half) }
const halbegis: SpielbareNote = { frequenz: Note.GSharp, zeit: music.beat(BeatFraction.Half) }
const halbea: SpielbareNote = { frequenz: Note.A, zeit: music.beat(BeatFraction.Half) }
const halbebb: SpielbareNote = { frequenz: Note.Bb, zeit: music.beat(BeatFraction.Half) }
const halbeb: SpielbareNote = { frequenz: Note.B, zeit: music.beat(BeatFraction.Half) }
const halbec3: SpielbareNote = { frequenz: Note.C3, zeit: music.beat(BeatFraction.Half) }
const halbecis3: SpielbareNote = { frequenz: Note.CSharp3, zeit: music.beat(BeatFraction.Half) }
const halbed3: SpielbareNote = { frequenz: Note.D3, zeit: music.beat(BeatFraction.Half) }
const halbeeb3: SpielbareNote = { frequenz: Note.Eb3, zeit: music.beat(BeatFraction.Half) }
const halbee3: SpielbareNote = { frequenz: Note.E3, zeit: music.beat(BeatFraction.Half) }
const halbef3: SpielbareNote = { frequenz: Note.F3, zeit: music.beat(BeatFraction.Half) }
const halbefis3: SpielbareNote = { frequenz: Note.FSharp3, zeit: music.beat(BeatFraction.Half) }
const halbeg3: SpielbareNote = { frequenz: Note.G3, zeit: music.beat(BeatFraction.Half) }
const halbegis3: SpielbareNote = { frequenz: Note.GSharp3, zeit: music.beat(BeatFraction.Half) }
const halbea3: SpielbareNote = { frequenz: Note.A3, zeit: music.beat(BeatFraction.Half) }
const halbebb3: SpielbareNote = { frequenz: Note.Bb3, zeit: music.beat(BeatFraction.Half) }
const halbeb3: SpielbareNote = { frequenz: Note.B3, zeit: music.beat(BeatFraction.Half) }
const halbec4: SpielbareNote = { frequenz: Note.C4, zeit: music.beat(BeatFraction.Half) }
const halbecis4: SpielbareNote = { frequenz: Note.CSharp4, zeit: music.beat(BeatFraction.Half) }
const halbed4: SpielbareNote = { frequenz: Note.D4, zeit: music.beat(BeatFraction.Half) }
const halbeeb4: SpielbareNote = { frequenz: Note.Eb4, zeit: music.beat(BeatFraction.Half) }
const halbee4: SpielbareNote = { frequenz: Note.E4, zeit: music.beat(BeatFraction.Half) }
const halbef4: SpielbareNote = { frequenz: Note.F4, zeit: music.beat(BeatFraction.Half) }
const halbefis4: SpielbareNote = { frequenz: Note.FSharp4, zeit: music.beat(BeatFraction.Half) }
const halbeg4: SpielbareNote = { frequenz: Note.G4, zeit: music.beat(BeatFraction.Half) }
const halbegis4: SpielbareNote = { frequenz: Note.GSharp4, zeit: music.beat(BeatFraction.Half) }
const halbea4: SpielbareNote = { frequenz: Note.A4, zeit: music.beat(BeatFraction.Half) }
const halbebb4: SpielbareNote = { frequenz: Note.Bb4, zeit: music.beat(BeatFraction.Half) }
const halbeb4: SpielbareNote = { frequenz: Note.B4, zeit: music.beat(BeatFraction.Half) }
const halbec5: SpielbareNote = { frequenz: Note.C5, zeit: music.beat(BeatFraction.Half) }
const halbecis5: SpielbareNote = { frequenz: Note.CSharp5, zeit: music.beat(BeatFraction.Half) }
const halbed5: SpielbareNote = { frequenz: Note.D5, zeit: music.beat(BeatFraction.Half) }
const halbeeb5: SpielbareNote = { frequenz: Note.Eb5, zeit: music.beat(BeatFraction.Half) }
const halbee5: SpielbareNote = { frequenz: Note.E5, zeit: music.beat(BeatFraction.Half) }
const halbef5: SpielbareNote = { frequenz: Note.F5, zeit: music.beat(BeatFraction.Half) }
const halbefis5: SpielbareNote = { frequenz: Note.FSharp5, zeit: music.beat(BeatFraction.Half) }
const halbeg5: SpielbareNote = { frequenz: Note.G5, zeit: music.beat(BeatFraction.Half) }
const halbegis5: SpielbareNote = { frequenz: Note.GSharp5, zeit: music.beat(BeatFraction.Half) }
const halbea5: SpielbareNote = { frequenz: Note.A5, zeit: music.beat(BeatFraction.Half) }
const halbebb5: SpielbareNote = { frequenz: Note.Bb5, zeit: music.beat(BeatFraction.Half) }
const halbeb5: SpielbareNote = { frequenz: Note.B5, zeit: music.beat(BeatFraction.Half) }
const halbepause: SpielbareNote = { frequenz: 0, zeit: music.beat(BeatFraction.Half) }

const viertelc: SpielbareNote = { frequenz: Note.C, zeit: music.beat(BeatFraction.Quarter) }
const viertelcis: SpielbareNote = { frequenz: Note.CSharp, zeit: music.beat(BeatFraction.Quarter) }
const vierteld: SpielbareNote = { frequenz: Note.D, zeit: music.beat(BeatFraction.Quarter) }
const vierteleb: SpielbareNote = { frequenz: Note.Eb, zeit: music.beat(BeatFraction.Quarter) }
const viertele: SpielbareNote = { frequenz: Note.E, zeit: music.beat(BeatFraction.Quarter) }
const viertelf: SpielbareNote = { frequenz: Note.F, zeit: music.beat(BeatFraction.Quarter) }
const viertelfis: SpielbareNote = { frequenz: Note.FSharp, zeit: music.beat(BeatFraction.Quarter) }
const viertelg: SpielbareNote = { frequenz: Note.G, zeit: music.beat(BeatFraction.Quarter) }
const viertelgis: SpielbareNote = { frequenz: Note.GSharp, zeit: music.beat(BeatFraction.Quarter) }
const viertela: SpielbareNote = { frequenz: Note.A, zeit: music.beat(BeatFraction.Quarter) }
const viertelbb: SpielbareNote = { frequenz: Note.Bb, zeit: music.beat(BeatFraction.Quarter) }
const viertelb: SpielbareNote = { frequenz: Note.B, zeit: music.beat(BeatFraction.Quarter) }
const viertelc3: SpielbareNote = { frequenz: Note.C3, zeit: music.beat(BeatFraction.Quarter) }
const viertelcis3: SpielbareNote = { frequenz: Note.CSharp3, zeit: music.beat(BeatFraction.Quarter) }
const vierteld3: SpielbareNote = { frequenz: Note.D3, zeit: music.beat(BeatFraction.Quarter) }
const vierteleb3: SpielbareNote = { frequenz: Note.Eb3, zeit: music.beat(BeatFraction.Quarter) }
const viertele3: SpielbareNote = { frequenz: Note.E3, zeit: music.beat(BeatFraction.Quarter) }
const viertelf3: SpielbareNote = { frequenz: Note.F3, zeit: music.beat(BeatFraction.Quarter) }
const viertelfis3: SpielbareNote = { frequenz: Note.FSharp3, zeit: music.beat(BeatFraction.Quarter) }
const viertelg3: SpielbareNote = { frequenz: Note.G3, zeit: music.beat(BeatFraction.Quarter) }
const viertelgis3: SpielbareNote = { frequenz: Note.GSharp3, zeit: music.beat(BeatFraction.Quarter) }
const viertela3: SpielbareNote = { frequenz: Note.A3, zeit: music.beat(BeatFraction.Quarter) }
const viertelbb3: SpielbareNote = { frequenz: Note.Bb3, zeit: music.beat(BeatFraction.Quarter) }
const viertelb3: SpielbareNote = { frequenz: Note.B3, zeit: music.beat(BeatFraction.Quarter) }
const viertelc4: SpielbareNote = { frequenz: Note.C4, zeit: music.beat(BeatFraction.Quarter) }
const viertelcis4: SpielbareNote = { frequenz: Note.CSharp4, zeit: music.beat(BeatFraction.Quarter) }
const vierteld4: SpielbareNote = { frequenz: Note.D4, zeit: music.beat(BeatFraction.Quarter) }
const vierteleb4: SpielbareNote = { frequenz: Note.Eb4, zeit: music.beat(BeatFraction.Quarter) }
const viertele4: SpielbareNote = { frequenz: Note.E4, zeit: music.beat(BeatFraction.Quarter) }
const viertelf4: SpielbareNote = { frequenz: Note.F4, zeit: music.beat(BeatFraction.Quarter) }
const viertelfis4: SpielbareNote = { frequenz: Note.FSharp4, zeit: music.beat(BeatFraction.Quarter) }
const viertelg4: SpielbareNote = { frequenz: Note.G4, zeit: music.beat(BeatFraction.Quarter) }
const viertelgis4: SpielbareNote = { frequenz: Note.GSharp4, zeit: music.beat(BeatFraction.Quarter) }
const viertela4: SpielbareNote = { frequenz: Note.A4, zeit: music.beat(BeatFraction.Quarter) }
const viertelbb4: SpielbareNote = { frequenz: Note.Bb4, zeit: music.beat(BeatFraction.Quarter) }
const viertelb4: SpielbareNote = { frequenz: Note.B4, zeit: music.beat(BeatFraction.Quarter) }
const viertelc5: SpielbareNote = { frequenz: Note.C5, zeit: music.beat(BeatFraction.Quarter) }
const viertelcis5: SpielbareNote = { frequenz: Note.CSharp5, zeit: music.beat(BeatFraction.Quarter) }
const vierteld5: SpielbareNote = { frequenz: Note.D5, zeit: music.beat(BeatFraction.Quarter) }
const vierteleb5: SpielbareNote = { frequenz: Note.Eb5, zeit: music.beat(BeatFraction.Quarter) }
const viertele5: SpielbareNote = { frequenz: Note.E5, zeit: music.beat(BeatFraction.Quarter) }
const viertelf5: SpielbareNote = { frequenz: Note.F5, zeit: music.beat(BeatFraction.Quarter) }
const viertelfis5: SpielbareNote = { frequenz: Note.FSharp5, zeit: music.beat(BeatFraction.Quarter) }
const viertelg5: SpielbareNote = { frequenz: Note.G5, zeit: music.beat(BeatFraction.Quarter) }
const viertelgis5: SpielbareNote = { frequenz: Note.GSharp5, zeit: music.beat(BeatFraction.Quarter) }
const viertela5: SpielbareNote = { frequenz: Note.A5, zeit: music.beat(BeatFraction.Quarter) }
const viertelbb5: SpielbareNote = { frequenz: Note.Bb5, zeit: music.beat(BeatFraction.Quarter) }
const viertelb5: SpielbareNote = { frequenz: Note.B5, zeit: music.beat(BeatFraction.Quarter) }
const viertelpause: SpielbareNote = { frequenz: 0, zeit: music.beat(BeatFraction.Quarter) }


