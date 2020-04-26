import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import client from "../mqtt";

import {
  instruments,
  triggerAttack,
  triggerRelease,
  getNote,
  getVelocity,
  getUser,
} from "../store/reducers/band";

import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: lightskyblue;
`;

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

export default ({ active, type, prefix }) => {
  const [mouseDown, setMouseDown] = useState(false);
  return (
    <Container
      onMouseDown={(event) => {
        if (!active) return;
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
        if (!active) return;
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
        if (!active) return;
        setMouseDown(false);
        client.publish(prefix, JSON.stringify(triggerRelease(type)));
      }}
    ></Container>
  );
};
