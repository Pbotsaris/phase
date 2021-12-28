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
