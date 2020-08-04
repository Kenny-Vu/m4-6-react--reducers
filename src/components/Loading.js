import React from "react";
import styled from "styled-components";

import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = () => {
  return (
    <Wrapper>
      <CircularProgress />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  padding-top: 5rem;
`;

export default Loading;
