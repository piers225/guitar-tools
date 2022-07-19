import { ChronomaticScaleNote, ChronomaticScaleNoteFlat, ChronomaticScaleNoteSharp } from "./notes";

type interval = 'tone' | 'semitone';

let majorScaleInterval : interval[] = ['tone', 'tone', 'semitone', 'tone', 'tone', 'tone', 'semitone'];
let minorScaleInterval : interval[] = ['tone', 'semitone', 'tone', 'tone', 'semitone', 'tone', 'tone']

type minorScale = 'minor';
type majorScale = 'major';
export type scaleType = minorScale | majorScale;

type minorScalesFlat = `${ChronomaticScaleNoteFlat} ${minorScale}`;
type minorScalesSharp = `${ChronomaticScaleNoteSharp} ${minorScale}`;
type majorScalesFlat = `${ChronomaticScaleNoteFlat} ${majorScale}`;
type majorScalesSharp = `${ChronomaticScaleNoteSharp} ${majorScale}`;
type minorScales = `${ChronomaticScaleNote} ${minorScale}`;
type majorScales = `${ChronomaticScaleNote} ${majorScale}`;

let allFlatMinorScales : minorScalesFlat[] = ['a♭ minor', 'a minor', 'b♭ minor', 'b minor', 'c minor', 'd♭ minor', 'd minor', 'e♭ minor', 'e minor', 'f minor', 'g♭ minor', 'g minor'];
let allSharpMajorScales : majorScalesSharp[] = ['a major', 'a♯ major', 'b major', 'c major', 'c♯ major', 'd major', 'd♯ major', 'e major', 'f major', 'f♯ major', 'g major', 'g♯ major'];
let allSharpMinorScales : minorScalesSharp[] = ['a minor', 'a♯ minor', 'b minor', 'c minor', 'c♯ minor', 'd minor', 'd♯ minor', 'e minor', 'f minor', 'f♯ minor', 'g minor', 'g♯ minor'];
let allFlatMajorScales : majorScalesFlat[] = ['a♭ major','a major', 'b♭ major', 'b major', 'c major', 'd♭ major', 'd major', 'e♭ major', 'e major', 'f major', 'g♭ major', 'g major']

let scaleIntervalLookup : {
    [key in scaleType] : interval[]
} = {
    'major' : majorScaleInterval,
    'minor' : minorScaleInterval
} as const;

let intervalToneLookup : {
    [key in interval] : number
} = {
    'semitone' : 1,
    'tone' : 2
} as const;

export {
    allFlatMinorScales,
    allSharpMajorScales,
    allSharpMinorScales,
    allFlatMajorScales,
    scaleIntervalLookup,
    intervalToneLookup
}