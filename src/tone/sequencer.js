import * as Tone from 'tone';
import SynthVoice from './synth_voice'

class Sequencer {
  constructor(voice) {
    this.voice = voice;
    this.phasedVoice = new SynthVoice();
    this.sequence;
    this.phasedSequence;
    this.tranport = Tone.Transport;
    this.phasedVoice.start();
  }

  create(notes) {
    this.sequence = new Tone.Sequence((time, note) => {
      this.voice.noteOnTime(note, '8n', time);
    }, notes);

  }

  createPhased(notes) {
    let delay = 0.0001;
    this.phasedSequence = new Tone.Sequence((time, note) => {
      this.phasedVoice.noteOnTime(note, '8n', time + delay);
      delay += 0.0004;
    }, notes);
  }

  start() {
    Tone.Transport.bpm.value = 140;
    this.sequence.start(0);
    this.phasedSequence.start(0);
    Tone.Transport.start();
  }

  stop() {
    this.sequence.stop()
    this.phasedSequence.stop()
    this.sequence.dispose();
    this.phasedSequence.dispose();
    Tone.Transport.stop();
  }
}

export default Sequencer;
