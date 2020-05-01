import React from "react";
import styled from "styled-components";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import InputPad from "../2DPad";

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
export default ({ type, user, children, inputPad, prefix }) => {
  const name = useSelector((state) => state.system.name);
  const users = useSelector((state) => state.system.users);
  const instruments = useSelector((state) => state.band.instruments);
  const inst = instruments[type];
  return (
    <Box clone order={inst.user === name ? 1 : type.length}>
      <Grid item xs={12} sm={3}>
        <User>
          {type}: {users.includes(user) ? user : ""}
        </User>
        <Container active={name === inst.user}>
          {inputPad && (
            <InputPad
              type={type}
              active={user === name}
              prefix={prefix}
            ></InputPad>
          )}
          {children}
        </Container>
      </Grid>
    </Box>
  );
};
