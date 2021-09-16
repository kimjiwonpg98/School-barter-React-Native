import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Spinner } from "../components";
import { ProgressContext } from "../contexts";
import MainStack from "./MainStack";

const Navigation = () => {
  const { inProgress } = useContext(ProgressContext);

  return (
    <NavigationContainer>
      <MainStack />
      {inProgress && <Spinner />}
    </NavigationContainer>
    //inporgress 가 초깃값이 false이므로 spinner컴포넌트가 초기에 나타나지 않는다.
  );
};

export default Navigation;
