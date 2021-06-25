import axios from "axios";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Modal,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from "react-native";
import MovieDetails from "../components/MovieDetails";
import MovieItem from "../components/MovieItem";

export default function SearchPage() {
  const apiUrl = "https://api.themoviedb.org/3/";
  const apiKey = "?api_key=d882e53779511b594c685702f653979e";
  const [movies, setMovies] = useState({
    s: "",
    results: [],
    selected: {},
  });

  // TMDB rest API to search movies with query

  const search = () => {
    axios(
      apiUrl + "search/movie" + apiKey + "&language=en-US&query=" + movies.s
    ).then(({ data }) => {
      let results = data.results;
      setMovies((prevState) => {
        return { ...prevState, results: results };
      });
    });
  };

  //TMDB rest API to get a movie details

  const openPopup = (id) => {
    axios(apiUrl + "movie/" + id + apiKey).then(({ data }) => {
      let result = data;
      console.log(result);
      setMovies((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  return (
    <View style={styles.searchContainer}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <ImageBackground
        source={require("../assets/background.jpg")}
        style={styles.image}
      >
        <TextInput
          style={styles.searchbox}
          onChangeText={(text) =>
            setMovies((prevState) => {
              return { ...prevState, s: text };
            })
          }
          onSubmitEditing={search}
          value={movies.s}
          placeholder="Enter a movie..."
        />
        <FlatList
          data={movies.results}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity key={item.id} onPress={() => openPopup(item.id)}>
              <MovieItem movie={item} />
            </TouchableOpacity>
          )}
        />
        <Modal
          animationType="fade"
          transparent={false}
          visible={typeof movies.selected.title != "undefined" ? true : false}
        >
          <MovieDetails movie={movies.selected} />
          <TouchableHighlight
            onPress={() =>
              setMovies((prevState) => {
                return { ...prevState, selected: {} };
              })
            }
          >
            <Text style={styles.closeBtn}>Close</Text>
          </TouchableHighlight>
        </Modal>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  searchbox: {
    fontSize: 20,
    fontWeight: "300",
    padding: 10,
    width: "60%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    marginBottom: 30,
    marginTop: 10,
    alignSelf: "center",
    textAlign: "center",
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  results: {
    flex: 1,
  },
  closeBtn: {
    padding: 20,
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    color: "#FFF",
    backgroundColor: "#262B3A",
  },
  image: {
    flex: 1,
    width: "100%",
    resizeMode: "stretch",
    justifyContent: "center",
  },
});
