import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const BackButton = () => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.back()}
      style={styles.backButton}
      activeOpacity={0.8}
    >
      <Ionicons name="chevron-back" size={20} color="#FFFFFF" />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backButton: {
    width: 32,
    height: 32,
    borderRadius: 15,
    backgroundColor: "#141416",

    alignItems: "center",
    justifyContent: "center",

    // iOS shadow
    shadowColor: "#FFFFFF",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.16, // ≈ #FFFFFF29
    shadowRadius: 2,

    // Android shadow
    elevation: 2,
  },
});
