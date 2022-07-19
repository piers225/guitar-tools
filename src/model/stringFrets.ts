let numberOfFrets = 24;

let everyFret = [0].concat(Array.from({length:numberOfFrets}, (v, k) => k + 1));


export {
    numberOfFrets,
    everyFret
}