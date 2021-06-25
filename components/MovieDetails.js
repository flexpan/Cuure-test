import React from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";

const MovieDetails = ({ movie }) => {
  const baseImgUrl = "https://image.tmdb.org/t/p/w500/";
  return (
    <ScrollView style={styles.popup}>
      <Image
        source={{ uri: baseImgUrl + movie.poster_path }}
        style={{
          width: "80%",
          height: 430,
          alignSelf: "center",
        }}
      />
      <Text style={styles.poptitle}>{movie.title}</Text>
      <Text style={styles.release}>Release date : {movie.release_date}</Text>
      <Text style={styles.rating}>Ratings : {movie.vote_average * 10}%</Text>
      <Text style={styles.description}>Description : {movie.overview}</Text>
    </ScrollView>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  popup: {
    backgroundColor: "rgba(38,43,58, 0.5)",
    height: "92%",
  },
  poptitle: {
    color: "#262B3A",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    paddingVertical: 10,
    textDecorationLine: "underline",
  },
  release: {
    color: "#262B3A",
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "700",
    paddingHorizontal: 20,
  },
  rating: {
    color: "#262B3A",
    marginBottom: 20,
    fontSize: 16,
    fontWeight: "700",
    paddingHorizontal: 20,
  },
  description: {
    color: "#262B3A",
    fontSize: 16,
    fontWeight: "300",
    paddingHorizontal: 20,
  },
  image: {
    flex: 1,
    height: 700,
    resizeMode: "center",
  },
});
