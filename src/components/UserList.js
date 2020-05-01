import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import client from "../mqtt";
import { heartBeat } from "../store/reducers/system";
import { setUser, getActiveUsers } from "../store/reducers/band";

const Container = styled.ul`
  background-color: lightpink;
  padding: 10px;
  list-style-type: none;
  li {
    display: inline-block;
    margin-right: 15px;
  }
`;
export default ({ prefix }) => {
  const users = useSelector((state) => state.system.users);
  const name = useSelector((state) => state.system.name);
  const usersWithInstruments = useSelector(getActiveUsers);
  useEffect(() => {
    setInterval(() => {
      client.publish(prefix, JSON.stringify(heartBeat(name)));
    }, 1000);
  }, [prefix, name]);

  // useEffect(() => {
  //   usersWithInstruments.forEach((user) => {
  //     if (!users.includes(user)) {
  //       client.publish(prefix, JSON.stringify(setUser("NONE", user)));
  //     }
  //   });
  // }, [users, usersWithInstruments, prefix]);

  return (
    <Container>
      {users.map((user, index) => {
        return (
          <li key={index}>
            {user !== name && <span>{user}</span>}
            {user === name && <b>{user}</b>}
          </li>
        );
      })}
    </Container>
  );
};
