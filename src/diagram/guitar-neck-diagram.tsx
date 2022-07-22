import { createContext, useMemo, useState } from 'react';
import { chronomaticScale, ChronomaticScaleNote } from '../model/notes';
import { ScaleType } from '../model/scale';
import { DiagramFooter } from './diagram-footer/diagram-footer';
import './guitar-neck-diagram.scss';
import { GuitarString } from './string/guitar-string';
import { GuitarStringHeader } from './string/header/guitar-string-header';

let guitarStrings : ChronomaticScaleNote[] = ['e', 'b', 'g', 'd', 'a', 'e'];

export type KneckScale = { rootNote : ChronomaticScaleNote,  scale : ScaleType } | undefined;

export interface IKneckContext {
    action : {
        setNeckNote : (newNote : ChronomaticScaleNote | '') => void,
        setNeckScale : (newScale : KneckScale) => void
    },
    state : {
        kneckNote : ChronomaticScaleNote | '',
        kneckScale : KneckScale
    }
}


export let KneckContext = createContext<IKneckContext | undefined>(undefined);

export function NeckDiagram() {

    const [kneckNote, setNeckNote] = useState<ChronomaticScaleNote  | ''>('');
    const [kneckScale, setNeckScale] = useState<KneckScale>(undefined);

    const value : IKneckContext = useMemo(() => ({
        action : {
            setNeckNote,
            setNeckScale
        },
        state : {
            kneckNote,
            kneckScale
        }
    }), [kneckScale, kneckNote]);

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