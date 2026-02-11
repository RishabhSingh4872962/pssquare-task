import { Colors, Spacing } from "@/constants/theme";
import BackButton from "@/src/components/Button/BackButton";
import CheckoutSummary from "@/src/components/CheckSummary";
import ProductCard from "@/src/components/product/ProductCart";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function CartScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.headerTitle}>Your Cart</Text>
        <View style={{ width: 24 }} />
      </View>

      <ProductCard />

      {/* Summary */}
      <CheckoutSummary
        price="$110"
        shipping="Freeship"
        subtotal="$110"
        buttonTitle="Proceed to checkout"
        onPress={() => router.push("/checkout/shipping")}
        absolute
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#23262f",
    paddingHorizontal: Spacing.md,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: Spacing.md,
  },
  headerTitle: { color: Colors.primary, fontSize: 18, fontWeight: "700" },
});
