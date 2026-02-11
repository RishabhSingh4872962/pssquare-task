import React from "react";
import { StyleSheet, View } from "react-native";

interface RadioBtnProps {
  color: string;
}

const RadioBtn: React.FC<RadioBtnProps> = ({ color }) => {
  console.log(color);
  return (
    <View
      style={[
        styles.radio,
        {
          borderColor: color,
        },
      ]}
    >
      {
        <View
          style={[
            styles.radioInner,
            {
              backgroundColor: color,
            },
          ]}
        />
      }
    </View>
  );
};

export default RadioBtn;

const styles = StyleSheet.create({
  radio: {
    width: 18,
    height: 18,
    borderRadius: 10,
    borderWidth: 1.6,
    // borderColor: "#4F4F4F",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
  },
  // radioActive: { borderColor: "#4F4F4F" },
  radioInner: {
    width: 8,
    height: 8,
    borderRadius: 15,
    // backgroundColor: "#4F4F4F",
  },
});
