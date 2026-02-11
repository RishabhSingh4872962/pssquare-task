import { Colors, Spacing } from "@/constants/theme";
import PrimaryButton from "@/src/components/Button/PrimaryButton";
import CartHeader from "@/src/components/Header/CartHeader";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function OrderCompleteScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <CartHeader isShipping isComplete isPayment />

      <View style={styles.content}>
        <Text style={styles.title}>Order Completed</Text>

        <View style={styles.iconContainer}>
          <Ionicons name="bag-check-outline" size={64} color={Colors.muted} />
        </View>

        <Text style={styles.thankYou}>Thank you for your purchase.</Text>
        <Text style={styles.subText}>
          You can view your order in My Orders{"\n"}section.
        </Text>
      </View>

      <PrimaryButton
        title="Continue shopping"
        onPress={() => router.replace("/(tabs)")}
        marginBottom={Spacing.xl}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
  headerTitle: { color: Colors.primary, fontSize: 18, fontWeight: "700" },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 60,
  },
  title: {
    color: Colors.primary,
    fontSize: 24,
    fontWeight: "700",
    marginBottom: Spacing.xl,
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: Colors.surface,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: Spacing.xl,
  },
  thankYou: { color: Colors.primary, fontSize: 16, marginBottom: Spacing.sm },
  subText: {
    color: Colors.muted,
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
  },
  continueBtn: {
    backgroundColor: Colors.primary,
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: Spacing.xl,
  },
  continueText: {
    color: Colors.primaryForeground,
    fontSize: 16,
    fontWeight: "600",
  },
});
