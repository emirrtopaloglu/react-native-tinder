import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { auth } from "./config/firebase";
import Home from "./screens/Home";
import Login from "./screens/Login";

const App = () => {
  const Stack = createNativeStackNavigator();
  const [user, setUser] = useState(null);

  auth.onAuthStateChanged((user) => {
    console.log("auth state changed", user);
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
