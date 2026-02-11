import { Images } from "@/src/assets";
import Button from "@/src/components/Button/button";
import { colors } from "@/src/theme/colors";
import { router } from "expo-router";
import { Image, StyleSheet, View } from "react-native";
import ArrowRight from "react-native-vector-icons/FontAwesome6";

export default function GetStarted() {
  return (
    <View style={styles.container}>
      <Image
        source={Images.signup.applogo}
        style={styles.logo}
        resizeMode="contain"
      />

      <Button
        btnName="Get Started"
        onPress={() => router.push("/login")}
        style={styles.button}
        icon={
          <ArrowRight
            name="arrow-right-long"
            size={18}
            color={colors.buttonTextDark}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 60,
  },
  logo: {
    width: 180,
    height: 180,
    marginTop: 80,
  },
  button: {
    width: "85%",
    backgroundColor: "#FFFFFF",
  },
});
