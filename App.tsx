import React from 'react'

import {
  View,
  Text,
  SafeAreaView,
  Button,
  Alert,
} from 'react-native'

function App(){
  const onHandlePress = () => {
    Alert.alert("You pressed me so hard!")
  }
  return(
    <SafeAreaView>
      <View>
        <Text>Hello World !</Text>
        <Text>Hello World !</Text>
        <Text>Hello World !</Text>
        <Text>Hello World !</Text>
        <Button title='Press me' onPress={onHandlePress} />
      </View>
    </SafeAreaView>
  )
}

export  default App;