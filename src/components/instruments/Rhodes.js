import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Synth, Freeverb, PingPongDelay, MetalSynth, Master } from "tone";
import Wrapper from "./Wrapper";

import { getNote, getVelocity, getUser } from "../../store/reducers/band";

export default ({ type, prefix }) => {
  const [patched, setPatched] = useState(false);
  const [instrument, setInstrument] = useState(null);
  const [mouseDown, setMouseDown] = useState(false);
  const note = useSelector(getNote(type));
  const velocity = useSelector(getVelocity(type));
  const user = useSelector(getUser(type));
  const name = useSelector((state) => state.system.name);
  const isActiveUser = () => {
    return user === name;
  };

  useEffect(() => {
    if (!patched) {
      const inst = new Synth({
        frequency: 200,
        envelope: {
          attack: 0.001,
          decay: 1.4,
          release: 0.2,
        },
        harmonicity: 5.1,
        modulationIndex: 32,
        resonance: 4000,
        octaves: 1.5,
      });
      const reverb = new Freeverb(0.4, 1000);
      const pingPongDelay = new PingPongDelay({
        delayTime: "8n",
        feedback: 0.4,
        wet: 0.5,
      });
      inst.connect(Master);
      pingPongDelay.connect(reverb);
      reverb.connect(Master);
      setInstrument(inst);
      setPatched(true);
    }
    if (instrument) {
      if (note) {
        instrument.triggerAttack(note, 0, velocity);
      } else {
        instrument.triggerRelease();
      }
    }
  });

  return (
    <Wrapper type={type} user={user} inputPad={true} prefix={prefix}></Wrapper>
  );
};
