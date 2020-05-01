import React, { useRef } from "react";
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
  const getPosition = ({ event }) => {
    if (event.touches) {
      const touch = event.touches[0];
      const target = event.srcElement;
      if (touch && target) {
        const x =
          (touch.clientX - target.getBoundingClientRect().left) /
          target.offsetWidth;
        const y =
          1 -
          (touch.clientY - target.getBoundingClientRect().top) /
            target.offsetHeight;
        return { x, y };
      }
    } else {
      const target = event.srcElement;
      if (target) {
        const x =
          (event.clientX - target.getBoundingClientRect().left) /
          target.offsetWidth;
        const y =
          1 -
          (event.clientY - target.getBoundingClientRect().top) /
            target.offsetHeight;
        return { x, y };
      }
    }
  };
  const myRef = useRef(null);
  const bind = useGesture(
    {
      onDrag: (state) => {
        if (!active) return;
        state.event.preventDefault();
        const pos = getPosition(state);
        if (pos) {
          const n = scale[Math.floor(pos.x * scale.length)];
          client.publish(prefix, JSON.stringify(triggerAttack(type, n, pos.y)));
        }
      },
      onDragStart: (state) => {
        if (!active) return;
        state.event.preventDefault();
        const pos = getPosition(state);
        if (pos) {
          const n = scale[Math.floor(pos.x * scale.length)];
          client.publish(prefix, JSON.stringify(triggerAttack(type, n, pos.y)));
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

  return <Container ref={myRef}></Container>;
};
