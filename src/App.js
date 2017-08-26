import React, { Component } from 'react'
import logo from './logo.svg'
import { Text, View, Image, StyleSheet } from 'react-native-web'

class App extends Component {
  render () {
    return (
      <View style={styles.app}>
        <View style={styles.header}>
          <Image accessibilityLabel='React Logo' resizeMode='contain' source={logo} style={styles.logo} alt='logo' />
          <Text style={styles.title}>Welcome to React</Text>
        </View>
        <Text style={styles.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  app: {
    textAlign: 'center'
  },

  logo: {
    height: 80
  },

  header: {
    backgroundColor: '#222',
    padding: 20
  },

  title: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginVertical: '1em',
    textAlign: 'center'
  },

  info: {
    fontSize: '1.125rem',
    marginVertical: '1em',
    textAlign: 'center'
  },

  code: {
    fontFamily: 'monospace, monospace'
  }
})

export default App
