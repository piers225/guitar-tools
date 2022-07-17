import { createContext, useMemo, useState } from 'react';
import { ChronomaticScaleNote } from '../model/notes';
import { DiagramFooter } from './diagram-footer/diagram-footer';
import './guitar-neck-diagram.scss';
import { GuitarString } from './string/guitar-string';
import { GuitarStringHeader } from './string/header/guitar-string-header';

let guitarStrings : ChronomaticScaleNote[] = ['e', 'b', 'g', 'd', 'a', 'e'];

export interface IKneckContext {
    action : {
        setNeckNote : (newNote : ChronomaticScaleNote) => void | undefined,
        setNeckChord : (newChord : ChronomaticScaleNote) => void | undefined
    },
    state : {
        kneckNote : ChronomaticScaleNote | undefined,
        kneckChord : ChronomaticScaleNote | undefined
    }
} 

export let KneckContext = createContext<IKneckContext | undefined>(undefined);

export function NeckDiagram() {

    const [kneckNote, setNeckNote] = useState<ChronomaticScaleNote>();
    const [kneckChord, setNeckChord] = useState<ChronomaticScaleNote>();

    const value : IKneckContext = useMemo(() => ({
        action : {
            setNeckNote,
            setNeckChord
        },
        state : {
            kneckNote,
            kneckChord
        }
    }), [kneckChord, kneckNote]);

    return (
        <main className='content'>
            <KneckContext.Provider value={value} >
                <GuitarStringHeader></GuitarStringHeader>
                {
                    guitarStrings.map((m, i) => <GuitarString key={i} stringRoot={m} ></GuitarString>)
                }
                <DiagramFooter></DiagramFooter>
            </KneckContext.Provider >
        </main>
    )
}