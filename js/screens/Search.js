import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class SearchScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Search',
    headerBackTitle: ''
  })

  render() {
    return (
      <View>
        <Text>SearchScreen</Text>
      </View>
    )
  }
}