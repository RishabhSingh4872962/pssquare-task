import { Colors, Spacing } from "@/constants/theme";
import { useRouter } from "expo-router";
import React from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";

interface ProductProps {
  products: {
    name: string;
    price: string;
    image: any;
  }[];
  showHorizontal: boolean;
}

const Product: React.FC<ProductProps> = ({ products, showHorizontal }) => {
  const router = useRouter();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.productsRow}
    >
      {products.map((product, i) => (
        <TouchableOpacity
          key={i}
          style={styles.productCard}
          onPress={() => router.push("/product")}
        >
          <Image style={[styles.productImage]} source={product.image} />
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>$ {product.price}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: Spacing.md,
  },
  brandName: {
    color: Colors.primary,
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: Spacing.md,
  },

  categoriesRow: {
    marginBottom: Spacing.md,
  },

  categoryItem: {
    alignItems: "center",
    marginRight: Spacing.lg,
  },

  categoryOuter: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.background,
  },

  categoryOuterActive: {
    backgroundColor: "#FFFFFF", // white ring
  },

  categoryInner: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.surface,
  },

  categoryText: {
    marginTop: 8,
    fontSize: 13,
    color: Colors.muted,
  },

  categoryTextActive: {
    color: "#FFFFFF",
  },
  categoryBtn: {
    alignItems: "center",
    marginRight: Spacing.md,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: Colors.surface,
    gap: 4,
  },
  categoryActive: {
    backgroundColor: Colors.primary,
  },

  banner: {
    position: "relative",
    height: 215,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: Spacing.lg,
    backgroundColor: Colors.surface,
  },

  bannerTextContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 20,
    justifyContent: "center",
    alignItems: "flex-end",
  },

  bannerTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
    lineHeight: 30,
  },

  dotsContainer: {
    position: "absolute",
    bottom: 16,
    alignSelf: "center",
    flexDirection: "row",
    gap: 8,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "rgba(255,255,255,0.4)",
  },

  dotActive: {
    backgroundColor: "#FFFFFF",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Spacing.md,
  },
  sectionTitle: {
    color: Colors.primary,
    fontSize: 18,
    fontWeight: "700",
  },
  showAll: {
    color: Colors.muted,
    fontSize: 13,
  },

  productsRow: {
    marginBottom: Spacing.lg,
  },
  productCard: {
    marginRight: Spacing.xl,
    width: 120,
  },
  productImage: {
    width: 130,
    height: 150,
    backgroundColor: Colors.primary,
    borderRadius: 12,
    marginBottom: Spacing.md,
  },
  productImageSmall: {
    width: 140,
    height: 120,
    backgroundColor: Colors.surface,
    borderRadius: 12,
    marginBottom: Spacing.sm,
  },
  productName: {
    color: Colors.primary,
    fontSize: 13,
    marginBottom: 6,
  },
  productPrice: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: "600",
  },

  recommendedProductsRow: {
    marginTop: 10,
    marginBottom: 10,
  },

  recommendedProductCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0E0E10", // dark card
    borderRadius: 20,
    padding: 12,
    marginRight: 16,
    width: 260,

    // shadow (iOS)
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },

    // shadow (Android)
    elevation: 6,
  },
  recommendedProductImage: {
    width: 72,
    height: 72,
    borderRadius: 16,
    backgroundColor: "#fff",
  },

  recommendedProductInfo: {
    marginLeft: 12,
    flex: 1,
  },

  recommendedProductName: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
  },

  recommendedProductPrice: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

  collectionBanner: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: Spacing.lg,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Spacing.lg,
    minHeight: 120,
  },
  collectionLabel: {
    color: Colors.primary,
    fontSize: 11,
    marginBottom: 8,
    letterSpacing: 1,
  },
  collectionTitle: {
    color: Colors.primary,
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 24,
  },
  collectionImage: {
    width: 100,
    height: 100,
    backgroundColor: Colors.surfaceLight,
    borderRadius: 12,
  },
  topCollectionCard: {
    backgroundColor: Colors.surfaceDark, // dark card
    borderRadius: 24,
    padding: Spacing.xl,
    marginBottom: Spacing.lg,
    minHeight: 200,
    overflow: "hidden",
  },

  topCollectionLabel: {
    color: Colors.muted,
    fontSize: 15,
    marginBottom: 12,
    fontWeight: "400",
  },

  topCollectionTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "800",
    lineHeight: 32,
    maxWidth: "65%", // ⬅️ text doesn’t overlap image
  },
  imageCircle: {
    position: "absolute",
    right: 35,
    bottom: 48,
    width: 110,
    height: 110,
    borderRadius: 60,
    backgroundColor: "rgba(255,255,255,0.06)", // subtle glow
  },
  topCollectionImage: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 160,
    height: 250,
    resizeMode: "contain",
  },
});
