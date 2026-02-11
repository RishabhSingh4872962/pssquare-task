import { Colors, Spacing } from "@/constants/theme";
import { Images } from "@/src/assets";
import CategoryCards from "@/src/components/Cards/CategoryCards";
import Pagination from "@/src/components/pagination/Pagination";
import Product from "@/src/components/product/Product";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const categories = ["Women", "Men", "Accessories", "Beauty"];
const categoryIcons = ["female-sharp", "male", "glasses", "beauty"] as const;

const featuredProducts = [
  {
    name: "Turtleneck Sweater",
    price: "39.99",
    image: Images.product.product1,
  },
  {
    name: "Long Sleeve Dress",
    price: "45.00",
    image: Images.product.product2,
  },
  {
    name: "Sportwear Set",
    price: "80.00",
    image: Images.product.product3,
  },
];

const recommended = [
  {
    name: "White fashion hoodie",
    price: "29.00",
    image: Images.recommended.recommended1,
  },
  {
    name: "Cotton Tee",
    price: "30.00",
    image: Images.recommended.recommended2,
  },
];

export default function HomeScreen() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <Text style={styles.brandName}>Stylinx</Text>

      {/* Categories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesRow}
      >
        {categories.map((cat, i) => {
          const isActive = i === selectedIndex;

          return (
            <View key={i} style={styles.categoryItem}>
              <TouchableOpacity
                onPress={() => setSelectedIndex(i)}
                style={[
                  styles.categoryOuter,
                  isActive && styles.categoryOuterActive,
                ]}
              >
                <View
                  style={[
                    styles.categoryInner,
                    isActive && { backgroundColor: Colors.primary },
                  ]}
                >
                  {cat === "Beauty" ? (
                    <FontAwesome6
                      name="screwdriver"
                      size={24}
                      color={isActive ? "#23262F" : "#B1B5C3"}
                      style={{ transform: [{ rotate: "135deg" }] }}
                    />
                  ) : (
                    <Ionicons
                      name={categoryIcons[i] as any}
                      size={22}
                      color={isActive ? "#23262F" : "#B1B5C3"}
                    />
                  )}
                </View>
              </TouchableOpacity>

              <Text
                style={[
                  styles.categoryText,
                  isActive && styles.categoryTextActive,
                ]}
              >
                {cat}
              </Text>
            </View>
          );
        })}
      </ScrollView>

      <View style={styles.banner}>
        <Image
          source={Images.dashboard.autumncollection}
          style={styles.bannerImage}
          resizeMode="cover"
        />

        {/* Text overlay */}
        <View style={styles.bannerTextContainer}>
          <Text style={styles.bannerTitle}>
            Autumn{"\n"}Collection{"\n"}2021
          </Text>
        </View>

        <Pagination color="#FFFFFF" bottom={16} />
      </View>

      {/* Featured Products */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Feature Products</Text>
        <TouchableOpacity>
          <Text style={styles.showAll}>Show all</Text>
        </TouchableOpacity>
      </View>

      <Product products={featuredProducts} showHorizontal />

      {/* New Collection Banner */}
      <View style={styles.collectionBanner}>
        <View>
          <Text style={styles.collectionLabel}>| NEW COLLECTION</Text>
          <Text style={styles.collectionTitle}>HANG OUT{"\n"}& PARTY</Text>
        </View>
        <View style={styles.imageCircle3} />
        <Image
          style={styles.collectionImage}
          source={Images.dashboard.hangout}
        />
      </View>

      {/* Recommended */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recommended</Text>
        <TouchableOpacity>
          <Text style={styles.showAll}>Show all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.recommendedProductsRow}
      >
        {recommended.map((product, i) => (
          <TouchableOpacity key={i} style={styles.recommendedProductCard}>
            <Image
              style={styles.recommendedProductImage}
              source={product.image}
              resizeMode="cover"
            />

            <View style={styles.recommendedProductInfo}>
              <Text style={styles.recommendedProductName} numberOfLines={1}>
                {product.name}
              </Text>
              <Text style={styles.recommendedProductPrice}>
                $ {product.price}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Top Collection */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Top Collection</Text>
        <TouchableOpacity>
          <Text style={styles.showAll}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.topCollectionCard}>
        <Text style={styles.topCollectionLabel}>| Sale up to 40%</Text>
        <Text style={styles.topCollectionTitle}>FOR SLIM{"\n"}& BEAUTY</Text>
        <View style={styles.imageCircle} />
        <Image
          style={styles.topCollectionImage}
          source={Images.topcollection.topcollection1}
        />
      </View>

      <View
        style={[
          styles.topCollectionCard,
          {
            height: 220,
          },
        ]}
      >
        <Text style={styles.topCollectionLabel}>| Summer Collection 2021</Text>
        <Text style={styles.topCollectionTitle}>
          Most sexy{"\n"}& fabulous{"\n"}design
        </Text>
        <View style={styles.imageCircle2} />
        <Image
          style={styles.topCollectionImage}
          source={Images.topcollection.topcollection2}
        />
      </View>

      <CategoryCards />
      <View style={{ height: 80 }} />
    </ScrollView>
  );
}

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
    marginVertical: Spacing.lg,
  },

  categoriesRow: {
    marginBottom: Spacing.md,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },

  categoryItem: {
    alignItems: "center",
    marginRight: Spacing.md + 7,
    marginVertical: 10,
  },

  categoryOuter: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "transparent",
  },

  categoryOuterActive: {
    borderColor: "#FFFFFF", // outer white ring
  },

  categoryInner: {
    width: 58,
    height: 58,
    borderRadius: 29,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#23262F", // white inner circle
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

  bannerImage: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
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
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },

  dot: {
    width: 6,
    height: 6,
    marginTop: 3,
    borderRadius: 3,
    backgroundColor: "#FFFFFF",
  },

  dotActive: {
    backgroundColor: "#FFFFFF",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Spacing.md,
    marginTop: Spacing.md,
  },
  sectionTitle: {
    color: Colors.primary,
    fontSize: 18,
    fontWeight: "700",
    marginBottom: Spacing.md,
  },
  showAll: {
    color: Colors.primary,
    fontSize: 13,
    marginHorizontal: 30,
    marginBottom: Spacing.md,
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
    borderWidth: 1,
    borderColor: "#23262F",
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
    position: "absolute",
    width: 72,
    height: 72,
    borderRadius: 16,
    backgroundColor: "#fff",
  },

  recommendedProductInfo: {
    marginLeft: 75,
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
    padding: Spacing.lg,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Spacing.lg,
    minHeight: 160,
    marginHorizontal: -16,
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
    position: "absolute",
    width: 160,
    height: 160,
    right: 10,
    bottom: 0,
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
    fontWeight: "200",
  },

  topCollectionTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "400",
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
  imageCircle2: {
    position: "absolute",
    right: 37,
    bottom: 62,
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "rgba(255,255,255,0.06)", // subtle glow
  },
  imageCircle3: {
    position: "absolute",
    right: 22,
    bottom: 15,
    width: 130,
    height: 130,
    borderRadius: 100,
    borderWidth: 18,
    borderColor: "#3d414c",
    backgroundColor: "#555a68",
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
