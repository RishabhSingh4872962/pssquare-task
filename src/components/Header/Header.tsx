import { Colors, Spacing } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


interface HeaderProps {
  name: string;
  size?: number;
  iconSide?: "down" | "forward";
  onPress: () => void;
}
const Header: React.FC<HeaderProps> = ({
  name,
  size = 10,
  iconSide = "forward",
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.reviewHeader}>
        <Text style={styles.reviewTitle}>{name}</Text>

        <Ionicons
          name={`chevron-${iconSide}`}
          size={20}
          color={Colors.primary}
        />
      </View>
      <View style={styles.divider} />
    </TouchableOpacity>
  );
};

export default Header;

const styles = StyleSheet.create({
  reviewHeader: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  reviewTitle: {
    color: Colors.primary,
    fontSize: 20,
    fontWeight: "700",
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: Spacing.md,
  },
});
