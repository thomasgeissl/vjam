import React, { useState } from "react";
import { useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import client from "../mqtt";

import { addMessage } from "../store/reducers/chat";

const Container = styled.div`
  background-color: lightcoral;
  padding: 10px;
`;
const History = styled.ul`
  height: 50px;
  overflow-y: scroll;
`;
const Name = styled.span`
  font-weight: bold;
`;
export default ({ prefix }) => {
  const [text, setText] = useState("");
  const messages = useSelector((state) => state.chat.messages);
  const name = useSelector((state) => state.system.name);

  return (
    <Container>
      <TextField
        fullWidth
        value={text}
        placeholder={"something nice you wanna say to your friends"}
        onChange={(event) => setText(event.target.value)}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            client.publish(prefix, JSON.stringify(addMessage(name, text)));
            setText("");
          }
        }}
      ></TextField>
      <History>
        {messages.map((message, index) => {
          return (
            <li key={index}>
              <Name>{message.sender}</Name> > {message.text}
            </li>
          );
        })}
      </History>
    </Container>
  );
};
