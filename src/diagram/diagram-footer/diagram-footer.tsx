import { useCallback, useContext } from 'react'
import { chronomaticScaleFlats } from '../../model/notes'
import { KneckContext } from '../guitar-neck-diagram'
import './diagram-footer.scss'


export function DiagramFooter()  {

    const context = useContext(KneckContext);

    const update = useCallback((event : React.ChangeEvent<HTMLSelectElement>) => context?.action.setNeckNote(event.target.value), [])

    return (
        <div>
             <label htmlFor="notes">Choose a note:</label>
                <select name="notes" id="notes" onChange={update}>
                    {
                        chronomaticScaleFlats.map((m , i) => 
                            <option key={i} value={m}>{m}</option>)
                    }
                </select> 
        </div>
    )
}