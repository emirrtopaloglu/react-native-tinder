import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import Button from "../components/Button";
import useAuth from "../hooks/useAuth";
import PersonCard from "../components/PersonCard";
import Swiper from "react-native-deck-swiper";

const Home = () => {
  const { logout } = useAuth();

  return (
    <View style={{ flex: 1 }}>
      <Swiper
        cards={[
          "https://images.hdqwalls.com/download/beautiful-girl-4k-a2-1080x1920.jpg",
          "https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJlZnxlbnwwfHwwfHw%3D&w=1000&q=80",
          "https://wall2mob.com/cx/m/t2/34328-8.jpg",
          "https://1.bp.blogspot.com/-sV8hBdmxFXg/YCPY4Y0UjfI/AAAAAAAAQzQ/CZedqoYljLsFC1ZysaAa_CO1qlrFm8HJQCLcBGAsYHQ/d/girl-wallpaper-for-mobile-50.jpeg",
        ]}
        renderCard={(card) => {
          return <PersonCard image={card} />;
        }}
        onSwiped={(cardIndex) => {
          console.log(cardIndex);
        }}
        onSwipedAll={() => {
          console.log("onSwipedAll");
        }}
        backgroundColor={"#fff"}
        stackSize={2}
        onSwipedLeft={() => {
          console.log("onSwipedLeft");
        }}
        infinite
        verticalSwipe={false}
        animateOverlayLabelsOpacity
        animateCardOpacity
        swipeBackCard
        overlayLabels={{
          left: {
            title: "DISLIKE",
            style: {
              label: {
                backgroundColor: "#e74c3c",
                borderColor: "#e74c3c",
                color: "#fff",
                borderWidth: 1,
              },
              wrapper: {
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                marginTop: 30,
                marginLeft: -30,
              },
            },
          },
          right: {
            title: "LIKE",
            style: {
              label: {
                backgroundColor: "green",
                borderColor: "green",
                color: "#fff",
                borderWidth: 1,
              },
              wrapper: {
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginTop: 30,
                marginLeft: 30,
              },
            },
          },
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#000",
              fontSize: 24,
              fontWeight: "600",
              marginBottom: "25%",
              justifyContent: "flex-end",
            }}
          >
            Sıla Aydın (26 yaşında) İstanbul
          </Text>
        </View>
      </Swiper>
    </View>
  );
};

export default Home;
