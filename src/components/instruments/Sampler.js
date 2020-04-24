import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Synth, Sampler, Reverb, PingPongDelay, Master } from "tone";
import Wrapper from "./Wrapper";

import { triggerAttack, triggerRelease } from "../../store/reducers/band";

import client from "../../mqtt";

import footsteps from "../../assets/samples/footsteps.wav";
import fireworks from "../../assets/samples/fireworks.wav";
import wind from "../../assets/samples/windandchimes.wav";
import bonecrack from "../../assets/samples/bonecrack.wav";

const Input = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`;

function map_range(value, low1, high1, low2, high2) {
  return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
}

const scale = ["C3", "D3", "E3", "F3"];

export default () => {
  const [mounted, setMounted] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);
  const synthRef = useRef(null);
  const band = useSelector((state) => state.band);
  const note = band.padNote;
  const velocity = band.padVelocity;

  const sampler = new Sampler(
    {
      C3: bonecrack,
      D3: wind,
      E3: fireworks,
      F3: footsteps,
    },
    {
      onload: () => {
        sampler.triggerAttack("C3");
      },
    }
  );

  const reverb = new Reverb({ decay: 4 });

  useEffect(() => {
    if (!mounted) {
      sampler.connect(reverb);
      synthRef.current = sampler;
      reverb.connect(Master);
      setMounted(true);
    }
    if (note) {
      // synthRef.current.triggerAttack(note, 0, velocity);
    } else {
      // synthRef.current.triggerRelease();
    }
  });

  return (
    <Wrapper>
      <Input
        // ref={synthRef}
        onMouseDown={(event) => {
          synthRef.current.triggerAttack("C3");
          // setMouseDown(true);
          const x =
            (event.clientX - event.target.getBoundingClientRect().left) /
            event.target.offsetWidth;
          const y =
            1 -
            (event.clientY - event.target.getBoundingClientRect().top) /
              event.target.offsetHeight;
          console.log(y);
          // client.publish(
          //   "redux",
          //   JSON.stringify(
          //     triggerAttack(scale[Math.floor(x * scale.length)], y)
          //   )
          // );
        }}
        onMouseMove={(event) => {
          if (mouseDown) {
            const x =
              (event.clientX - event.target.getBoundingClientRect().left) /
              event.target.offsetWidth;
            const y =
              1 -
              (event.clientY - event.target.getBoundingClientRect().top) /
                event.target.offsetHeight;
            client.publish(
              "redux",
              JSON.stringify(
                triggerAttack(scale[Math.floor(x * scale.length)], y)
              )
            );
          }
          // synthRef.current.triggerAttack(note);
          // console.log("mouseDown", synthA);
        }}
        onMouseUp={(event) => {
          setMouseDown(false);
          client.publish("redux", JSON.stringify(triggerRelease()));
        }}
      ></Input>
    </Wrapper>
  );
};
