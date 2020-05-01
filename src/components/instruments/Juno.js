import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Synth, Freeverb, PingPongDelay, Master } from "tone";
import Wrapper from "./Wrapper";
import { getNote, getVelocity, getUser } from "../../store/reducers/band";

export default ({ type, prefix }) => {
  const [instrument, setInstrument] = useState(null);
  const note = useSelector(getNote(type));
  const velocity = useSelector(getVelocity(type));
  const user = useSelector(getUser(type));

  useEffect(() => {
    const pad = new Synth({
      oscillator: {
        type: "sine",
      },
      envelope: {
        attack: 0.05,
        decay: 0.1,
        sustain: 0.3,
        release: 1,
      },
    });
    const reverb = new Freeverb(0.4, 1000);
    const pingPongDelay = new PingPongDelay({
      delayTime: "8n",
      feedback: 0.4,
      wet: 0.5,
    });
    pad.connect(Master);
    pingPongDelay.connect(reverb);
    reverb.connect(Master);
    setInstrument(pad);
  }, []);

  useEffect(() => {
    if (instrument) {
      if (note) {
        instrument.triggerAttack(note, 0, velocity);
      } else {
        instrument.triggerRelease();
      }
    }
  }, [instrument, note, velocity]);

  return (
    <Wrapper type={type} user={user} inputPad={true} prefix={prefix}></Wrapper>
  );
};
