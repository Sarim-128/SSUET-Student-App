import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { studentData } from '../data/studentData'

const Annoucements = () => {
  return (
    <ScrollView>

      <View style={styles.headerContainer}>

        <View style={[styles.headerItem, { width: '20%' }]}>
          <Text style={styles.headerText}>Date</Text>
        </View>

        <View style={[styles.headerItem, { width: '80%' }]}>
          <Text style={styles.headerText}>Annoucement</Text>
        </View>

      </View>

      {studentData.annoucements.map((item, index) => (
        <View key={index} style={styles.bodyContainer}>

          <View style={[styles.bodyItem, { width: '20%' }]}>
            <Text style={{ fontSize: 12 }}>{item.date}</Text>
          </View>

          <View style={[styles.bodyItem, { width: '80%', }]}>
            <Text style={{ fontSize: 13, fontWeight: 'bold' }}>{item.title}</Text>
            <Text style={{ fontSize: 12 }}>{item.message}</Text>
          </View>

        </View>
      ))}
    </ScrollView>
  )
}

export default Annoucements

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#3699FF',
    flexDirection: 'row'
  },
  headerItem: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderRightWidth: 1,
    borderRightColor: '#c5c5c5',
  },
  headerText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  bodyContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#d5d5d5',

  },
  bodyItem: {
    padding: 10,
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: '#c5c5c5',
  },
})