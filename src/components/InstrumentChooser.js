import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";

import client from "../mqtt";
import { setUser, getChoosenInstrument } from "../store/reducers/band";

import { instruments as types } from "../store/reducers/band";

const Container = styled.div`
  width: 100%;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export default ({ prefix }) => {
  const name = useSelector((state) => state.system.name);
  const instruments = useSelector((state) => state.band.instruments);
  const choosenInstrument = useSelector(getChoosenInstrument(name));
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel>Pick an instrument</InputLabel>
            <Select
              value={choosenInstrument}
              onChange={(event) => {
                let taken = false;
                Object.keys(instruments).forEach((key) => {
                  if (instruments[key].user !== "") {
                    taken = true;
                  }
                });
                if (true) {
                  client.publish(
                    prefix,
                    JSON.stringify(setUser(event.target.value, name))
                  );
                }
              }}
              fullWidth
            >
              <MenuItem value={"NONE"}>none</MenuItem>;
              {Object.keys(types).map((key, index) => {
                return (
                  <MenuItem
                    // disabled={instruments[key].user !== ""}
                    value={types[key]}
                    key={index}
                  >
                    {types[key]}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
};
