import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Tone, {
  Synth,
  FMSynth,
  Freeverb,
  PingPongDelay,
  Tremolo,
  Vibrato,
  Master,
} from "tone";
import Wrapper from "./Wrapper";

import { getNote, getVelocity, getUser } from "../../store/reducers/band";

export default ({ type, prefix }) => {
  const [instrument, setInstrument] = useState(null);
  const note = useSelector(getNote(type));
  const velocity = useSelector(getVelocity(type));
  const user = useSelector(getUser(type));

  useEffect(() => {
    const inst = new FMSynth({
      harmonicity: 3,
      modulationIndex: 6,
      detune: 0,
      oscillator: {
        type: Tone.sine,
      },
      envelope: {
        attack: 0.01,
        decay: 0.01,
        sustain: 1,
        release: 0.7,
      },
      modulation: {
        type: Tone.sine,
      },
      modulationEnvelope: {
        attack: 0.5,
        decay: 0,
        sustain: 0.4,
        release: 0.2,
      },
    });
    const reverb = new Freeverb(0.4, 1000);
    const pingPongDelay = new PingPongDelay({
      delayTime: "16n",
      feedback: 0.8,
      wet: 0.6,
    });
    const tremolo = new Tremolo(7, 0.4);
    const vibrato = new Vibrato(3, 0.2);
    tremolo.start();
    inst.connect(tremolo);
    tremolo.connect(vibrato);
    vibrato.connect(reverb);
    reverb.connect(pingPongDelay);
    pingPongDelay.connect(Master);
    setInstrument(inst);
  }, []);

  useEffect(() => {
    if (instrument) {
      if (note) {
        instrument.triggerAttack(note, undefined, velocity);
      } else {
        instrument.triggerRelease();
      }
    }
  }, [instrument, note, velocity]);

  return (
    <Wrapper type={type} user={user} inputPad={true} prefix={prefix}></Wrapper>
  );
};
