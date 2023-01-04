import { XStyleSheet } from '@/Theme'
import React from 'react'
import { Text, View } from 'react-native'

const DetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text>DetailScreen</Text>
    </View>
  )
}

export default DetailScreen

const styles = XStyleSheet.create({
  container: { flex: 1 },
})
