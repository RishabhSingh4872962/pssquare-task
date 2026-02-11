import { Colors, Spacing } from "@/constants/theme";
import PrimaryButton from "@/src/components/Button/PrimaryButton";
import FloatingLabelInput from "@/src/components/input/FloatingLabelInput";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface AuthScreenProps {
  isLogin: boolean;
}

const AuthScreen: React.FC<AuthScreenProps> = ({ isLogin }) => {
  const router = useRouter();

  const [form, setForm] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const fields = isLogin
    ? [
        {
          key: "email",
          label: "Email address",
          secure: false,
          keyboard: "email-address",
        },
        { key: "password", label: "Password", secure: true },
      ]
    : [
        { key: "name", label: "Enter your name", secure: false },
        {
          key: "email",
          label: "Email address",
          secure: false,
          keyboard: "email-address",
        },
        { key: "password", label: "Password", secure: true },
        { key: "confirmPassword", label: "Confirm password", secure: true },
      ];

  return (
    <View style={styles.container}>
      {/* Title */}
      <View>
        <Text style={styles.title}>{isLogin ? "Log into" : "Create"}</Text>
        <Text style={styles.title}>your account</Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        {fields.map((f, i) => (
          <FloatingLabelInput
            key={i}
            label={f.label}
            secureTextEntry={f.secure}
            keyboardType={f.keyboard as any}
            value={form[f.key as keyof typeof form]}
            onChangeText={(text) =>
              handleChange(f.key as keyof typeof form, text)
            }
          />
        ))}

        {isLogin && (
          <TouchableOpacity style={styles.forgotBtn}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        )}

        <PrimaryButton
          title={isLogin ? "LOGIN" : "SIGN UP"}
          onPress={() => router.push("/(tabs)")}
          fontSize={14}
          fontWeight="700"
          width={"40%"}
        />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {isLogin ? "Do not have an account? " : "Already have account? "}
        </Text>
        <TouchableOpacity
          onPress={() => router.push(isLogin ? "/signup" : "/login")}
        >
          <Text style={styles.footerLink}>
            {isLogin ? "Sign Up" : "Log In"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AuthScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.xxl,
    justifyContent: "space-between",
    paddingBottom: Spacing.xl,
  },
  title: {
    color: Colors.primary,
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 38,
  },
  form: { gap: Spacing.lg },
  inputGroup: { gap: Spacing.xs },
  label: { color: Colors.muted, fontSize: 14 },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.inputBorder,
    color: Colors.primary,
    fontSize: 16,
    paddingVertical: 12,
  },
  forgotBtn: { alignSelf: "flex-end", marginTop: Spacing.xs },
  forgotText: { color: Colors.muted, fontSize: 13 },
  signUpBtn: {
    backgroundColor: Colors.primary,
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: 48,
    marginTop: Spacing.md,
  },
  signUpBtnText: {
    color: Colors.primaryForeground,
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 1,
  },
  footer: { flexDirection: "row", justifyContent: "center" },
  footerText: { color: Colors.muted, fontSize: 14 },
  footerLink: {
    color: Colors.primary,
    fontSize: 14,
    textDecorationLine: "underline",
  },
});
