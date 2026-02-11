import { Colors, Spacing } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface ReviewProps {
  reviews: {
    name: string;
    rating: number;
    text: string;
    image: any;
  }[];
}
const Review: React.FC<ReviewProps> = ({ reviews }) => {
  return (
    <>
      {reviews.map((r, i) => (
        <View key={i} style={styles.reviewCard}>
          <View style={styles.reviewHeader}>
            <Image style={styles.reviewAvatar} source={r.image} />
            <View
              style={{
                flex: 1,
                alignSelf: "flex-start",
                paddingHorizontal: 12,
                paddingVertical: 5,
              }}
            >
              <Text style={styles.reviewerName}>{r.name}</Text>
              <View style={{ flexDirection: "row", margin: 2 }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <Ionicons
                    key={s}
                    name="star"
                    size={10}
                    color="#508A7B"
                    style={{ margin: 2 }}
                  />
                ))}
              </View>
            </View>
          </View>
          <Text style={styles.reviewText}>{r.text}</Text>
        </View>
      ))}
    </>
  );
};

export default Review;

const styles = StyleSheet.create({
  reviewCard: { marginTop: Spacing.md, marginBottom: Spacing.md },
  reviewHeader: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
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
});
