import { ChronomaticScaleNote } from '../model/notes';
import './guitar-neck-diagram.scss';
import { GuitarString } from './string/guitar-string';

let guitarStrings : ChronomaticScaleNote[] = ['e', 'a', 'd', 'g', 'b', 'e'];

export function NeckDiagram() {
    return (
        <main className='content'>
            {
                guitarStrings.map((m, i) => <GuitarString key={i} stringRoot={m} ></GuitarString>)
            }
        </main>
    )
}