import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Juno from "./instruments/Juno";
import Rhodes from "./instruments/Rhodes";
import Sampler from "./instruments/Sampler";

import Grid from "@material-ui/core/Grid";

import Chat from "./Chat";

import store from "../store";
import client from "../mqtt";
export default () => {
  const { id } = useParams();
  const [patched, setPatched] = useState(false);
  useEffect(() => {
    if (id && !patched) {
      // client.on("connect", function () {
      client.subscribe(`vjam/${id}`, function (err) {
        if (!err) {
          console.log("subscribed");
        }
      });
      // });

      client.on("message", function (topic, message) {
        if (topic === `vjam/${id}`) {
          let action;
          try {
            action = JSON.parse(message.toString());
            store.dispatch(action);
          } catch (e) {}
        }
      });

      setPatched(true);
    }
  });
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Chat prefix={`vjam/${id}/chat`}></Chat>
        </Grid>
      </Grid>

      <h2>Instruments</h2>
      <Grid container spacing={3}>
        <Juno prefix={`vjam/${id}`}></Juno>
        <Rhodes prefix={`vjam/${id}`}></Rhodes>
        {/* <Sampler prefix={`vjam/${id}`}></Sampler> */}
      </Grid>
    </>
  );
};
