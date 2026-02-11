import React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewStyle,
} from "react-native";

interface ButtonProps {
  icon?: React.ReactNode;
  btnName: string;
  onPress: () => void;
  height?: number;
  style?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({
  icon,
  btnName,
  onPress,
  height = 48,
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.base,
        {
          backgroundColor: "#FCFCFD",
          height,
          borderRadius: height / 2,
        },
        style,
      ]}
    >
      <Text style={[styles.text, { color: "#666668" }]}>{btnName}</Text>
      {icon && <View style={styles.icon}>{icon}</View>}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },

  text: {
    fontSize: 16,
    fontWeight: "600",
  },

  icon: {
    alignItems: "center",
    justifyContent: "center",
  },
});
