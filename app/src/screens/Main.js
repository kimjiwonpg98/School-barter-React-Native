import React, { useContext, useEffect } from "react";
import styled from "styled-components/native";
import { ScrollView, Text } from "react-native";

import { ReadyContext } from "../contexts";

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  margin: 0;
  padding: 0;
`;

const Main = () => {
  const { readyDispatch } = useContext(ReadyContext);

  useEffect(() => {
    readyDispatch.notReady();
  }, []);

  return (
    <Container>
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <Text>메인화면</Text>
      </ScrollView>
    </Container>
  );
};

export default Main;
