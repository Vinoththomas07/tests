import React, { Component } from "react";
import {
  ActivityIndicator,
  Text,
  View,
  SafeAreaView,
  FlatList,
} from "react-native";
import Accordion from "./Accordion";
import { fetchData } from "./../API/main";

export default class ListBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoading: true,
    };
  }

  async componentDidMount() {
    let data = await fetchData();
    this.setState({ data: data.data, isLoading: false });
  }

  renderList = ({item})=>(
    <Accordion item={item}/>
  )

  render() {
    const { isLoading, data } = this.state;

    return (
      <View
        style={{
          justifyContent: "center",
          margin: 20,
        }}
      >
        {!isLoading ? (
          <SafeAreaView>
            <FlatList
              data={data}
              renderItem={this.renderList}
              keyExtractor={(item) => item.name}
            />
          </SafeAreaView>
        ) : (
          <ActivityIndicator
            style={{ marginTop: 30 }}
            size="large"
            color="#4B4BC9"
          />
        )}
      </View>
    );
  }
}
