


type Natural = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g';

type Sharp =  Exclude<`${Natural}♯`, 'e♯' | 'b♯' >;

type Flat =  Exclude<`${Natural}♭`, 'c♭' | 'f♭'>;

export type SharpFlatSymbol = '♯' | '♭';

export type ChronomaticScaleNoteSharp = Natural | Sharp ;

export type ChronomaticScaleNoteFlat = Natural | Flat ;

export type ChronomaticScaleNote = Natural | Sharp | Flat;

let chronomaticScale
    : (Natural | [Sharp, Flat])[]  
    = [ 'a' , ['a♯', 'b♭'], 'b' , 'c' ,  ['c♯', 'd♭'], 'd' ,  ['d♯', 'e♭'], 'e' , 'f' ,  ['f♯', 'g♭'], 'g' , ['g♯', 'a♭']];

let chronomaticScaleSharps : ChronomaticScaleNoteSharp[]
    = [ 'a' , 'a♯', 'b' , 'c', 'c♯', 'd', 'd♯', 'e' , 'f', 'f♯', 'g' , 'g♯' ];

let chronomaticScaleFlats :  ChronomaticScaleNoteFlat[]  
    =  ['a♭', 'a' , 'b♭', 'b' , 'c', 'd♭', 'd', 'e♭', 'e' , 'f', 'g♭', 'g' ];

let sharpFlatSymbols : SharpFlatSymbol[] = ['♯', '♭']

let sharpFlatSymbolsLookup : {
    [p in SharpFlatSymbol] : string
} = { 
    '♭' : 'flat',
    '♯' : 'sharp'
}

let sharpFlatChronomaticScaleLookup : {
    [p in SharpFlatSymbol] : (ChronomaticScaleNoteSharp[] | ChronomaticScaleNoteFlat[]) 
} = {
    '♭' : chronomaticScaleFlats,
    '♯' : chronomaticScaleSharps
}

export { 
    chronomaticScale,
    chronomaticScaleSharps,
    chronomaticScaleFlats,
    sharpFlatSymbols,
    sharpFlatSymbolsLookup,
    sharpFlatChronomaticScaleLookup
}


