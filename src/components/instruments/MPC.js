import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  Synth,
  Freeverb,
  PingPongDelay,
  PolySynth,
  Master,
  Sampler,
} from "tone";
import Wrapper from "./Wrapper";

import C3 from "../../assets/samples/bonecrack.wav";
import F3 from "../../assets/samples/footsteps.wav";
import C4 from "../../assets/samples/windandchimes.wav";
import F4 from "../../assets/samples/fireworks.wav";

import {
  triggerAttack,
  triggerRelease,
  getNote,
  getVelocity,
  getUser,
} from "../../store/reducers/band";

export default ({ type, prefix }) => {
  const [patched, setPatched] = useState(false);
  const [instrument, setInstrument] = useState(null);
  const [mouseDown, setMouseDown] = useState(false);
  const note = useSelector(getNote(type));
  const velocity = useSelector(getVelocity(type));
  const user = useSelector(getUser(type));

  useEffect(() => {
    if (!patched) {
      const inst = new Sampler({
        C3,
        F3,
        C4,
        F4,
      });
      inst.volume.value = -6;
      const reverb = new Freeverb(0.6, 5000);
      const pingPongDelay = new PingPongDelay({
        delayTime: "32n",
        feedback: 0.7,
        wet: 0.25,
      });
      inst.connect(pingPongDelay);
      pingPongDelay.connect(reverb);
      reverb.connect(Master);
      setInstrument(inst);
      setPatched(true);
    }
    if (instrument) {
      if (note) {
        // TODO: check why this is not working
        // instrument.triggerAttack(note, 0, velocity);
        instrument.triggerAttack(note);
      } else {
        instrument.triggerRelease();
      }
    }
  });

  return (
    <Wrapper type={type} user={user} inputPad={true} prefix={prefix}></Wrapper>
  );
};
