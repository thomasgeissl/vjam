import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import client from "../mqtt";

import { addMessage } from "../store/reducers/chat";
import store from "../store";

const Container = styled.div`
  width: 100%;
`;
const History = styled.ul`
  height: 100px;
  background-color: lightcoral;
  overflow-y: scroll;
`;
const Intro = styled.section``;
export default ({ prefix }) => {
  const [text, setText] = useState("");
  const messages = useSelector((state) => state.chat.messages);

  const [patched, setPatched] = useState(false);
  useEffect(() => {
    if (!patched) {
      // client.on("connect", function () {
      client.subscribe(prefix, function (err) {
        if (!err) {
          console.log("subscribed");
        }
      });

      client.on("message", function (topic, message) {
        if (topic === prefix) {
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
    <Container>
      <TextField
        value={text}
        onChange={(event) => setText(event.target.value)}
      ></TextField>
      <Button
        onClick={() => {
          client.publish(
            prefix,
            JSON.stringify(addMessage("TODO: name", text))
          );
        }}
      >
        send
      </Button>
      <History>
        {messages.map((message, index) => {
          return (
            <li key={index}>
              {message.sender} > {message.text}
            </li>
          );
        })}
      </History>
    </Container>
  );
};
