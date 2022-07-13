import { ChronomaticScaleNote } from '../../model/notes'
import './guitar-fret.scss'

interface IGuitarFretProp {
    stringRoot : ChronomaticScaleNote,
    fretNumber : number;
}

export function GuitarFret(prop : IGuitarFretProp) {

    return (
        <div className={`fret-${prop.fretNumber}`} >
            { prop.fretNumber }
        </div>
    )
}