import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import client from "../mqtt";
import { triggerAttack } from "../store/reducers/band";

const TriggerWrapper = styled(Grid)`
  width: 100%;
  height: 100px;
  div {
    width: 100%;
    height: 100px;
    background-color: lightgreen;
    border: 1px solid black;
  }
`;

const Trigger = ({ clickHandler }) => {
  return (
    <>
      <TriggerWrapper item xs={3} onClick={clickHandler}>
        <div></div>
      </TriggerWrapper>
    </>
  );
};

export default ({ type, triggers, prefix, active }) => {
  return (
    <>
      <Grid container spacing={1}>
        {triggers.map((trigger, index) => {
          return (
            <Trigger
              key={index}
              clickHandler={() => {
                if (!active) return;
                // random velocity for use effect hook to detect change
                client.publish(
                  prefix,
                  JSON.stringify(
                    triggerAttack(type, trigger.pitch, Math.random())
                  )
                );
              }}
            ></Trigger>
          );
        })}
      </Grid>
    </>
  );
};
