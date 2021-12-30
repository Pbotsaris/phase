import * as Tone from 'tone'

export default class MasterOut {
   constructor() {
      this.reverb = null
      this.destination = Tone.Destination;
   }

   async loadReverb() {
      this.reverb = new Tone.Reverb(150)

      await this.reverb.ready

      this.reverb.wet.value = 0.07

      this.destination.chain(this.reverb)
   }


   setReverbMix(value) {
      this.reverb.wet.value = value;
   }

   async loadTone() {
      await Tone.start();
   }
}
