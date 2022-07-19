import './guitar-fret-header.scss';

interface IGuitarFretHeaderProp {
    index : number;
}


export function GutiarFretHeader(prop : IGuitarFretHeaderProp) {

    return (
        <div className={ prop.index === 0 ? 'open-fret-header' : 'fret-' + prop.index }>{ prop.index === 0 ? '' : prop.index }</div>
    )
}