import { writable } from 'svelte/store'

/*
 * The state of the virtual keyboard and its keys.
 *
 * @typedef {Object} key
 * @property {string} label the label of a key
 * @property {bool} keydown tracks wether a key of the virtual keyboard is down.
 * @property {string} note the note associated with a key in the virtual keyboard.
 * @typedef {Array.<key>} keys an array of keys that makes the keyboard
 */

const keys = 'sdfghjkl'
  .split('')
  .map((label) => ({ label: label, keydown: false, note: null }))
export const keyboard = writable(keys)

const MAX_SIZE = 12

/*
 * A slot to containing recorded notes.
 * @typedef {object} noteSlot
 * @property {number} noteSot.index the index positing of the object within the notes array.
 * @property {string} noteSlot.note the recorded note.
 *
 * @typedef {Array.<noteSlot>} notes an array with noteSlots
 */

const notes = [...Array(MAX_SIZE).keys()].map((index) => ({
  index: index,
  note: null,
}))

/*
 * A stack holding up to MAX_SIZE recorded notes. Inserts to the end but allows for deleting items in the middle of the stack.
 *
 * @typedef {Object} stack
 * @property {number} max the max size of the stack
 * @property {number} position tracks th end/insert position of the stack
 * @property {bool} recordingEnabled the stack will only tack new entries of recording enable is set to true
 * @property {notes} notes the array of noteSlots (see above)
 * @property {Function} delete deletes a noteSlock at `index` position
 */
const stack = {
  max: MAX_SIZE,
  position: 0,
  recordingEnabled: false,
  notes: notes,
  delete: function (index) {
    for (let i = index; i < MAX_SIZE; i++)
      if (i == MAX_SIZE - 1) this.notes[i].note = null
      else this.notes[i].note = this.notes[i + 1].note
  },
}

export const recordingStack = writable(stack)

/* 
 * Sliders can move in a horizontal or vertical direction.
 * When moving in a horizontal directory and change position in realtion other sliders
 * it's index position change and it will control a different offset in the sequenece.
 * 
 * This data structure help us keep track index position of the slider
 *
 */

export const  sliderIndexMapper = writable([])
