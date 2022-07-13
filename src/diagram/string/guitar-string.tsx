import { ChronomaticScaleNote } from '../../model/notes'
import { GuitarFret } from '../fret/guitar-fret';
import './guitar-string.scss'

const numberOfFrets = 24;

let everyFret = Array.from({length:numberOfFrets}, (v, k) => k + 1);

interface IGuitarStringProp {
    stringRoot : ChronomaticScaleNote
}

export function GuitarString(prop : IGuitarStringProp) {

    return (
        <div className="guitar-string">
            {
                everyFret.map((m) => 
                    <GuitarFret key={m} stringRoot={prop.stringRoot}  fretNumber={m} ></GuitarFret>)
            }
        </div>
    )
}