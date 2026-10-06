import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { studentData } from '../data/studentData'

const MyCourses = () => {
    return (

        <ScrollView style={styles.tableContainer}
            horizontal
        >
            <View style={styles.tableWrapper}>

                {/* HEADER */}
                <View style={styles.tableHeaderContainer}>

                    <View style={[styles.tableHeaderItem, { width: 50, }, styles.borderRight]}>
                        <Text style={styles.tableHeaderText}>NO.</Text>
                    </View>

                    <View style={[styles.tableHeaderItem, { width: 120, }, styles.borderRight]}>
                        <Text style={styles.tableHeaderText}>Name</Text>
                    </View>

                    <View style={[styles.tableHeaderItem, { width: 80, }, styles.borderRight]}>
                        <Text style={styles.tableHeaderText}>Course Code</Text>
                    </View>

                    <View style={[styles.tableHeaderItem, { width: 80, }, styles.borderRight]}>
                        <Text style={styles.tableHeaderText}>Credit Hours</Text>
                    </View>

                    <View style={[styles.tableHeaderItem, { width: 120, }, styles.borderRight]}>
                        <Text style={styles.tableHeaderText}>Instructor</Text>
                    </View>

                    <View style={[styles.tableHeaderItem, { width: 80, }, styles.borderRight]}>
                        <Text style={styles.tableHeaderText}>Room</Text>
                    </View>

                </View>

                {studentData.enrolled_courses.map((item, index) => (
                    <View
                        key={item.code}
                        style={[styles.tableBodyContainer, index % 2 === 1 && styles.alternativeRow]}
                    >

                        <View style={[styles.tableBodyItem, { width: 50 }, styles.borderRight]}>
                            <Text style={styles.tableBodyText}>{index + 1}</Text>
                        </View>

                        <View style={[styles.tableBodyItem, { width: 120 }, styles.borderRight]}>
                            <Text style={styles.tableBodyText}>{item.title}</Text>
                        </View>

                        <View style={[styles.tableBodyItem, { width: 80 }, styles.borderRight]}>
                            <Text style={styles.tableBodyText}>{item.code}</Text>
                        </View>

                        <View style={[styles.tableBodyItem, { width: 80 }, styles.borderRight]}>
                            <Text style={styles.tableBodyText}>{item.credit_hours}</Text>
                        </View>

                        <View style={[styles.tableBodyItem, { width: 120 }, styles.borderRight]}>
                            <Text style={styles.tableBodyText}>{item.instructor}</Text>
                        </View>

                        <View style={[styles.tableBodyItem, { width: 80 }, styles.borderRight]}>
                            <Text style={styles.tableBodyText}>{item.room}</Text>
                        </View>


                    </View>
                ))}

            </View>
        </ScrollView>

    )
}

export default MyCourses

const styles = StyleSheet.create({
    tableContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        elevation: 5,
    },
    tableWrapper: {
        borderRadius: 10,
    },
    tableHeaderContainer: {
        backgroundColor: '#3699FF',
        flexDirection: 'row',
        alignItems: 'stretch',
    },
    tableHeaderItem: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 5
    },
    tableHeaderText: {
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
    },
    tableBodyContainer: {
        flexDirection: 'row',
        alignItems: "stretch",
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E2E8F0',
    },
    alternativeRow: {
        backgroundColor: '#ededed'
    },
    tableBodyItem: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 5
    },
    tableBodyText: {
        color: '#333333',
        fontSize: 14,
        textAlign: 'center',
    },
    borderRight: {
        borderRightWidth: 1,
        borderRightColor: '#c5c5c5',
    },


})