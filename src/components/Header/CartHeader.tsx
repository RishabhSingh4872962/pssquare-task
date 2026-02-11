import { Colors, Spacing } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CartProps {
  isShipping?: boolean;
  isPayment?: boolean;
  isComplete?: boolean;
}
const CartHeader: React.FC<CartProps> = ({
  isShipping,
  isPayment,
  isComplete,
}) => {
  const router = useRouter();

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
          activeOpacity={0.8}
        >
          <Ionicons name="chevron-back" size={20} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Check out</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.progress}>
        <Ionicons
          name="location"
          size={20}
          color={isShipping ? Colors.primary : Colors.muted}
          style={{ padding: 5 }}
        />
        <View style={styles.progressDots}>
          {[1, 2, 3, 4, 5].map((d) => (
            <View key={d} style={[styles.dot]} />
          ))}
        </View>
        <Ionicons name="list" />
        <Ionicons
          name="card"
          size={20}
          color={isShipping && isPayment ? Colors.primary : Colors.muted}
          style={{ padding: 5 }}
        />
        <View style={styles.progressDots}>
          {[1, 2, 3, 4, 5].map((d) => (
            <View key={d} style={styles.dot} />
          ))}
        </View>
        <Ionicons
          name="checkmark-circle"
          size={20}
          color={
            isShipping && isPayment && isComplete
              ? Colors.primary
              : Colors.muted
          }
          style={{ padding: 5 }}
        />
      </View>
    </>
  );
};

export default CartHeader;

const styles = StyleSheet.create({
  backButton: {
    width: 32,
    height: 32,
    borderRadius: 15,
    backgroundColor: "#141416",

    alignItems: "center",
    justifyContent: "center",

    // iOS shadow
    shadowColor: "#FFFFFF",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.16, // ≈ #FFFFFF29
    shadowRadius: 2,

    // Android shadow
    elevation: 2,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: Spacing.md,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: Spacing.md,
  },
  headerTitle: {
    color: Colors.primary,
    fontSize: 18,
    fontWeight: "700",
    marginTop: 20,
  },
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
  stepLabel: { color: Colors.muted, fontSize: 12, letterSpacing: 1 },
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
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.border,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.border,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
  },
  radioActive: { borderColor: Colors.accent },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.accent,
  },
  shippingLabel: { color: Colors.primary, fontSize: 14, fontWeight: "600" },
  shippingDesc: { color: Colors.primary, fontSize: 14 },
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
    borderColor: Colors.border,
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
