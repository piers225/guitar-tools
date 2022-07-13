


type Natural = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g';

type Sharp =  Exclude<`${Natural}♯`, 'e♯' | 'b♯' >;

type Flat =  Exclude<`${Natural}♭`, 'c♭' | 'f♭'>;

export type ChronomaticScaleNote = Natural | Sharp | Flat;

let chronomaticScale
    : (Natural | [Sharp, Flat])[]  
    = [ 'a' , ['a♯', 'b♭'], 'b' , 'c' ,  ['c♯', 'd♭'], 'd' ,  ['d♯', 'e♭'], 'e' , 'f' ,  ['f♯', 'g♭'], 'g' , ['g♯', 'a♭']];

export { chronomaticScale }

