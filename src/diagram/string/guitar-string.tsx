import { ChronomaticScaleNote } from '../../model/notes'
import { everyFret } from '../../model/stringFrets';
import { GuitarFret } from '../fret/guitar-fret';
import './guitar-string.scss'

interface IGuitarStringProp {
    stringRoot : ChronomaticScaleNote
}

export function GuitarString(prop : IGuitarStringProp) {

    return (
        <div className="guitar-string">
            <div className='string-root'> { prop.stringRoot.toUpperCase() }</div>
            {
                everyFret
                    .map((m) => 
                        <GuitarFret key={m} stringRoot={prop.stringRoot}  fretNumber={m} ></GuitarFret>)
            }
        </div>
    )
}