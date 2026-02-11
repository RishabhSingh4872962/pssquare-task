import Button from "@/src/components/Button/button";
import { colors } from "@/src/theme/colors";
import { router } from "expo-router";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Log into</Text>
        <Text style={styles.title}>your account</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          placeholder="Email address"
          placeholderTextColor={colors.textSecondary}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={colors.textSecondary}
          secureTextEntry
          style={styles.input}
        />
      </View>

      <Button btnName="SIGN UP" onPress={() => {}} style={styles.button} />

      <Text style={styles.footerText}>
        Don’t have an account?{" "}
        <Text style={styles.link} onPress={() => router.push("/signup")}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 24,
    justifyContent: "space-between",
  },
  title: {
    color: colors.textPrimary,
    fontSize: 28,
    fontWeight: "700",
  },
  form: {
    marginTop: 40,
    gap: 24,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.inputBorder,
    color: colors.textPrimary,
    paddingVertical: 8,
  },
  button: {
    alignSelf: "center",
    width: "70%",
    backgroundColor: "#FFFFFF",
  },
  footerText: {
    textAlign: "center",
    color: colors.textSecondary,
  },
  link: {
    color: colors.textPrimary,
    textDecorationLine: "underline",
  },
});
