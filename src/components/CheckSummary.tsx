import { Colors, Spacing } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { usePathname } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PrimaryButton from "./Button/PrimaryButton";

type CheckoutSummaryProps = {
  price: string;
  shipping: string;
  subtotal: string;
  buttonTitle: string;
  onPress: () => void;

  absolute?: boolean;
  showTerms?: boolean;
};
export default function CheckoutSummary({
  price,
  shipping,
  subtotal,
  buttonTitle,
  onPress,
  absolute = false,
  showTerms = false,
}: CheckoutSummaryProps) {
  const pathname = usePathname();

  // Show terms only on payment screen
  const shouldShowTerms = showTerms || pathname === "/checkout/payment";

  return (
    <View style={[styles.summary, absolute && styles.absolute]}>
      <View style={styles.summaryRow}>
        <Text style={styles.summaryLabel}>Product price</Text>
        <Text style={styles.summaryValue}>{price}</Text>
      </View>

      <View style={styles.summaryBorder} />

      <View style={styles.summaryRow}>
        <Text style={styles.summaryLabel}>Shipping</Text>
        <Text style={styles.summaryValue}>{shipping}</Text>
      </View>

      <View style={styles.summaryBorder} />

      <View style={styles.summaryRow}>
        <Text style={styles.subtotalLabel}>Subtotal</Text>
        <Text style={styles.subtotalValue}>{subtotal}</Text>
      </View>

      {shouldShowTerms && (
        <TouchableOpacity style={styles.termsRow}>
          <Ionicons name="checkbox" size={22} color={Colors.accent} />
          <Text style={styles.termsText}>
            I agree to{" "}
            <Text style={styles.termsLink}>Terms and conditions</Text>
          </Text>
        </TouchableOpacity>
      )}

      <PrimaryButton
        title={buttonTitle}
        onPress={onPress}
        marginTop={Spacing.md}
        marginBottom={Spacing.xl}
        marginHorizontal={25}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  summary: {
    backgroundColor: "#141416",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 8,

    shadowColor: "#FFFFFF",
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.05,
    shadowRadius: 10,

    elevation: 10,
  },

  absolute: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 25,
    paddingHorizontal: 25,
  },

  summaryBorder: {
    borderTopWidth: 0.8,
    borderTopColor: Colors.border,
    width: "90%",
    alignSelf: "center",
  },

  summaryLabel: {
    color: Colors.muted,
    fontSize: 14,
  },

  summaryValue: {
    color: Colors.primary,
    fontSize: 14,
  },

  subtotalLabel: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: "600",
  },

  subtotalValue: {
    color: Colors.primary,
    fontSize: 20,
    fontWeight: "700",
  },

  termsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 25,
    padding: 10,
  },

  termsText: {
    color: Colors.muted,
    fontSize: 14,
  },

  termsLink: {
    color: Colors.accent,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
});
