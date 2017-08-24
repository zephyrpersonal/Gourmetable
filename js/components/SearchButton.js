import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default ({ navigation }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('SearchScreen')}
  >
    <Text
      style={{ marginRight: 5 }}
    >
      <Ionicons
        name="ios-search"
        size={24} />
    </Text>
  </TouchableOpacity>
)