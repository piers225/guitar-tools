import { chronomaticScale, chronomaticScaleFlats, ChronomaticScaleNote, ChronomaticScaleNoteFlat, ChronomaticScaleNoteSharp, chronomaticScaleSharps } from "../../model/notes";

function findFretNoteSharpe(string : ChronomaticScaleNoteSharp, fret : number) : ChronomaticScaleNoteSharp {
   const index =  chronomaticScaleSharps.indexOf(string);
   return chronomaticScaleSharps[(index + fret) % chronomaticScaleSharps.length];
}

function findFretNoteFlat(string : ChronomaticScaleNoteFlat, fret : number) : ChronomaticScaleNoteFlat {
    const index =  chronomaticScaleFlats.indexOf(string);
    return chronomaticScaleFlats[(index + fret) % chronomaticScaleFlats.length];
 }

export {
    findFretNoteSharpe,
    findFretNoteFlat

}