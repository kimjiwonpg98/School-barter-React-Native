import React, { useContext, useEffect } from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

import { ReadyContext } from "../../contexts";

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  margin: 0;
  padding: 0;
`;

const Alert = () => {
  const { readyDispatch } = useContext(ReadyContext);

  useEffect(() => {
    readyDispatch.notReady();
  }, []);

  return (
    <Container>
      <Text>알림목록</Text>
    </Container>
  );
};

export default Alert;
