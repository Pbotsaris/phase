import * as Tone from 'tone';
import Scales from '../scales';
import SynthVoice from './synth_voice';

class Sequencer {
  constructor() {
    this.voice = new SynthVoice();
    this.scale = new Scales();
    this.sequence;
    this.tranport = Tone.transport;
  }

  create(notes) {
    this.sequence = new Tone.Sequence((time, note) => {
      this.voice.noteOnTime(note, '8n', time);
    }, notes);

  }

  createPhase(notes) {
    let i = 0.0001;
    this.sequence = new Tone.Sequence((time, note) => {
      this.voice.noteOnTime(note, '8n', time + i);
      i = i + 0.0004;
    }, notes);
  }

  start() {
    Tone.Transport.bpm.value = 140;
    this.sequence.start(0);
    Tone.Transport.start();
  }

  stop() {
    this.sequence.stop()
    this.sequence.dispose();
    Tone.Transport.stop();
  }
}

export default Sequencer;
