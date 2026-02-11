import { Colors, Spacing } from "@/constants/theme";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../Button/PrimaryButton";

const ProductPrice = () => {
  const router = useRouter();
  return (
    <View style={styles.summary}>
      <View style={styles.summaryRow}>
        <Text style={styles.summaryLabel}>Product price</Text>
        <Text style={styles.summaryValue}>$110</Text>
      </View>
      <View style={styles.summaryBorder} />

      <View style={[styles.summaryRow]}>
        <Text style={styles.summaryLabel}>Shipping</Text>
        <Text style={styles.summaryValue}>Freeship</Text>
      </View>
      <View style={styles.summaryBorder} />
      <View style={styles.summaryRow}>
        <Text style={styles.subtotalLabel}>Subtotal</Text>
        <Text style={styles.subtotalValue}>$110</Text>
      </View>

      <PrimaryButton
        title="Proceed to checkout"
        onPress={() => router.push("/checkout/shipping")}
        marginBottom={Spacing.xl}
        width={"80%"}
      />
    </View>
  );
};

export default ProductPrice;

const styles = StyleSheet.create({
  summary: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#141416",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 8,

    // iOS shadow
    shadowColor: "#FFFFFF",
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.05,
    shadowRadius: 10,

    // Android shadow
    elevation: 10,
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
    width: "90%", // ✅ full width
    alignSelf: "center",
  },
  summaryLabel: { color: Colors.muted, fontSize: 14 },
  summaryValue: { color: Colors.primary, fontSize: 14 },
  subtotalLabel: { color: Colors.primary, fontSize: 16, fontWeight: "600" },
  subtotalValue: { color: Colors.primary, fontSize: 20, fontWeight: "700" },
  checkoutBtn: {
    backgroundColor: Colors.primary,
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
    marginHorizontal: 25, // ✅ keeps button inset
    marginBottom: Spacing.xl,
  },
  checkoutText: {
    color: Colors.primaryForeground,
    fontSize: 16,
    fontWeight: "600",
  },
});
