import {writable} from 'svelte/store'

/*
 * The state of the virtual keyboard and its keys.
 *
 * @typedef {Object} key
 * @property {string} label the label of a key 
 * @property {bool} keydown tracks wether a key of the virtual keyboard is down.
 * @property {string} note the note associated with a key in the virtual keyboard.
 * 
 * @typedef {Array.<key>} keys an array of keys that makes the keyboard
 */
const keys = 'sdfghjkl'.split('').map(label => ({label: label, keydown: false, note: null}))
export const keyboard = writable(keys)


/*
 *   Array holding up to MAX_SIZE recorded notes. 
*/

const MAX_SIZE = 12;
const notes = [...Array(MAX_SIZE).keys()].map(index => ({index: index, note: null}))

const stack = {
  max: MAX_SIZE,
  position: 0,
  notes: notes,
  delete: function (index) {
    for (let i = index; i < MAX_SIZE; i++)
      if (i == MAX_SIZE - 1)
        this.notes[i].note = null;
      else
        this.notes[i].note = this.notes[i + 1].note
  }
};

export const recordingStack = writable(stack);
