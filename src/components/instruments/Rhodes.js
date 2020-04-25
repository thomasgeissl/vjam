import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Synth, Freeverb, PingPongDelay, MetalSynth, Master } from "tone";
import Wrapper from "./Wrapper";
import client from "../../mqtt";

import {
  instruments,
  triggerAttack,
  triggerRelease,
  getNote,
  getVelocity,
  getUser,
} from "../../store/reducers/band";

import styled from "styled-components";

const Input = styled.div`
  width: 100%;
  height: 100%;
  background-color: lightgreen;
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
    <Wrapper type={type} user={user}>
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
            JSON.stringify(triggerAttack(type, n, y / 2 + 0.5))
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
                  type,
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
          client.publish(prefix, JSON.stringify(triggerRelease(type)));
        }}
      ></Input>
    </Wrapper>
  );
};
