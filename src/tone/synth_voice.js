import * as Tone from 'tone'

class SynthVoice {
  constructor(wave, freq) {
    this.synth = new Tone.MonoSynth();
    this.freq = freq;
    this.wave = wave;
    this.vol = new Tone.Volume(-6);
    this.panner = new Tone.Panner(0);
    this.freqEnv = {
      attack: 0.01,
      decay: 1,
      sustain: 0,
      release: 1.5,
      baseFrequency: freq,
      octaves: 1,
    };
    this.ampEnv = {
      attack: 0.01,
      decay: 1,
      sustain: 0,
      release: 1.5,
    };

    this.delay = new Tone.PingPongDelay('8n', 0.3);
    this.reverb = new Tone.Reverb(200);
  }

  async start() {

    await Tone.start();

    this.synth.set({
      oscillator: {type: this.wave},
      frequency: this.freq,
      envelope: this.ampEnv,
      filterEnvelope: this.freqEnv,
      volume: -6,
    });
    this.delay.wet.value = 0.1;

    await this.reverb.ready;

    this.reverb.wet.value = 0.05;
    this.synth.chain(
      this.delay,
      this.reverb,
      this.vol,
      this.panner,
      Tone.Destination,
    )
  }

  async isVerbReady() {
    await this.reverb.ready;
  }

  setDelay(delayTime, wet) {
    this.delay.wet.value = wet;
    this.delay.delayTime.value = delayTime;
  }

  setPan(pan) {
    this.panner.pan.value = pan;
  }

  setFreq(freq) {
    this.synth.frequency.value = freq;
    this.freq = freq;
  }

  setVolume(vol) {
    this.vol.volume.value = vol;
  }

  noteOnTime(note, dur, time) {
    this.synth.triggerAttackRelease(note, dur, time);
  }

  noteOn(note, dur) {
    this.synth.triggerAttackRelease(note, dur);
  }
}

export default SynthVoice;
