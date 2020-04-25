import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Juno from "./instruments/Juno";
import Rhodes from "./instruments/Rhodes";
import Sampler from "./instruments/Sampler";

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
      <Chat prefix={`vjam/${id}/chat`}></Chat>
      <Juno prefix={`vjam/${id}`}></Juno>
      <Rhodes prefix={`vjam/${id}`}></Rhodes>
      {/* <Sampler prefix={`vjam/${id}`}></Sampler> */}
    </>
  );
};
