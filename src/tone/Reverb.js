import * as Tone from 'tone';


export default async function createReverb() {

  const reverb = new Tone.Reverb(150);

  await reverb.ready;

  reverb.wet.value = 0.07;

  Tone.Destination.chain(reverb);

  return reverb;
}

