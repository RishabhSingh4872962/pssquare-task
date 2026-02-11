import React from "react";
import { StyleSheet, View } from "react-native";
import RadioBtn from "../Button/RadioBtn";

interface PaginationProps {
  color: string;
  bottom?: number;
  top?: number;
}

const Pagination: React.FC<PaginationProps> = ({ color, bottom, top }) => {
  return (
    <View
      style={[
        styles.dotsContainer,
        {
          bottom,
          top,
        },
      ]}
    >
      <RadioBtn color={color} />

      <View style={[styles.dot, { backgroundColor: color }]} />
      <View style={[styles.dot, { backgroundColor: color }]} />
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  dotsContainer: {
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,0.4)",
  },

  dotActive: {
    backgroundColor: "#FFFFFF",
  },
});
