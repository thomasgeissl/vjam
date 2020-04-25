import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 200px;
  width: 100%;
  ${({ active }) =>
    active &&
    `
    border: solid darkgreen 3px;
  `}
`;
const User = styled.div`
  width: 100%;
  background-color: lightyellow;
`;
export default ({ type, user, children }) => {
  const name = useSelector((state) => state.system.name);
  const instruments = useSelector((state) => state.band.instruments);
  const inst = instruments[type];
  return (
    <Grid item xs={12} sm={3}>
      <User>
        {type}: {user}
      </User>
      <Container active={name == inst.user}>{children}</Container>
    </Grid>
  );
};
