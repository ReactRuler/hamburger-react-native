import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const HamburgerArrow = () => {
  const [isActive, setIsActive] = useState(false);
  const rotationValue = useState(new Animated.Value(0))[0];

  const handlePress = () => {
    if (!isActive) {
      Animated.timing(rotationValue, {
        toValue: 1,
        duration: 250,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => {
        setIsActive(true);
      });
    } else {
      Animated.timing(rotationValue, {
        toValue: 0,
        duration: 250,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => {
        setIsActive(false);
      });
    }
  };

  const rotateInterpolation = rotationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [isActive ? "0deg" : "-180deg", isActive ? "-180deg" : "0deg"],
  });

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Animated.View
        style={[
          styles.iconContainer,
          { transform: [{ rotate: rotateInterpolation }] },
        ]}
      >
        {isActive ? (
          <AntDesign name="arrowright" size={54} color="white" />
        ) : (
          <Ionicons name="md-menu" size={54} color="white" />
        )}
      </Animated.View>
    </TouchableOpacity>
  );
};

const Hamburger = () => {
  return (
    <View style={styles.container}>
      <HamburgerArrow />
    </View>
  );
};

export default Hamburger;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    width: 54,
    height: 54,
    justifyContent: "center",
    alignItems: "center",
  },
});
