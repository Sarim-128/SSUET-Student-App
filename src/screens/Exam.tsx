import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Exam = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/images/others/noExam.png')} />
      <Text style={styles.text}>Details will be available during exams.</Text>
    </View>
  )
}

export default Exam

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 15,
  },
  image: {
    width: 170,
    height: 170,
    marginTop: '30%',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#999',
    marginTop: 25
  }
})