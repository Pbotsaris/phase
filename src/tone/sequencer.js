import * as Tone from 'tone'

/* this array is only for testing purposes */
const INITIAL_NOTES = [
  'C3',
  'C3',
  'C3',
  'C3',
  'C3',
  'C3',
  'C3',
  'C3',
  'C3',
  'C3',
  'C3',
  'C3',
]

class Sequencer {
  constructor(synth, phasedSynth) {
    this.synth = synth
    this.phasedSynth = phasedSynth
    this.sequence
    this.phasedSequence
    this.delay = 0.0001
    this.notes = INITIAL_NOTES
    this.synth.setPan(-0.4)
    this.phasedSynth.setPan(0.4)
  }

  create(notes) {
    this.notes = notes

    this.sequence = new Tone.Sequence((time, note) => {
      this.synth.noteOnTime(note, '8n', time)
    }, this.notes)

    this.phasedSequence = new Tone.Sequence((time, note) => {
      this.phasedSynth.noteOnTime(note, '8n', time + this.delay)
      this.delay += 0.0004
    }, this.notes)
  }

  start() {
    Tone.Transport.bpm.value = 140
    this.sequence.start(0)
    this.phasedSequence.start(0)
    Tone.Transport.start()
  }

  stop() {
    this.sequence.stop()
    this.phasedSequence.stop()
    this.phasedSequence.dispose()
    this.sequence.dispose()
    Tone.Transport.stop()
    this.delay = 0.0001
  }

  getSynthsDelayTime(whichSynth) {
    const synth = whichSynth == 'phased' ? this.phasedSynth : this.synth
    return synth.delay.delayTime.value
  }

  setSynthsCutoff(freq) {
    this.synth.setFilterCutoff(freq)
    this.phasedSynth.setFilterCutoff(freq)
  }

  setSythsDelayMix(mix) {
    this.synth.setDelayMix(mix)
    this.phasedSynth.setDelayMix(mix)
  }

  setSynthsEvelope(attack, decay, release) {
    this.synth.setEnvelope(attack, decay, release)
    this.phasedSynth.setEnvelope(attack, decay, release)
  }

  scheduleChange(notes) {
    const currentTime = Tone.Time(Tone.Transport.position)

    const eightNoteOffset = Tone.Time('8n').toSeconds()

    Tone.Transport.scheduleOnce((_time) => {
      this.sequence.events = notes
      this.phasedSequence.events = notes
    }, currentTime + eightNoteOffset)
  }
}

export default Sequencer
