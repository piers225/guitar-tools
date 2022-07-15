let numberOfFrets = 24;

let everyFret = Array.from({length:numberOfFrets}, (v, k) => k + 1);


export {
    numberOfFrets,
    everyFret
}