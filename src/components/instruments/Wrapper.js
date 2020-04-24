import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

const Container = styled.div`
  height: 200px;
  width: 100%;
`;
export default ({ children }) => {
  return (
    <Grid item xs={12} sm={3}>
      <Container>{children}</Container>
    </Grid>
  );
};
