import { Colors, Spacing } from "@/constants/theme";
import { Images } from "@/src/assets";
import PrimaryButton from "@/src/components/Button/PrimaryButton";
import { useRouter } from "expo-router";
import { Image, StyleSheet, View } from "react-native";

export default function SplashScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Replace with your logo */}
      <View style={styles.logoContainer}>
        <View style={styles.logoPlaceholder}>
          <Image
            source={Images.signup.applogo}
            style={{ width: 450, height: 550 }}
          />
        </View>
      </View>

      <PrimaryButton
        title="Get Started"
        onPress={() => router.push("/signup")}
        iconName="arrow-forward"
        iconSize={25}
        iconColor="#666668"
        textColor="#666668"
        // paddingHorizontal={24}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "space-between",
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.xxl,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoPlaceholder: {
    width: 200,
    height: 200,
    borderRadius: 24,
    backgroundColor: Colors.surface,
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    color: Colors.muted,
  },
  getStartedBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.primary,
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  getStartedText: {
    color: "#666668",
    fontSize: 16,
    fontWeight: "500",
  },
});
