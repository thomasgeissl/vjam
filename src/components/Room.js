import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Juno from "./instruments/Juno";
import Rhodes from "./instruments/Rhodes";
import MPC from "./instruments/MPC";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import { setUsers, addUser, setName } from "../store/reducers/system";

import UserList from "./UserList";
import Chat from "./Chat";
import InstrumentChooser from "./InstrumentChooser";

import store from "../store";
import client from "../mqtt";
import { types } from "../store/reducers/chat";

const Intro = styled.div`
  margin-top: 128px;
`;
export default () => {
  const { id } = useParams();
  const [patched, setPatched] = useState(false);
  const [requestedName, setRequestedName] = useState("");
  const name = useSelector((state) => state.system.name);
  const dispatch = useDispatch();
  useEffect(() => {
    if (id && !patched) {
      client.subscribe(`vjam/${id}`, function (err) {
        if (!err) {
          console.log(`subscribed to vjam/${id}`);
        }
      });
      client.subscribe(`vjam/${id}/users/#`, function (err) {
        if (!err) {
          console.log(`subscribed to vjam/${id}/users/#`);
        }
      });

      client.on("message", function (topic, message) {
        if (topic === `vjam/${id}`) {
          let action;
          try {
            action = JSON.parse(message.toString());
            store.dispatch(action);
          } catch (e) {}
        }
        if (topic === `vjam/${id}/users/get`) {
          const data = JSON.parse(message.toString());
          if (data.id !== client.options.clientId) {
            client.publish(
              `vjam/${id}/users/set`,
              JSON.stringify(store.getState().system.users)
            );
          }
        }
        if (topic === `vjam/${id}/users/set`) {
          const data = JSON.parse(message.toString());
          store.dispatch(setUsers(data));
        }
      });

      setPatched(true);
      client.publish(
        `vjam/${id}/users/get`,
        JSON.stringify({ id: client.options.clientId })
      );
    }
  });
  return (
    <>
      {name === "" && (
        <Intro>
          <Grid container>
            <Grid item xs={2} sm={3}></Grid>
            <Grid item xs={8} sm={6}>
              Please let the others know your name. If it is not yet taken, then
              you will automatically enter the jam session. Submit by pressing
              return. There will be a button later, do not worry.
            </Grid>
            <Grid item xs={2} sm={3}></Grid>

            <Grid item xs={2} sm={3}></Grid>
            <Grid item xs={8} sm={6}>
              <TextField
                fullWidth
                value={requestedName}
                onChange={(event) => {
                  setRequestedName(event.target.value);
                }}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    client.publish(
                      `vjam/${id}`,
                      JSON.stringify(addUser(requestedName))
                    );
                    dispatch(setName(requestedName));
                  }
                }}
              ></TextField>
            </Grid>
          </Grid>
        </Intro>
      )}

      {name !== "" && (
        <>
          <Grid container>
            <Grid item xs={12}>
              <UserList></UserList>
            </Grid>
            <Grid item xs={12}>
              <Chat prefix={`vjam/${id}`}></Chat>
            </Grid>
          </Grid>

          <h2>Instruments</h2>
          <p>
            Instrumentes are controlled via the 2d pad, where the x axis is
            mapped to the pitch and the y axis to the velocity. More instruments
            and controllable effect parameters, as well as better interactions,
            will hopefully follow soon.
          </p>
          <InstrumentChooser prefix={`vjam/${id}`}></InstrumentChooser>
          <Grid container spacing={3}>
            <Juno prefix={`vjam/${id}`}></Juno>
            <Rhodes prefix={`vjam/${id}`}></Rhodes>
            <MPC prefix={`vjam/${id}`}></MPC>
            {/* <Sampler prefix={`vjam/${id}`}></Sampler> */}
          </Grid>
        </>
      )}
    </>
  );
};
