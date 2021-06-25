import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const MovieItem = ({ movie }) => {
  const baseImgUrl = "https://image.tmdb.org/t/p/w185/";
  return (
    <View style={styles.result}>
      <Image
        source={{ uri: baseImgUrl + movie.poster_path }}
        style={{
          width: "20%",
          height: 105,
          borderTopLeftRadius: 8,
          borderBottomLeftRadius: 8,
        }}
      />
      <View style={styles.quickDetails}>
        <Text style={styles.heading} numberOfLines={2}>
          {movie.title}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          Overview: {movie.overview}
        </Text>
      </View>
    </View>
  );
};

export default MovieItem;

const styles = StyleSheet.create({
  result: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    width: "90%",
    marginBottom: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  quickDetails: {
    width: "80%",
    flexDirection: "column",
    backgroundColor: "rgba(38,43,58, 0.5)",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    padding: 10,
  },
  heading: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
    paddingBottom: 10,
  },
  description: {
    color: "#FFF",
    fontSize: 12,
  },
});
