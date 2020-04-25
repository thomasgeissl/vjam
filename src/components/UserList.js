import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.ul`
  background-color: lightpink;
  padding: 25px;
  list-style-type: none;
  li {
    display: inline-block;
    margin-right: 15px;
  }
`;
export default () => {
  const users = useSelector((state) => state.system.users);
  const name = useSelector((state) => state.system.name);

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
