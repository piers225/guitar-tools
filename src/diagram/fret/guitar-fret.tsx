import { useContext } from 'react';
import { ChronomaticScaleNote } from '../../model/notes'
import { IKneckContext, KneckContext } from '../guitar-neck-diagram';
import './guitar-fret.scss'

interface IGuitarFretProp {
    stringRoot : ChronomaticScaleNote,
    fretNumber : number;
}

export function GuitarFret(prop : IGuitarFretProp) {

    const context = useContext(KneckContext);

    return (
        <div className={`fret fret-${prop.fretNumber}`} >
            
        </div>
    )
} 