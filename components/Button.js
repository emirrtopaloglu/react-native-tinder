import { TouchableOpacity, StyleSheet, Text } from "react-native";

const Button = (props) => {
  const styles = StyleSheet.create({
    button: {
      height: 45,
      backgroundColor: "#fff",
      borderWidth: 1,
      borderColor: "#fff",
      borderRadius: 8,
      marginHorizontal: 20,
      lineHeight: 45,
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
    },
    label: {
      color: "#fd5564",
      fontWeight: "600",
      fontSize: 16,
    },
  });

  return (
    <TouchableOpacity {...props} style={styles.button} activeOpacity={0.8}>
      <Text style={styles.label}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
