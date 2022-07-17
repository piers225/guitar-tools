import { useContext, useMemo } from 'react';
import { ChronomaticScaleNote, ChronomaticScaleNoteFlat } from '../../model/notes'
import { findFretNoteFlat } from '../calculator/note-calculator';
import { KneckContext } from '../guitar-neck-diagram';
import './guitar-fret.scss'

interface IGuitarFretProp {
    stringRoot : ChronomaticScaleNote,
    fretNumber : number;
}

export function GuitarFret(prop : IGuitarFretProp) {

    const context = useContext(KneckContext);

    const selectedNote = useMemo(() => findFretNoteFlat(prop.stringRoot as ChronomaticScaleNoteFlat, prop.fretNumber), 
        []);

    return (
        <div className={`fret fret-${prop.fretNumber}`} >
            { selectedNote === context?.state.kneckNote ? selectedNote : ''}
        </div>
    )
} 