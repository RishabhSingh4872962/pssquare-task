import { Colors, Spacing } from "@/constants/theme";
import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type FloatingLabelInputProps = {
  label: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address";
};

export default function FloatingLabelInput({
  label,
  value = "",
  onChangeText,
  secureTextEntry,
  keyboardType = "default",
}: FloatingLabelInputProps) {
  const [focused, setFocused] = useState(false);

  // 0 = placeholder position
  // 1 = floating label position
  const progress = useSharedValue(0);

  useEffect(() => {
    if (focused || value.length > 0) {
      progress.value = withTiming(1, { duration: 200 });
    } else {
      progress.value = withTiming(0, { duration: 200 });
    }
  }, [focused, value, progress]);

  const animatedLabelStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(progress.value, [0, 1], [18, 0]),
        },
        {
          scale: interpolate(progress.value, [0, 1], [1, 0.85]),
        },
      ],
      color: interpolateColor(
        progress.value,
        [0, 1],
        [Colors.muted, Colors.primary],
      ),
    };
  });

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.label, animatedLabelStyle]}>
        {label}
      </Animated.Text>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={keyboardType === "email-address" ? "none" : "words"}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: Colors.inputBorder,
          paddingBottom: 5,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.lg,
    position: "relative",
  },
  label: {
    position: "absolute",
    left: 0,
    fontSize: 16,
  },
  input: {
    // borderBottomWidth: 1,
    // borderBottomColor: Colors.inputBorder,
    color: Colors.primary,
    fontSize: 16,
    marginTop: 10,
  },
});
