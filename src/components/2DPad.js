import React, { useState, useEffect, useRef } from "react";
import { useGesture } from "react-use-gesture";
import styled from "styled-components";
import client from "../mqtt";
import { triggerAttack, triggerRelease } from "../store/reducers/band";

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
  const getPosition = (state) => {
    const touch = state.event.touches[0];
    const target = state.event.srcElement;
    if (touch && target) {
      const x =
        (touch.clientX - target.getBoundingClientRect().left) /
        target.offsetWidth;
      const y =
        1 -
        (touch.clientY - target.getBoundingClientRect().top) /
          target.offsetHeight;
      console.log(x, y);
      return { x, y };
    }
  };
  const [mouseDown, setMouseDown] = useState(false);
  const myRef = useRef(null);
  const bind = useGesture(
    {
      onDrag: (state) => {
        if (!active) return;
        state.event.preventDefault();
        const pos = getPosition(state);
        if (pos) {
          const n = scale[Math.floor(pos.x * scale.length)];
          client.publish(
            prefix,
            JSON.stringify(triggerAttack(type, n, pos.y / 2 + 0.5))
          );
        }
      },
      onDragStart: (state) => {
        if (!active) return;
        console.log(state.event);
        state.event.preventDefault();
        const pos = getPosition(state);
        if (pos) {
          const n = scale[Math.floor(pos.x * scale.length)];
          client.publish(
            prefix,
            JSON.stringify(triggerAttack(type, n, pos.y / 2 + 0.5))
          );
        }
      },
      onDragEnd: (state) => {
        if (!active) return;
        state.event.preventDefault();
        client.publish(prefix, JSON.stringify(triggerRelease(type)));
      },
    },
    {
      domTarget: myRef,
      eventOptions: { passive: false },
    }
  );
  React.useEffect(bind, [bind]);

  return (
    <Container
      ref={myRef}
      //   {...bind()}
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
