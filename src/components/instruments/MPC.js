import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Synth,
  Freeverb,
  PingPongDelay,
  PolySynth,
  Master,
  Sampler,
} from "tone";
import Wrapper from "./Wrapper";
import client from "../../mqtt";

import C3 from "../../assets/samples/bonecrack.wav";
import F3 from "../../assets/samples/footsteps.wav";
import C4 from "../../assets/samples/windandchimes.wav";
import F4 from "../../assets/samples/fireworks.wav";

import {
  instruments,
  triggerAttack,
  triggerRelease,
} from "../../store/reducers/band";

import styled from "styled-components";

const Input = styled.div`
  width: 100%;
  height: 100%;
  background-color: lightgoldenrodyellow;
`;

function map_range(value, low1, high1, low2, high2) {
  return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
}

const scale = [
  "C3",
  "D3",
  "E3",
  "F3",
  "G3",
  "A3",
  "B3",
  "C4",
  "D4",
  "E4",
  "F4",
  "G4",
  "A4",
  "B4",
];

export default ({ prefix }) => {
  const [patched, setPatched] = useState(false);
  const [instrument, setInstrument] = useState(null);
  const [mouseDown, setMouseDown] = useState(false);
  const note = useSelector((state) => state.band.instruments.MPC.note);
  const velocity = useSelector((state) => state.band.instruments.MPC.velocity);
  const user = useSelector((state) => state.band.instruments.MPC.user);
  const name = useSelector((state) => state.system.name);

  const isActiveUser = () => {
    return user === name;
  };

  useEffect(() => {
    if (!patched) {
      const inst = new Sampler({
        C3,
        F3,
        C4,
        F4,
      });
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
        // instrument.triggerAttack("C3", 0, velocity);
        instrument.triggerAttack(note);
      } else {
        instrument.triggerRelease();
      }
    }
  });

  return (
    <Wrapper type={"MPC"} user={user}>
      <Input
        onMouseDown={(event) => {
          if (!isActiveUser()) return;
          setMouseDown(true);
          const x =
            (event.clientX - event.target.getBoundingClientRect().left) /
            event.target.offsetWidth;
          const y =
            1 -
            (event.clientY - event.target.getBoundingClientRect().top) /
              event.target.offsetHeight;

          const n = scale[Math.floor(x * scale.length)];
          client.publish(
            prefix,
            JSON.stringify(triggerAttack(instruments.MPC, n, y / 2 + 0.5))
          );
        }}
        onMouseMove={(event) => {
          if (!isActiveUser()) return;
          if (mouseDown) {
            const x =
              (event.clientX - event.target.getBoundingClientRect().left) /
              event.target.offsetWidth;
            const y =
              1 -
              (event.clientY - event.target.getBoundingClientRect().top) /
                event.target.offsetHeight;
            client.publish(
              prefix,
              JSON.stringify(
                triggerAttack(
                  instruments.MPC,
                  scale[Math.floor(x * scale.length)],
                  y / 2 + 0.5
                )
              )
            );
          }
        }}
        onMouseUp={(event) => {
          if (!isActiveUser()) return;
          setMouseDown(false);
          client.publish(
            prefix,
            JSON.stringify(triggerRelease(instruments.MPC))
          );
        }}
      ></Input>
    </Wrapper>
  );
};
