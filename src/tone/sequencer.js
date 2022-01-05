import * as Tone from 'tone';

class Sequencer {
  constructor(synth, phasedSynth) {
    this.synth = synth;
    this.phasedSynth = phasedSynth;
    this.sequence;
    this.phasedSequence;
    this.tranport = Tone.Transport;
    this.delay = 0.0001;

    this.synth.setPan(-0.2);
    this.phasedSynth.setPan(0.2);
  }

  create(notes) {
    this.sequence = new Tone.Sequence((time, note) => {
      this.synth.noteOnTime(note, '8n', time);
    }, notes);

    this.phasedSequence = new Tone.Sequence((time, note) => {
      this.phasedSynth.noteOnTime(note, '8n', time + this.delay);
      this.delay += 0.0004;
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
    this.delay = 0.0001;
  }

  setSynthsCutoff(freq) {
    this.synth.setFilterCutoff(freq);
    this.phasedSynth.setFilterCutoff(freq);
  }

}

export default Sequencer;
