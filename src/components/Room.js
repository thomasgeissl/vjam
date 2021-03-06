import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Juno from "./instruments/Juno";
import Rhodes from "./instruments/Rhodes";
import MPC from "./instruments/MPC";
import Sampler from "./instruments/Sampler";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import { setUsers, addUser, setName } from "../store/reducers/system";

import UserList from "./UserList";
import Chat from "./Chat";
import InstrumentChooser from "./InstrumentChooser";

import store from "../store";
import { instruments } from "../store/reducers/band";
import client from "../mqtt";

import steeldrum_C4 from "../assets/samples/Roland-GR-1-Steel-Drum-C4.wav";
const celloSamples = {
  C4: steeldrum_C4,
};

const Intro = styled.div`
  margin-top: 128px;
`;
export default () => {
  const { id } = useParams();
  const [requestedName, setRequestedName] = useState("");
  const name = useSelector((state) => state.system.name);
  const dispatch = useDispatch();
  useEffect(() => {
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

    client.publish(
      `vjam/${id}/users/get`,
      JSON.stringify({ id: client.options.clientId })
    );
  }, [id]);
  return (
    <>
      {name === "" && (
        <Intro>
          <Grid container>
            <Grid item xs={2} sm={3}></Grid>
            <Grid item xs={8} sm={6}>
              Please let the others know your name. If it is not yet taken, then
              you will automatically enter the jam session. Submit by pressing
              return.
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
              <UserList prefix={`vjam/${id}`}></UserList>
            </Grid>
            <Grid item xs={12}>
              <Chat prefix={`vjam/${id}`}></Chat>
            </Grid>
          </Grid>

          <InstrumentChooser prefix={`vjam/${id}`}></InstrumentChooser>
          <Grid container spacing={3} justify="flex-start">
            <Juno type={instruments.JUNO} prefix={`vjam/${id}`}></Juno>
            <Rhodes type={instruments.RHODES} prefix={`vjam/${id}`}></Rhodes>
            <MPC type={instruments.MPC} prefix={`vjam/${id}`}></MPC>
            <Sampler
              type={instruments.STEELDRUM}
              samples={celloSamples}
              prefix={`vjam/${id}`}
            ></Sampler>
          </Grid>
        </>
      )}
    </>
  );
};
