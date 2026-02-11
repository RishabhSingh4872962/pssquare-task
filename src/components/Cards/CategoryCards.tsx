import { Images } from "@/src/assets";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const CARD_WIDTH = 170;
const CARD_HEIGHT = 240;

export default function CategoryCards() {
  return (
    <View style={styles.container}>
      {/* LEFT CARD */}
      <View style={styles.card}>
        <Image
          source={Images.topcollection.topcollection3}
          style={styles.leftImage}
          resizeMode="contain"
        />

        <View style={styles.textWrapper}>
          <Text style={styles.categoryRight}>T-Shirts</Text>
          <Text style={styles.titleRight}>
            The{"\n"}Office{"\n"}Life
          </Text>
        </View>
      </View>

      {/* RIGHT CARD */}
      <View style={styles.card}>
        <Text style={styles.category}>Dresses</Text>
        <Text style={styles.title}>Elegant{"\n"}Design</Text>

        <Image
          source={Images.topcollection.topcollection4} // your right image
          style={styles.rightImage}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 16,
    gap: 16,
  },

  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: "#1E2430", // dark navy tone like screenshot
    borderRadius: 24,
    padding: 20,
    overflow: "hidden",
    position: "relative",
  },
  textWrapper: {
    flex: 1,
    alignItems: "flex-end", // push block to right
  },
  categoryRight: {
    textAlign: "left",
    color: "#9CA3AF",
    fontSize: 14,
    marginBottom: 12,
  },

  titleRight: {
    color: "white",
    fontSize: 24,
    fontWeight: "500",
    lineHeight: 30,
  },
  category: {
    color: "#9CA3AF",
    fontSize: 14,
    marginBottom: 12,
  },

  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "500",
    lineHeight: 30,
  },

  leftImage: {
    position: "absolute",
    left: -60,
    bottom: 0,
    height: 220,
    width: 180,
  },

  rightImage: {
    position: "absolute",
    right: -60,
    bottom: 0,
    height: 220,
    width: 180,
  },
});
