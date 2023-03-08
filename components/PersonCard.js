import { Image, Text } from "react-native";

const PersonCard = (props) => {
  return (
    <>
      <Image
        style={{
          flex: 0.85,
          borderRadius: 4,
          borderWidth: 2,
          borderColor: "#E8E8E8",
          justifyContent: "center",
          backgroundColor: "#fff",
          borderRadius: 8,
        }}
        resizeMode="cover"
        source={{
          uri: props.image,
        }}
      />
    </>
  );
};

export default PersonCard;
