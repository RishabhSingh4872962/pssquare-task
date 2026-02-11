import { Colors, Spacing } from "@/constants/theme";
import CheckoutSummary from "@/src/components/CheckSummary";
import CartHeader from "@/src/components/Header/CartHeader";
import { AntDesign, FontAwesome, Fontisto, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function PaymentScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <CartHeader isShipping isPayment />

      <Text style={styles.stepLabel}>STEP 2</Text>
      <Text style={styles.stepTitle}>Payment</Text>

      {/* Payment Methods */}
      <View style={styles.paymentMethods}>
        <TouchableOpacity style={styles.paymentBtn}>
          <Ionicons name="cash-outline" size={24} color={Colors.muted} />
          <Text style={styles.paymentBtnText}>Cash</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.paymentBtn, styles.paymentActive]}>
          <Ionicons name="card-outline" size={24} color={Colors.surfaceDark} />
          <Text style={[styles.paymentBtnText, { color: Colors.surfaceDark }]}>
            Credit Card
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.paymentBtn,
            {
              flexDirection: "row",
            },
          ]}
        >
          {/* <Ionicons name="ellipsis-horizontal" size={24} color={Colors.muted} /> */}
          {[1, 2, 3].map((i, indx) => {
            return (
              <View
                key={indx}
                style={{
                  width: 11,
                  height: 11,
                  borderRadius: 10,
                  borderColor: "#ffffff",
                  borderWidth: 2,
                }}
              />
            );
          })}
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Choose your card</Text>
        <TouchableOpacity>
          <Text style={styles.addNew}>Add new +</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>or check out with</Text>
      <View style={styles.externalRow}>
        {["logo-paypal", "visa", "mastercard", "alipay", "amex"].map(
          (icon, i) => (
            <View key={i} style={styles.externalBtn}>
              {icon === "logo-paypal" && (
                <Ionicons name={icon as any} size={20} color={"#298FC2"} />
              )}
              {icon === "visa" && (
                <Fontisto name="visa" size={24} color={"#172B85"} />
              )}

              {icon === "mastercard" && (
                <Fontisto name="mastercard" size={24} color="#FF5E00" />
              )}
              {icon === "amex" && (
                <FontAwesome name="cc-amex" size={24} color="#FFFFFF" />
              )}
              {icon === "alipay" && (
                <AntDesign name="alipay" size={24} color="#1677FF" />
              )}
            </View>
          ),
        )}
      </View>

      {/* Summary */}
      {/* <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#141416",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: 20,
          // iOS shadow
          shadowColor: "#FFFFFF",
          shadowOffset: { width: 0, height: -1 },
          shadowOpacity: 0.05,
          shadowRadius: 10,

          // Android shadow
          elevation: 10,
        }}
      > */}
      <CheckoutSummary
        price="$110"
        shipping="Freeship"
        subtotal="$110"
        buttonTitle="Place my order"
        onPress={() => router.push("/checkout/complete")}
        absolute
      />
      {/* <PrimaryButton
          title="Place my order"
          onPress={() => router.push("/checkout/complete")}
          marginTop={Spacing.sm}
          marginBottom={Spacing.xl}
        /> */}
      {/* </View> */}
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
  stepLabel: { color: Colors.muted, fontSize: 12, letterSpacing: 1 },
  stepTitle: {
    color: Colors.primary,
    fontSize: 24,
    fontWeight: "700",
    marginBottom: Spacing.lg,
  },
  paymentMethods: { flexDirection: "row", gap: 12, marginBottom: Spacing.lg },
  paymentBtn: {
    height: 80,
    width: 110,
    maxWidth: 110,
    flex: 1,
    backgroundColor: Colors.surface,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  paymentActive: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primary,
  },
  paymentBtnText: { color: Colors.muted, fontSize: 12 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Spacing.md,
  },
  label: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: "400",
    marginBottom: Spacing.sm,
  },
  addNew: { color: Colors.danger, fontSize: 13 },
  externalRow: {
    flexDirection: "row",
    marginBottom: Spacing.xl,
    alignSelf: "center",
  },
  externalBtn: {
    width: 50,
    height: 36,
    margin: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#CCD2E34F",
    backgroundColor: Colors.surface,
    justifyContent: "center",
    alignItems: "center",
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomColor: Colors.border,
    borderRadius: 4,
  },
  summaryLabel: { color: Colors.muted, fontSize: 14 },
  summaryValue: { color: Colors.primary, fontSize: 14 },
  subtotalLabel: { color: Colors.primary, fontSize: 16, fontWeight: "600" },
  subtotalValue: { color: Colors.primary, fontSize: 18, fontWeight: "700" },
  termsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: Spacing.lg,
  },
  termsText: { color: Colors.muted, fontSize: 14 },
  termsLink: { color: Colors.primary, textDecorationLine: "underline" },
  placeOrderBtn: {
    backgroundColor: Colors.primary,
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: Spacing.xl,
    marginTop: Spacing.sm,
  },
  placeOrderText: {
    color: Colors.primaryForeground,
    fontSize: 16,
    fontWeight: "600",
  },
});
