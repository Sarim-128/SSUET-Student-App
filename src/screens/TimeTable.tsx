import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TimeTable = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView
        horizontal
      >
        <Image source={require('../assets/images/others/timetable.png')} />
      </ScrollView>
    </View>
  )
}

export default TimeTable

const styles = StyleSheet.create({
})