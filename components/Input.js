import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = (props) => {
  const [blur, setBlur] = useState(false);

  const styles = StyleSheet.create({
    input: {
      height: 45,
      backgroundColor: blur ? "rgba(255, 255, 255, 0.1)" : "transparent",
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

  return (
    <TextInput
      {...props}
      style={styles.input}
      onBlur={() => setBlur(false)}
      onFocus={() => setBlur(true)}
    />
  );
};

export default Input;
