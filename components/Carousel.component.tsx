import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");
export default function CarouselComponent() {
  const ref = React.useRef<ICarouselInstance>(null);
  return (
    <View
      style={{
        flex: 1,
        borderWidth: 1,
        borderColor: "purple",
        // height: 800,
      }}
    >
      <Carousel
        ref={ref}
        loop
        width={width}
        height={600}
        autoPlay
        data={[...Array(10).keys()]}
        renderItem={({ index }) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/Screenshot from 2024-08-06 20-15-15.png")}
              // resizeMode="center"
              height={400}
            />
          </View>
        )}
      />
    </View>
  );
}
