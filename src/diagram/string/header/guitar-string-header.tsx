import { everyFret } from "../../../model/stringFrets";
import { GutiarFretHeader } from "../../fret/header/guitar-fret-header";
import './guitar-string-header.scss';

export function GuitarStringHeader() {

    return (
        <div className="guitarStringHeader">
            {
                everyFret
                    .map((m) => 
                        <GutiarFretHeader key={m} index={m} ></GutiarFretHeader>)
            }
        </div>
    )

}