import { Text, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import useAuth from "../hooks/useAuth";

const Login = ({ navigation }) => {
  const { user, signInWithPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await signInWithPassword(email, password);

    if (response.user) {
      navigation.navigate("Home");
    }
  };

  useEffect(() => {
    signInWithPassword("emir@test.com", "123123123").then((response) => {
      if (response.user) {
        navigation.navigate("Home");
      }
    });
  }, []);

  return (
    <LinearGradient
      colors={["#fd5564", "#ef4a75"]}
      style={{ flex: 1, justifyContent: "flex-end", paddingBottom: "25%" }}
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
        <Button label="Login" onPress={handleLogin} />
        <Text style={{ color: "white", textAlign: "center", marginTop: 20 }}>
          Don't have an account? Sign up
        </Text>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Login;
