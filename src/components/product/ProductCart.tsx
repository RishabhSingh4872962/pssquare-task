import { Images } from "@/src/assets";
import { Check, Minus, Plus } from "lucide-react-native";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ProductCard = () => {
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(true);

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <View style={styles.circle} />
        <Image source={Images.cart.cartItem} style={styles.image} />
      </View>

      <View style={styles.details}>
        <View style={styles.topRow}>
          <Text style={styles.title}>Sportwear Set</Text>
          <TouchableOpacity
            onPress={() => setSelected(!selected)}
            style={[styles.checkBtn, selected && styles.checkBtnActive]}
          >
            <Check size={15} color="black" />
          </TouchableOpacity>
        </View>

        <Text style={styles.price}>$ 80.00</Text>

        <View style={styles.bottomRow}>
          <Text style={styles.meta}>Size: L | Color: Cream</Text>
          <View style={styles.quantityControl}>
            <TouchableOpacity
              onPress={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <Minus size={14} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
              <Plus size={14} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#1e2330",
    borderRadius: 20,
    overflow: "hidden",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  imageContainer: {
    width: 120,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "white",
  },
  circle: {
    top: 25,
    left: 20,
    position: "absolute",
    width: 80,
    height: 80,
    borderRadius: 60,
    backgroundColor: "#fbf1eb",
  },
  image: {
    top: 3,
    height: 210,
    resizeMode: "contain",
    position: "absolute",
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    // backgroundColor: "white",
  },
  details: { flex: 1, padding: 15, justifyContent: "space-between" },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  title: { color: "#fff", fontSize: 15, fontWeight: "600" },
  checkBtn: {
    width: 23,
    height: 23,
    borderRadius: 8,
    backgroundColor: "#3a3f4a",
    alignItems: "center",
    justifyContent: "center",
  },
  checkBtnActive: { backgroundColor: "#4a9e82" },
  price: { color: "#fff", fontSize: 15, fontWeight: "700", marginTop: 4 },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  meta: { color: "#8a8f9a", fontSize: 11 },
  quantityControl: {
    width: 72,
    height: 35,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#E6E8EC",
    borderRadius: 20,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  quantityText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
    width: 24,
    textAlign: "center",
  },
});

export default ProductCard;
