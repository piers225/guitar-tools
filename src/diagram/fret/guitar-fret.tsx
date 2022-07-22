import { useContext, useMemo } from 'react';
import { chronomaticScale, chronomaticScaleFlats, ChronomaticScaleNote, ChronomaticScaleNoteFlat, ChronomaticScaleNoteSharp, chronomaticScaleSharps } from '../../model/notes'
import { intervalToneLookup, scaleIntervalLookup, ScaleType } from '../../model/scale';
import { KneckContext } from '../guitar-neck-diagram';
import './guitar-fret.scss'

interface IGuitarFretProp {
    stringRoot : ChronomaticScaleNote,
    fretNumber : number;
}

function findFretNoteSharpe(string : ChronomaticScaleNoteSharp, fret : number) : ChronomaticScaleNoteSharp {
    const index =  chronomaticScaleSharps.indexOf(string);
    return chronomaticScaleSharps[(index + fret) % chronomaticScaleSharps.length];
}
 
function findFretNoteFlat(string : ChronomaticScaleNoteFlat, fret : number) : ChronomaticScaleNoteFlat {
     const index =  chronomaticScaleFlats.indexOf(string);
     return chronomaticScaleFlats[(index + fret) % chronomaticScaleFlats.length];
}

function findNotesForScale(scale : ScaleType,  note : ChronomaticScaleNote ) : ChronomaticScaleNote[] {
    const intervals = scaleIntervalLookup[scale];
    const startPosition = chronomaticScale.findIndex(t => Array.isArray(t) ? t.includes(note as any) : t === note)  + 1;
    return intervals.map((_, index) => {
        const totalDistance = intervals
            .filter((_, i) => i < index)
            .reduce((accumulator, currentVal) => accumulator + intervalToneLookup[currentVal], 0);
        return chronomaticScaleFlats[(totalDistance + startPosition) % chronomaticScaleFlats.length]
    });
}

export function GuitarFret(prop : IGuitarFretProp) {

    const context = useContext(KneckContext);

    const fretNote = useMemo(() => findFretNoteFlat(prop.stringRoot as ChronomaticScaleNoteFlat, prop.fretNumber), []);
    
    const isSelectedNote = useMemo(() => {
        if (context?.state.kneckScale) {
            return findNotesForScale(context.state.kneckScale.scale, context?.state.kneckScale.rootNote).includes(fretNote);
        }
        return [context?.state.kneckNote, ].includes(fretNote);
    }, [context?.state]);

    return (
        <div className={ prop.fretNumber === 0 ? `open-fret` : `fret fret-${prop.fretNumber}`} >
           { isSelectedNote && <span className='fret-note'>{ prop.fretNumber !== 0 && fretNote }</span> }
        </div>
    )
} 