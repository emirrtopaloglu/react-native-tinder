import { Text, SafeAreaView, TextInput, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Input from "../components/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LinearGradient
      colors={["#fd5564", "#ef4a75"]}
      style={{ flex: 1, justifyContent: "flex-end" }}
    >
      <SafeAreaView>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 24,
            fontWeight: "700",
            marginBottom: 20,
          }}
        >
          Login
        </Text>
        <Input
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="rgba(255, 255, 255, 0.75)"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <Input
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor="rgba(255, 255, 255, 0.75)"
          autoCapitalize="none"
          secureTextEntry
          textContentType="password"
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    height: 45,
    backgroundColor: "transparent",
    marginHorizontal: 20,
    padding: 15,
    color: "#fff",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 20,
  },
});
