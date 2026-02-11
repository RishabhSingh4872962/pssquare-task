import Button from "@/src/components/Button/button";
import { colors } from "@/src/theme/colors";
import { router } from "expo-router";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function SignUp() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Create</Text>
        <Text style={styles.title}>your account</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          placeholder="Enter your name"
          placeholderTextColor={colors.textSecondary}
          style={styles.input}
        />
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
        <TextInput
          placeholder="Confirm password"
          placeholderTextColor={colors.textSecondary}
          secureTextEntry
          style={styles.input}
        />
      </View>

      <Button btnName="SIGN UP" onPress={() => {}} style={styles.button} />

      <Text style={styles.footerText}>
        Already have account?{" "}
        <Text style={styles.link} onPress={() => router.replace("/login")}>
          Log In
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
    marginTop: 32,
    gap: 20,
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
