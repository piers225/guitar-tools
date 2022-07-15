import './guitar-fret-header.scss';

interface IGuitarFretHeaderProp {
    index : number;
}


export function GutiarFretHeader(prop : IGuitarFretHeaderProp) {

    return (
        <div className={ 'fret-' + prop.index }>{ prop.index }</div>
    )
}