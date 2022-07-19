import { useCallback, useContext } from 'react'
import { chronomaticScaleFlats, ChronomaticScaleNote } from '../../model/notes'
import { KneckContext } from '../guitar-neck-diagram'
import './diagram-footer.scss'


export function DiagramFooter()  {

    const context = useContext(KneckContext);

    const onNoteChange = useCallback((event : React.ChangeEvent<HTMLSelectElement>) => {
            context?.action.setNeckScale('');
            context?.action.setNeckNote(event.target.value as ChronomaticScaleNote);
    }, []);

    const onScaleChange = useCallback((event : React.ChangeEvent<HTMLSelectElement>) => {
            context?.action.setNeckNote('');
            context?.action.setNeckScale(event.target.value as ChronomaticScaleNote) 
    }, []);

    return (
        <div className='guitar-neck-diagram'>
            <div className='userInput choose-note' >
                <label htmlFor="notes">Choose a note:</label>
                <select name="notes" id="notes" value={context?.state.kneckNote} onChange={onNoteChange}>
                    <option value=''>None</option>
                    {
                        chronomaticScaleFlats.map((m , i) => 
                            <option key={i} value={m}>{m}</option>)
                    }
                </select> 
            </div>
            <div className='userInput' >
            <label htmlFor="key">Choose a scale:</label>
                <select name="key" id="notes" value={context?.state.kneckScale} onChange={onScaleChange}>
                    <option value=''>None</option>
                    {
                        chronomaticScaleFlats.map((m , i) => 
                            <option key={i} value={m}>{m}</option>)
                    }
                </select> 
            </div>
        </div>
    )
}