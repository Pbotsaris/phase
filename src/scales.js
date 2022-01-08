/*
 *   @class Scales
 *   The Scales hq
 *         lass is a factory that will produce a music scale depending in internal state.
 *   The properties that will define a scale are `octave`, `key` and `tonality`.
 *   The output music scale is available as an array via the `current` property.
 *
 *   @example
 *   const scale = new Scale();      // defaults to the C3 major scale.
 *   console.log(scale.current);     //  ['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4']
 *
 *   scale.setTonality('minor');
 *   scale.setKey('minor');
 *   scale.setOctave('1');
 *   console.log(scale.current);     //  ['D1', 'E1', 'F1', 'G1', 'A1', 'A#1', 'C2', 'D2']
 */

/*
 * CONSTANTS
                0    1     2    3     4    5    6     7    8     9    10    11  */
const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

/* Available keys */

const KEYS = {
  C: 0,
  Csharp: 1,
  D: 2,
  Dsharp: 3,
  E: 4,
  F: 5,
  Fsharp: 6,
  G: 7,
  Gsharp: 8,
  A: 9,
  Asharp: 10,
  B: 11,
}

/* Available scales */

const SCALES = {
  major: [0, 2, 4, 5, 7, 9, 11, 0],
  minor: [0, 2, 3, 5, 7, 8, 10, 0],
  dorian: [0, 2, 3, 5, 7, 9, 10, 0],
  mixo: [0, 2, 4, 5, 7, 9, 10, 0],
  phrygian: [0, 1, 3, 5, 7, 8, 10, 0],
  lydian: [0, 2, 4, 6, 7, 9, 11, 0],
}
const OCTAVE_INDEX = 7

/* CLASS */

export default class Scales {
  /* Creates a scale factory.
   *  @param {string} octave
   *  @param {string} tonality major, minor, dorian, mixo, phrygian and lydian.
   *  @param {string} key  C, Csharp, E, Gsharp etc.
   */
  constructor(octave = '3', tonality = 'major', key = 'C') {
    /*  octave.
     *  @type {string}
     *  @public
     */
    this.octave = octave

    /*  tonality. accepted values: major, minor, dorian, mixo, phrygian and lydian.
     *  @type {string}
     *  @public
     */
    this.tonality = tonality

    /*  key. the musical key. accepted values: C, Csharp, E, Gsharp etc.
     *  @type {string}
     *  @public
     */
    this.key = key

    /*  current. the current selected scale.
     *  @type {string}
     *  @public
     *  @readonly
     */
    this.current

    /*  tonalities. a list with all available tonalities.
     *  @type {array}
     *  @public
     *  @readonly
     */
    this.tonalities = Object.keys(SCALES)

    /*  keys. a list with all available music keys.
     *  @type {array}
     *  @public
     *  @readonly
     */
    this.keys = Object.keys(KEYS)
    this._setScale()
  }

  /*  @public */

  /*  Set the octave property and updates the scale.
   *  @param {string} octave
   */
  setOctave(octave) {
    this.octave = octave
    this._setScale()
  }

  /*  Set the tonality property and updates the scale.
   *  @param {string} tonality
   */
  setTonality(tonality) {
    this.tonality = tonality
    this._setScale()
  }

  /*  Set the tonality property and updates the scale.
   *  @param {string} key
   */
  setKey(key) {
    this.key = key
    this._setScale()
  }

  getFullCurrentScale() {
    const notes = this.current.map((note) => {
      if (note.charAt(1) == '#') return `${note.charAt(0)}${note.charAt(1)}`
      else return note.charAt(0)
    })
    notes.pop()

    let scale = []

    for (let i = 0; i <= 6; i++) {
      const notesWithOctaves = notes.map((note) => `${note}${i}`)
      scale = scale.concat(notesWithOctaves)
    }

    return scale
  }

  /* @private */

  /*
   * set the output scale in `current` based on `tonality`, `octave` and `key`.
   */
  _setScale() {
    const toOctaveOffset = this._indexToOffset(KEYS[this.key]) //  offset octaves depending on key

    this.current = SCALES[this.tonality].map((notePos, index) => {
      const note = (notePos + KEYS[this.key]) % NOTES.length

      let octave = this.octave

      if (index == OCTAVE_INDEX && KEYS[this.key] == 0)
        octave = this._addToOctave(this.octave, 1)

      if (KEYS[this.key] != 0 && index > toOctaveOffset)
        octave = this._addToOctave(octave, 1)

      return `${NOTES[note]}${octave}`
    })
  }

  /* Addes adds a {number} an octave
   *  @param {string} octave
   *  @param {number} number
   */
  _addToOctave(octave, number) {
    return (octave * 1 + number).toString()
  }

  /*  returns index to offset the octave depending on the current key.
   *  @param {number} key
   */
  _indexToOffset(key) {
    if (key == 1 || key == 2) return OCTAVE_INDEX - 2

    if (key == 3 || key == 4) return OCTAVE_INDEX - 3

    if (key == 5 || key == 6) return OCTAVE_INDEX - 4

    if (key == 7 || key == 8) return OCTAVE_INDEX - 5

    if (key == 9 || key == 10) return OCTAVE_INDEX - 6

    if (key == 11) return OCTAVE_INDEX - 7

    return 0
  }
}
