// ----------- 0    1     2    3     4    5    6     7    8     9    10    11
const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
const KEYS = {C: 0, Csharp: 1, D: 2, Dsharp: 3, E: 4, F: 5, Fsharp: 6, G: 7, Gsharp: 8, A: 9, Asharp: 10, B: 11}
const SCALES = {
  major: [0, 2, 4, 5, 7, 9, 11],
  minor: [0, 2, 3, 5, 7, 8, 10],
  // modal
  dorian: [0, 2, 3, 5, 7, 9, 10],
  mixo: [0, 2, 4, 5, 7, 9, 10],
  phrygian: [0, 1, 3, 5, 7, 8, 10],
  lydian: [0, 2, 4, 6, 7, 9, 11],
}

export default class Scales {

  constructor(octave = '3', tonality = 'major', key = 'C') {
    this.octave = octave;
    this.tonality = tonality;
    this.key = key;
    this.current;
    this._setScale()
  }

  setOctave(octave) {
    this.octave = octave;
    this._setScale()
  }

  setTonality(tonality) {
    this.tonality = tonality;
    this._setScale()
  }

  setKey(key) {
    this.key = key;
    this._setScale()
  }

  /* PRIVATE */

  _setScale() {
    this.current = SCALES[this.tonality].map(noteIndex => {
      const note = (noteIndex + KEYS[this.key]) % NOTES.length
      return `${NOTES[note]}${this.octave}`
    })
  }
}
