import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Tone from "tone";
import styled from "styled-components";

const Container = styled.div`
  max-width: 768px;
  margin: auto;
  margin-top: 100px;
`;
const Intro = styled.section``;
const RoomChooser = styled.section`
  p {
    margin-top: 24px;
    margin-bottom: 24px;
  }
`;
const Door = styled.div`
  margin-top: 92px;
  text-align: center;
`;
const generateId = (length) => {
  var result = "";
  var characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
export default () => {
  const [room, setRoom] = useState(generateId(4));
  const history = useHistory();
  return (
    <Container>
      <Intro>
        Welcome to vjam,<br></br>a virtual jam session for everyone.
      </Intro>
      <RoomChooser>
        <p>
          Please enter a valid room id provided by your jam session partners.
          You can also open a new one by using any random id, which is hopefully
          not yet taken - good luck.
        </p>
        <Door>
          <TextField
            value={room}
            onChange={(event) => setRoom(event.target.value)}
          ></TextField>
          <Button
            onClick={() => {
              if (Tone.context.state !== "running") {
                Tone.context.resume();
              }
              history.push(`rooms/${room}`);
            }}
          >
            enter
          </Button>
        </Door>
      </RoomChooser>
    </Container>
  );
};
