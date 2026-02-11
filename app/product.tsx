import { Colors, Spacing } from "@/constants/theme";
import { Images } from "@/src/assets";
import Header from "@/src/components/Header/Header";
import Pagination from "@/src/components/pagination/Pagination";
import Product from "@/src/components/product/Product";
import Review from "@/src/components/Reviews/Review";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");
const colors = ["#D4A574", "#E8B4B8", "#2C2C2C"];
const sizes = ["S", "M", "L"];

const reviews = [
  {
    name: "Jennifer Rose",
    rating: 5,
    text: "I love it. Awesome customer service! Helped me out with adding an additional item to my order. Thanks again!",
    image: Images.reviews.jene,
  },
  {
    name: "Kelly Rihana",
    rating: 5,
    text: "I'm very happy with order, it was delivered on and good quality. Recommended!",
    image: Images.reviews.kelly,
  },
];

const similarProducts = [
  {
    name: "Rise Crop Hoodie",
    price: "43.00",
    image: Images.similarProduct.smProduct1,
  },
  {
    name: "Gym Crop Top",
    price: "39.99",
    image: Images.similarProduct.smProduct2,
  },
  {
    name: "Sport Set",
    price: "47.99",
    image: Images.similarProduct.smProduct3,
  },
];

export default function ProductScreen() {
  const router = useRouter();

  const [showDescription, setShowDescription] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [showProducts, setShowProduct] = useState(false);

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(1);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Product Image */}
        <View style={styles.imageContainer}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => router.back()}
          >
            <Ionicons name="chevron-back" size={24} color={Colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.heartBtn}>
            <Ionicons name="heart" size={22} color="#E74C3C" />
          </TouchableOpacity>
          <View style={styles.circle} />
          <Image
            source={Images.cart.selectProduct}
            style={styles.productImagePlaceholder}
            resizeMode="contain"
          />
        </View>

        {/* Product Info */}
        <View style={styles.infoContainer}>
          <Pagination color="#4F4F4F" top={-30} />

          <View style={styles.titleRow}>
            <Text style={styles.productName}>Sportwear Set</Text>
            <Text style={styles.productPrice}>$ 80.00</Text>
          </View>

          {/* Rating */}
          <View style={styles.ratingRow}>
            {[1, 2, 3, 4, 5].map((s) => (
              <Ionicons
                key={s}
                name="star"
                size={17}
                color="#508a7b"
                style={{ margin: 4 }}
              />
            ))}
            <Text style={styles.ratingCount}>(83)</Text>
          </View>

          <View style={styles.divider} />
          {/* Color & Size */}
          <View style={styles.optionsRow}>
            <View>
              <Text style={styles.optionLabel}>Color</Text>
              <View style={styles.colorRow}>
                {colors.map((c, i) => {
                  const selected = i === selectedColorIndex;

                  return (
                    <TouchableOpacity
                      key={i}
                      style={styles.colorDotWrapper}
                      onPress={() => setSelectedColorIndex(i)}
                    >
                      <View style={[styles.colorDot, { backgroundColor: c }]} />
                      {selected && (
                        <View
                          style={[
                            StyleSheet.absoluteFillObject,
                            styles.colorSelected,
                            { borderRadius: 16 },
                          ]}
                        />
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
            <View>
              <Text style={styles.optionLabel}>Size</Text>
              <View style={styles.sizeRow}>
                {sizes.map((s, i) => (
                  <TouchableOpacity
                    key={s}
                    onPress={() => setSelectedSizeIndex(i)}
                    style={[
                      styles.sizeBtn,
                      i === selectedSizeIndex && styles.sizeActive,
                    ]}
                  >
                    <Text
                      style={[
                        styles.sizeText,
                        i === selectedSizeIndex && styles.sizeTextActive,
                      ]}
                    >
                      {s}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
          <View style={styles.divider} />

          <Header
            name="Description"
            onPress={() => {
              setShowDescription(!showDescription);
            }}
            iconSide={showDescription ? "down" : "forward"}
          />
          {showDescription && (
            <>
              <Text style={styles.descriptionText}>
                Sportswear is no longer under culture, it is no longer indie or
                cobbled together as it once was. Sport is fashion today. The top
                is oversized in fit and style, may need to size down.
              </Text>
              <Text
                style={{
                  textDecorationLine: "underline",
                  color: "#508A7B",
                  alignSelf: "flex-end",
                  paddingRight: 50,
                }}
              >
                Read More
              </Text>
            </>
          )}

          {/* Header */}

          <Header
            name="Reviews"
            onPress={() => {
              setShowReviews(!showReviews);
            }}
            iconSide={showReviews ? "down" : "forward"}
          />

          {/* <View style={styles.divider} /> */}

          {/* Summary */}

          {showReviews && (
            <View style={styles.reviewSummary}>
              {/* Left */}
              <View>
                <View style={styles.ratingRow}>
                  <Text style={styles.ratingNumber}>4.9</Text>
                  <Text style={styles.ratingOutOf}>OUT OF 5</Text>
                </View>
              </View>

              {/* Right */}
              <View style={styles.ratingRight}>
                <View style={styles.starRow}>
                  {[...Array(5)].map((_, i) => (
                    <Ionicons
                      key={i}
                      name="star"
                      size={16}
                      color={Colors.accent}
                    />
                  ))}
                </View>
                <Text style={styles.ratingCount}>83 ratings</Text>
              </View>
            </View>
          )}

          {/* Bars */}
          {showReviews && (
            <View style={styles.ratingBars}>
              {[80, 12, 5, 3, 0].map((pct, i) => (
                <View key={i} style={styles.barRow}>
                  <Text style={styles.barLabel}>{5 - i}</Text>
                  <Ionicons name="star" size={12} color={Colors.accent} />
                  <View style={styles.barTrack}>
                    <View style={[styles.barFill, { width: `${pct}%` }]} />
                  </View>
                  <Text style={styles.barPct}>{pct}%</Text>
                </View>
              ))}
            </View>
          )}

          {/* Footer */}
          {showReviews && (
            <View style={styles.reviewFooter}>
              <Text style={styles.reviewFooterText}>47 Reviews</Text>
              <View style={styles.writeReview}>
                <Text style={styles.writeReviewText}>WRITE A REVIEW</Text>
                <Ionicons name="pencil" size={16} color={Colors.primary} />
              </View>
            </View>
          )}

          {/* Review Cards */}

          {showReviews && <Review reviews={reviews} />}

          <Header
            name="Similar Product"
            onPress={() => {
              setShowProduct(!showProducts);
            }}
            iconSide={showProducts ? "down" : "forward"}
          />
          {showProducts && (
            <Product products={similarProducts} showHorizontal />
          )}

          <View style={{ height: 20 }} />
        </View>
      </ScrollView>

      {/* Add to Cart */}
      <View style={styles.addToCartBar}>
        <TouchableOpacity
          style={styles.addToCartBtn}
          onPress={() => router.push("/cart")}
        >
          <Ionicons
            name="bag-outline"
            size={20}
            color={Colors.primaryForeground}
          />
          <Text style={styles.addToCartText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    position: "absolute",
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#fbf2ed",
    top: 70,
    left: 90,
  },
  container: { flex: 1, backgroundColor: Colors.background },
  imageContainer: {
    width,
    height: width * 1.1,
    backgroundColor: "#FFFBF8",
    position: "relative",
  },
  backBtn: {
    position: "absolute",
    top: 16,
    left: 16,
    zIndex: 10,
    backgroundColor: "#141416",
    borderRadius: 20,
    padding: 8,
  },
  heartBtn: {
    position: "absolute",
    top: 16,
    right: 16,
    zIndex: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 8,
    // box-shadow: 0px 1px 3px 0px #00000040;
    // shadow (iOS)
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },

    // shadow (Android)
    elevation: 6,
  },
  productImagePlaceholder: {
    flex: 1,
    width: "auto",
    height: 100,
    // backgroundColor: "white",
  },
  infoContainer: {
    backgroundColor: "#141416",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -24,
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productName: { color: Colors.primary, fontSize: 22, fontWeight: "700" },
  productPrice: { color: Colors.primary, fontSize: 22, fontWeight: "700" },

  ratingCount: { color: Colors.muted, fontSize: 12, marginLeft: 6 },
  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: Spacing.lg,
  },
  optionLabel: { color: Colors.muted, fontSize: 13, marginBottom: 8 },
  colorRow: {
    flexDirection: "row",
    alignItems: "center", //
  },
  colorDotWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  colorDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },

  colorSelected: {
    borderWidth: 4,
    borderColor: Colors.primary,
  },
  sizeRow: { flexDirection: "row", gap: 8 },
  sizeBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: Colors.border,
    justifyContent: "center",
    alignItems: "center",
    color: "black",
  },
  sizeActive: { backgroundColor: "white" },
  sizeText: { color: Colors.muted, fontSize: 13, fontWeight: "600" },
  sizeTextActive: { color: Colors.primaryForeground },
  sectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: Spacing.lg,
    paddingBottom: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: "#23262F",
    marginBottom: 10,
  },
  sectionLabel: { color: Colors.primary, fontSize: 16, fontWeight: "600" },
  descriptionText: {
    width: "95%",
    alignContent: "center",
    alignSelf: "center",
    color: Colors.muted,
    fontSize: 13,
    lineHeight: 20,
    marginTop: Spacing.sm,
    marginBottom: Spacing.md,
  },
  reviewHeader: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  reviewTitle: {
    color: Colors.primary,
    fontSize: 22,
    fontWeight: "700",
  },

  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: Spacing.sm,
  },

  /* SUMMARY */
  reviewSummary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 6,
  },

  ratingNumber: {
    fontSize: 52,
    fontWeight: "700",
    color: Colors.primary,
    lineHeight: 56,
  },

  ratingOutOf: {
    fontSize: 12,
    color: Colors.muted,
    marginBottom: 8,
  },

  ratingRight: {
    alignItems: "flex-end",
  },

  starRow: {
    flexDirection: "row",
    gap: 6,
    marginBottom: 4,
  },

  //   ratingCount: {
  //     color: Colors.muted,
  //     fontSize: 12,
  //   },

  /* BARS */
  ratingBars: {
    marginTop: Spacing.lg,
    gap: 14,
  },

  barRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  barLabel: {
    width: 14,
    fontSize: 12,
    color: Colors.muted,
    textAlign: "right",
  },

  barTrack: {
    flex: 1,
    height: 6,
    backgroundColor: "#F0F0F0",
    borderRadius: 3,
    overflow: "hidden",
  },

  barFill: {
    height: "100%",
    backgroundColor: Colors.accent,
    borderRadius: 3,
  },

  barPct: {
    width: 36,
    fontSize: 12,
    color: Colors.muted,
    textAlign: "right",
  },

  /* FOOTER */
  reviewFooter: {
    marginTop: Spacing.xl,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  reviewFooterText: {
    color: Colors.muted,
    fontSize: 14,
  },

  writeReview: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  writeReviewText: {
    fontSize: 14,
    fontWeight: "300",
    color: Colors.primary,
  },
  reviewCard: { marginTop: Spacing.md, marginBottom: Spacing.md },
  //   reviewHeader: { flexDirection: "row", alignItems: "center", gap: 10 },
  reviewAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.surface,
  },
  reviewerName: { color: Colors.primary, fontSize: 14, fontWeight: "600" },
  reviewText: {
    color: Colors.muted,
    fontSize: 13,
    lineHeight: 18,
    marginTop: 6,
  },
  similarCard: { marginRight: Spacing.md, width: 110 },
  similarImage: {
    width: 110,
    height: 130,
    backgroundColor: Colors.surface,
    borderRadius: 12,
    marginBottom: 6,
  },
  similarName: { color: Colors.primary, fontSize: 12 },
  similarPrice: { color: Colors.accent, fontSize: 13, fontWeight: "600" },
  addToCartBar: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    width: "100%",
    backgroundColor: Colors.primary,
    // paddingVertical: Spacing.md,
    height: 60,
  },
  addToCartBtn: {
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  addToCartText: {
    color: Colors.primaryForeground,
    fontSize: 16,
    fontWeight: "800",
  },
});
