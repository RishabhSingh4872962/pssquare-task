import { Colors, Spacing } from "@/constants/theme";
import PrimaryButton from "@/src/components/Button/PrimaryButton";
import CartHeader from "@/src/components/Header/CartHeader";
import FloatingLabelInput from "@/src/components/input/FloatingLabelInput";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const shippingMethods = [
  {
    label: "Free",
    desc: "Delivery to home",
    sub: "Delivery from 3 to 7 business days",
    price: null,
  },
  {
    label: "$9.90",
    desc: "Delivery to home",
    sub: "Delivery from 4 to 6 business days",
    price: "$9.90",
  },
  {
    label: "$9.90",
    desc: "Fast Delivery",
    sub: "Delivery from 2 to 3 business days",
    price: "$9.90",
  },
];

const fields = [
  "First name *",
  "Last name *",
  "Country *",
  "Street name *",
  "City *",
  "State / Province",
  "Zip-code *",
  "Phone number *",
];

export default function ShippingScreen() {
  const router = useRouter();
  const [form, setForm] = useState<Record<string, string>>({});
  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={80}
      >
        <View style={styles.container}>
          <CartHeader isShipping />

          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.stepLabel}>STEP 1</Text>
            <Text style={styles.stepTitle}>Shipping</Text>

            {fields.map((f, i) => {
              const key = f.replace(/\s|\*|\//g, "").toLowerCase();

              return (
                <FloatingLabelInput
                  key={i}
                  label={f}
                  value={form[key] || ""}
                  onChangeText={(text) => handleChange(key, text)}
                  keyboardType={
                    f.toLowerCase().includes("phone")
                      ? "default"
                      : f.toLowerCase().includes("zip")
                        ? "default"
                        : "default"
                  }
                />
              );
            })}

            <Text style={styles.sectionTitle}>Shipping method</Text>
            <View>
              {shippingMethods.map((m, i) => {
                const selected = i === 0;

                return (
                  <TouchableOpacity
                    key={i}
                    style={[
                      styles.shippingOption,
                      selected && styles.shippingOptionActive,
                    ]}
                  >
                    <View
                      style={[styles.radio, selected && styles.radioActive]}
                    >
                      {selected && <View style={styles.radioInner} />}
                    </View>

                    <View style={styles.shippingContent}>
                      <View style={styles.shippingTopRow}>
                        <Text
                          style={[
                            styles.shippingLabel,
                            selected && { color: Colors.accent },
                          ]}
                        >
                          {m.label}
                        </Text>

                        <Text style={styles.shippingDesc}>{m.desc}</Text>
                      </View>

                      <Text style={styles.shippingSub}>{m.sub}</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>

            <Text style={styles.sectionTitle}>Coupon Code</Text>
            <View style={styles.couponRow}>
              <TextInput
                style={styles.couponInput}
                placeholder="Have a code? type it here..."
                placeholderTextColor={Colors.muted}
              />
              <TouchableOpacity>
                <Text style={styles.validateBtn}>Validate</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.sectionTitle}>Billing Address</Text>
            <TouchableOpacity style={styles.checkboxRow}>
              <View style={styles.checkbox} />
              <Text style={styles.checkboxLabel}>
                Copy address data from shipping
              </Text>
            </TouchableOpacity>

            <View style={{ height: 100 }} />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
      <PrimaryButton
        title="Continue to payment"
        onPress={() => router.push("/checkout/payment")}
        marginTop={Spacing.sm}
        marginBottom={Spacing.xl}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141416",
    paddingHorizontal: Spacing.md,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: Spacing.md,
  },
  headerTitle: { color: Colors.primary, fontSize: 18, fontWeight: "700" },
  progress: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: Spacing.lg,
    alignSelf: "center",
  },
  progressDots: { flexDirection: "row" },
  dot: {
    width: 3,
    height: 3,
    borderRadius: 5,
    backgroundColor: Colors.primary,
    margin: 8,
  },
  dotActive: { backgroundColor: Colors.accent },
  stepLabel: {
    color: Colors.muted,
    fontSize: 12,
    letterSpacing: 1,
    margin: 10,
  },
  stepTitle: {
    color: Colors.primary,
    fontSize: 24,
    fontWeight: "700",
    marginBottom: Spacing.lg,
  },
  inputGroup: { marginBottom: Spacing.md },
  inputLabel: { color: Colors.muted, fontSize: 13, marginBottom: 4 },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.inputBorder,
    color: Colors.primary,
    fontSize: 15,
    paddingVertical: 10,
  },
  sectionTitle: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: "700",
    marginTop: Spacing.lg,
    marginBottom: Spacing.md,
  },
  shippingOption: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    gap: 14,
    padding: 16,
    borderRadius: 12,
    marginBottom: 14,
    alignItems: "flex-start",
  },

  shippingOptionActive: {
    backgroundColor: Colors.surface, // dark card background
  },
  shippingContent: {
    flex: 1,
  },

  shippingTopRow: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2, // keeps optical alignment with text
  },

  radioActive: {
    borderColor: Colors.accent,
  },

  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.accent,
  },
  // radio: {
  //   width: 20,
  //   height: 20,
  //   borderRadius: 10,
  //   borderWidth: 2,
  //   borderColor: Colors.primary,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginTop: 2,
  // },
  // radioActive: { borderColor: Colors.accent },
  // radioInner: {
  //   width: 10,
  //   height: 10,
  //   borderRadius: 5,
  //   backgroundColor: Colors.accent,
  // },
  shippingLabel: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: "600",
    margin: 2,
  },
  shippingDesc: { color: Colors.primary, fontSize: 14, margin: 2 },
  shippingSub: { color: Colors.muted, fontSize: 12, marginTop: 2 },
  couponRow: {
    flexDirection: "row",
    backgroundColor: Colors.surface,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: "center",
  },
  couponInput: { flex: 1, color: Colors.primary, fontSize: 14 },
  validateBtn: { color: Colors.accent, fontSize: 14, fontWeight: "600" },
  checkboxRow: { flexDirection: "row", alignItems: "center", gap: 10 },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: Colors.primary,
  },
  checkboxLabel: { color: Colors.muted, fontSize: 14 },
  continueBtn: {
    backgroundColor: Colors.primary,
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: Spacing.xl,
    marginTop: Spacing.sm,
  },
  continueText: {
    color: Colors.primaryForeground,
    fontSize: 16,
    fontWeight: "600",
  },
});
