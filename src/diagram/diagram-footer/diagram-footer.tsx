import { useCallback, useContext } from 'react'
import { chronomaticScaleFlats, ChronomaticScaleNote } from '../../model/notes'
import { allScales, ScaleType } from '../../model/scale';
import { KneckContext, KneckScale } from '../guitar-neck-diagram'
import './diagram-footer.scss'


export function DiagramFooter()  {

    const context = useContext(KneckContext);

    const onNoteChange = useCallback((note : ChronomaticScaleNote | '') => {
            context?.action.setNeckScale(undefined);
            context?.action.setNeckNote(note);
    }, []);

    const onChangeScaleRoot = useCallback((note : ChronomaticScaleNote) => {
            context?.action.setNeckNote('');
            const kneckScale : KneckScale = { scale : context?.state.kneckScale ? context?.state.kneckScale.scale : 'minor', rootNote : note };
            context?.action.setNeckScale(kneckScale);
    }, [context?.state.kneckScale?.scale]);

    const onScaleChange = useCallback((scale : ScaleType) => {
        context?.action.setNeckNote('');
        const kneckScale : KneckScale = { scale, rootNote : context?.state.kneckScale ? context.state.kneckScale.rootNote : 'a' };
        context?.action.setNeckScale(kneckScale) ;
    }, [context?.state.kneckScale?.rootNote]);

    return (
        <div className='guitar-neck-diagram'>
            <div className={ ['userInput', context?.state.kneckNote ? 'highlight' : ''].join(' ')  }  >
                <div><b>Note</b></div>
                <div className='choose-note'>
                {
                    chronomaticScaleFlats.map((m , i) =>
                        <div className='option' key={i}>
                            <input id={ `noteSelect${i}` }  name="select_note" type="radio" value={m} onChange={() => onNoteChange(m)} checked={context?.state.kneckNote === m }></input>      
                            <label htmlFor={ `noteSelect${i}`}>{ m }</label>
                        </div>)
                }
                </div>
            </div>
            <div className={ ['userInput', context?.state.kneckScale ? 'highlight' : ''].join(' ')  } >
                <div><b>Scale</b></div>
                <div className='choose-scale'>
                    <div className='choose-scale-type' >
                    {
                        allScales.map((s, i) => 
                            <div className='option' key={i}>
                                <input id={ `scaleSelect${i}` }  name="scale_root" type="radio" value={s} onChange={() => onScaleChange(s)} checked={context?.state.kneckScale?.scale === s }></input>      
                                <label htmlFor={ `scaleSelect${i}`}>{ s }</label>
                            </div>
                        )
                    }
                    </div>
                    <div className='choose-scale-root'>
                        {
                            chronomaticScaleFlats.map((m , i) =>
                                <div className='option' key={i}>
                                    <input id={ `rootSelect${i}` }  name="select_scale" type="radio" value={m} onChange={() => onChangeScaleRoot(m)} checked={context?.state.kneckScale?.rootNote === m }></input>      
                                    <label htmlFor={ `rootSelect${i}`}>{ m }</label>
                                </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}