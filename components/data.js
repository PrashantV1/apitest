import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/Ionicons";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  useColorScheme,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from "react-native";

class Data extends React.Component {
  constructor() {
    super();
    this.state = { country: [], isloading: true };
  }

  componentDidMount() {
    fetch("https://coronavirus-19-api.herokuapp.com/countries")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ country: json, isloading: false });
      });
    // console.log("countriess   :",this.state.country);
  }
  _renderIem = ({ item, index }) => {
    let country = this.state.country;
    return (
      <View style={styles.item}>
        <TouchableOpacity style={styles.buttoncontainer}>
          <Text
            style={styles.buttontext}
          >{`country is  ${country[index].country} and total cases are ${country[index].cases}`}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.Container}>
        <FlatList
          data={this.state.country}
          renderItem={this._renderIem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingTop: 50,
    backgroundColor: "#50DBB4",
  },
  item: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#50DBB4",
    // borderRadius: 50,
  },
  icon: {
    padding: 20,
    justifyContent: "flex-start",
    alignContent: "left",
  },
  buttoncontainer: {
    backgroundColor: "#66AD47",
    paddingVertical: 15,
    borderRadius: 30,
  },
  buttontext: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Data;
