import React, { useContext, useEffect } from "react";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

import { ReadyContext } from "../../contexts";

const Container = styled.TouchableOpacity`
  align-items: center;
  padding: 10px;
`;

const AlertContainer = ({ navigation }) => {
  const _handleAlertListPage = () => {
    navigation.navigate("Alert");
  };

  return (
    <Container onPress={_handleAlertListPage}>
      <MaterialIcons name="notifications-none" size={32} color="black" />
    </Container>
  );
};

export default AlertContainer;
