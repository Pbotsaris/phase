import * as Tone from 'tone'
/*
 *   @class SynthVoice
 *    Creates synth voice with a VCO, VFC, VCA, filter envelope, amplitude envelope, pan, volume fader.
 *    as well as sends for a ping pong delay and reverb.
 *
 *   @example
 *    const voice = new SynthVoice()
 *    voice.start();
 *    voice.noteOn('C1', '8n');   //  plays a C1 with 1/8 note duration.
 *    voice.setFreq(500);         // sets filter cutoff to 500hz
 *    voice.noteOn('C1', '8n');
 */

class SynthVoice {
  /*  Creates a synth voice.
   *  @param {string} wave
   *  @param {number} freq
   */
  constructor(wave = 'fatsawtooth', freq = 300) {
    this.synth = new Tone.MonoSynth()
    this.freq = freq
    this.wave = wave
    this.vol = new Tone.Volume(-6)
    this.panner = new Tone.Panner(0)
    this.filterEnv = {
      attack: 0.001,
      decay: 1,
      sustain: 0,
      release: 1.5,
      baseFrequency: this.freq,
      octaves: 1,
    }
    this.ampEnv = {
      attack: 0.001,
      decay: 1,
      sustain: 0,
      release: 1.5,
    }

    this.delay = new Tone.PingPongDelay('8n', 0.5)
    this.delay.feedback.value = 0.4
  }

  start() {
    this.synth.set({
      oscillator: { type: this.wave },
      filter: { frequency: this.freq },
      envelope: this.ampEnv,
      filterEnvelope: this.filterEnv,
      volume: -6,
    })
    this.delay.wet.value = 0.1

    this.synth.chain(this.delay, this.vol, this.panner, Tone.Destination)
  }

  getDelayTime() {
    return this.delay.delayTime.value
  }

  setDelayTime(delayTime) {
    this.delay.delayTime.value = delayTime
  }

  setDelayMix(mix) {
    this.delay.wet.value = mix
  }

  setPan(pan) {
    this.panner.pan.value = pan
  }

  setEnvelope(attack, decay, release) {
    this.ampEnv = { ...this.ampEnv, attack, decay, release }
    this.filterEnv = { ...this.filterEnv, attack, decay, release }

    this.synth.set({
      envelope: { attack: attack, decay: decay, release: release },
      filterEnvelope: { attack: attack, decay: decay, release: release },
    })
  }

  setFilterCutoff(freq) {
    this.freq = freq
    this.filterEnv.baseFrequency = this.freq
    this.synth.set({ filterEnvelope: { baseFrequency: this.freq } })
  }

  setVolume(vol) {
    this.vol.volume.value = vol
  }

  noteOnTime(note, dur, time) {
    this.synth.triggerAttackRelease(note, dur, time)
  }

  noteOn(note, dur) {
    this.synth.triggerAttackRelease(note, dur)
  }
}

export default SynthVoice
