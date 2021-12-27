// -- INDEX --  0    1     2    3     4    5    6     7    8     9    10    11
const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
const KEYS = {C: 0, Csharp: 1, D: 2, Dsharp: 3, E: 4, F: 5, Fsharp: 6, G: 7, Gsharp: 8, A: 9, Asharp: 10, B: 11}

const SCALES = {
  major: [0, 2, 4, 5, 7, 9, 11, 0],
  minor: [0, 2, 3, 5, 7, 8, 10, 0],
  dorian: [0, 2, 3, 5, 7, 9, 10, 0],
  mixo: [0, 2, 4, 5, 7, 9, 10, 0],
  phrygian: [0, 1, 3, 5, 7, 8, 10, 0],
  lydian: [0, 2, 4, 6, 7, 9, 11, 0],
}
const OCTAVE_INDEX = 7

export default class Scales {

  constructor(octave = '3', tonality = 'major', key = 'C') {
    this.octave = octave;
    this.tonality = tonality;
    this.key = key;
    this.current;
    this.tonalities = Object.keys(SCALES)
    this.keys = Object.keys(KEYS)
    this._setScale()
    console.log(this.keys)
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

    const toOctaveOffset = this._indexToOffset(KEYS[this.key]);  //  offset octaves depending on key

    this.current = SCALES[this.tonality].map((notePos, index) => {
      const note = (notePos + KEYS[this.key]) % NOTES.length

      let octave = this.octave;

      if (index == OCTAVE_INDEX && KEYS[this.key] == 0)
        octave = this._addToOctave(this.octave, 1)

      if (KEYS[this.key] != 0 && index > toOctaveOffset)
        octave = this._addToOctave(octave, 1)

      return `${NOTES[note]}${octave}`
    })
  }

  _addToOctave(octave, number) {
    return ((octave * 1) + number).toString();
  }

  _indexToOffset(key) {

    if (key == 1 || key == 2)
      return OCTAVE_INDEX - 2;

    if (key == 3 || key == 4)
      return OCTAVE_INDEX - 3;

    if (key == 5 || key == 6)
      return OCTAVE_INDEX - 4;

    if (key == 7 || key == 8)
      return OCTAVE_INDEX - 5;

    if (key == 9 || key == 10)
      return OCTAVE_INDEX - 6;

    if (key == 11)
      return OCTAVE_INDEX - 7;

    return 0;
  }
}
