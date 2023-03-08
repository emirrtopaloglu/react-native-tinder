import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import Button from "../components/Button";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const { logout } = useAuth();

  return (
    <SafeAreaView>
      <Text>Welcome to React Native Tinder</Text>
      <Button label="Sign Out" onPress={logout} />
    </SafeAreaView>
  );
};

export default Home;
