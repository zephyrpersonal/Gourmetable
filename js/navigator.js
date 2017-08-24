import React from 'react'
import { StackNavigator } from 'react-navigation'
import HomeScreen from './screens/Home'
import ArticleScreen from './screens/Article'
import SearchScreen from './screens/Search'

import SearchButton from './components/SearchButton'

const routerMap = {
  HomeScreen: {
    path: 'home',
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Gourmetable',
      headerBackTitle: null,
      headerRight: (<SearchButton navigation={navigation} />)
    })
  },
  ArticleScreen: {
    path: 'article/:id',
    screen: ArticleScreen
  },
  SearchScreen: {
    path: 'search',
    screen: SearchScreen
  }
}

const navigatorOptions = {
  headerMode: 'float',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#fff'
    },
    headerTitleStyle: {
      color: '#333'
    }
  }
}

const AppMainStacks = StackNavigator(routerMap, navigatorOptions)

export default AppMainStacks