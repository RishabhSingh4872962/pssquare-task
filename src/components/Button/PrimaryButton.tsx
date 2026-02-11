import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import {
  DimensionValue,
  GestureResponderEvent,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

type PrimaryButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;

  // layout
  width?: DimensionValue;
  marginHorizontal?: number;
  marginTop?: number;
  marginBottom?: number;
  paddingHorizontal?: number;

  // text
  fontSize?: number;
  fontWeight?: TextStyle["fontWeight"];
  letterSpacing?: number;
  textColor?: string;

  // icon
  iconName?: keyof typeof Ionicons.glyphMap;
  iconSize?: number;
  iconColor?: string;
  iconPosition?: "left" | "right";

  style?: ViewStyle;
  textStyle?: TextStyle;
};

export default function PrimaryButton({
  title,
  onPress,

  width = "90%",
  marginHorizontal,
  marginTop,
  marginBottom,
  paddingHorizontal = 24,

  fontSize = 16,
  fontWeight = "600",
  letterSpacing,
  textColor = Colors.primaryForeground,

  iconName,
  iconSize = 22,
  iconColor = textColor,
  iconPosition = "right",
  style,
  textStyle,
}: PrimaryButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.base,
        {
          marginHorizontal,
          marginTop,
          marginBottom,
          paddingHorizontal,
          width,
        },
        style,
      ]}
    >
      <View style={styles.content}>
        {iconName && iconPosition === "left" && (
          <Ionicons
            name={iconName}
            size={iconSize}
            color={iconColor}
            style={{ marginRight: 8 }}
          />
        )}

        <Text
          style={[
            styles.text,
            {
              fontSize,
              fontWeight,
              letterSpacing,
              color: textColor,
            },
            textStyle,
          ]}
        >
          {title}
        </Text>

        {iconName && iconPosition === "right" && (
          <Ionicons
            name={iconName}
            size={iconSize}
            color={iconColor}
            style={{ marginLeft: 150 }}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  base: {
    backgroundColor: Colors.primary,
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    gap: 8,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "600",
  },
});
