import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { studentData } from '../data/studentData'
import TimeTable from './TimeTable'

const Dashboard = ({ navigation }: any) => {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollContainer}>

                {/* INFO SECTION */}
                <View style={[styles.sectionContainer, { padding: 10, }]}>

                    <Text style={styles.infoHeading}>Overview</Text>
                    <Text style={styles.info}>Name: {studentData.full_name} </Text>
                    <Text style={styles.info}>Roll No: {studentData.student_id} </Text>
                    <Text style={styles.info}>Section: {studentData.section} </Text>

                </View>

                {/* STATS SECTION */}
                <View style={styles.sectionContainer}>

                    <View style={styles.HeadingContainer}>
                        <Text style={styles.HeadingText}>My Stats</Text>
                    </View>


                    <View style={styles.cardWrapper}>
                        <View style={[styles.cardContainer, { backgroundColor: '#FFF4DE' }]}>
                            <Image style={styles.cardIcon} source={require('../assets/images/dashboard/currentYear.png')} />
                            <Text style={[styles.cardText, { color: '#FFA800' }]}>Current Year: {studentData.current_year}</Text>
                        </View>

                        <View style={[styles.cardContainer, { backgroundColor: '#E1F0FF' }]}>
                            <Image style={styles.cardIcon} source={require('../assets/images/dashboard/currentGpa.png')} />
                            <Text style={[styles.cardText, { color: '#3699FF' }]}>CGPA: {studentData.cgpa}</Text>
                        </View>


                        <View style={[styles.cardContainer, { backgroundColor: '#FFE2E5' }]}>
                            <Image style={styles.cardIcon} source={require('../assets/images/dashboard/registeredCourses.png')} />
                            <Text style={[styles.cardText, { color: '#F64E60' }]}>Registered Courses: {studentData.enrolled_courses.length} </Text>
                        </View>

                        <View style={[styles.cardContainer, { backgroundColor: '#C9F7F5' }]}>
                            <Image style={styles.cardIcon} source={require('../assets/images/dashboard/attendance.png')} />
                            <Text style={[styles.cardText, { color: '#1BC5BD' }]}>Average Attendance: {studentData.average_attendance}%</Text>
                        </View>
                    </View >


                </View >


                {/*  COURSES SECTION */}
                <View style={styles.sectionContainer}>

                    <View style={styles.HeadingContainer}>
                        <Text style={styles.HeadingText}>My Courses</Text>
                    </View>

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

                            <View style={styles.tableBodyContainer}                            >
                                <View style={[styles.tableBodyItem, { width: 50 }, styles.borderRight]}>
                                    <Text style={styles.tableBodyText}>1</Text>
                                </View>

                                <View style={[styles.tableBodyItem, { width: 120 }, styles.borderRight]}>
                                    <Text style={styles.tableBodyText}>{studentData.enrolled_courses[0].title}</Text>
                                </View>

                                <View style={[styles.tableBodyItem, { width: 80 }, styles.borderRight]}>
                                    <Text style={styles.tableBodyText}>{studentData.enrolled_courses[0].code}</Text>
                                </View>

                                <View style={[styles.tableBodyItem, { width: 80 }, styles.borderRight]}>
                                    <Text style={styles.tableBodyText}>{studentData.enrolled_courses[0].credit_hours}</Text>
                                </View>

                                <View style={[styles.tableBodyItem, { width: 120 }, styles.borderRight]}>
                                    <Text style={styles.tableBodyText}>{studentData.enrolled_courses[0].instructor}</Text>
                                </View>

                                <View style={[styles.tableBodyItem, { width: 80 }, styles.borderRight]}>
                                    <Text style={styles.tableBodyText}>{studentData.enrolled_courses[0].room}</Text>
                                </View>
                            </View>

                            <View style={styles.tableBodyContainer}                            >
                                <View style={[styles.tableBodyItem, { width: 50 }, styles.borderRight]}>
                                    <Text style={styles.tableBodyText}>2</Text>
                                </View>

                                <View style={[styles.tableBodyItem, { width: 120 }, styles.borderRight]}>
                                    <Text style={styles.tableBodyText}>{studentData.enrolled_courses[1].title}</Text>
                                </View>

                                <View style={[styles.tableBodyItem, { width: 80 }, styles.borderRight]}>
                                    <Text style={styles.tableBodyText}>{studentData.enrolled_courses[1].code}</Text>
                                </View>

                                <View style={[styles.tableBodyItem, { width: 80 }, styles.borderRight]}>
                                    <Text style={styles.tableBodyText}>{studentData.enrolled_courses[1].credit_hours}</Text>
                                </View>

                                <View style={[styles.tableBodyItem, { width: 120 }, styles.borderRight]}>
                                    <Text style={styles.tableBodyText}>{studentData.enrolled_courses[1].instructor}</Text>
                                </View>

                                <View style={[styles.tableBodyItem, { width: 80 }, styles.borderRight]}>
                                    <Text style={styles.tableBodyText}>{studentData.enrolled_courses[1].room}</Text>
                                </View>
                            </View>

                        </View>
                    </ScrollView>

                    <TouchableOpacity onPress={() => navigation.navigate('MyCourses')} style={styles.viewBtn}>
                        <Text style={styles.viewBtnText}>View All</Text>
                    </TouchableOpacity>

                </View>

                {/* TIME TABLE SECTION */}
                <View style={styles.sectionContainer}>

                    <View style={styles.HeadingContainer}>
                        <Text style={styles.HeadingText}>Time Table</Text>
                    </View>

                    <Image style={{ width: '100%', height: 210, borderBottomWidth: 3, borderBottomColor: '#000' }} source={require('../assets/images/others/timetable.png')} />

                    <TouchableOpacity onPress={() => navigation.navigate('TimeTable')} style={styles.viewBtn}>
                        <Text style={styles.viewBtnText}>Full View</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView >
        </SafeAreaView >
    )
}

export default Dashboard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e2e2e2',
    },
    scrollContainer: {
        padding: 15,
    },

    sectionContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        elevation: 10,
        marginBottom: 30,
    },

    HeadingContainer: {
        backgroundColor: '#F64E60',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        borderTopEndRadius: 10,
        borderTopLeftRadius: 10,
    },
    HeadingText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 22,
        marginLeft: 8,
    },

    // INFO SECTION
    infoHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    info: {
        fontSize: 16
    },

    // CARD SECTION
    cardWrapper: {
        padding: 15,
        width: '100%',
    },
    cardContainer: {
        height: 120,
        justifyContent: 'center',
        marginBottom: 25,
        borderRadius: 10,
        padding: 20,
        elevation: 4
    },
    cardIcon: {
        width: 50,
        height: 50,
        marginBottom: 10,
    },
    cardText: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    // COURSE SECTION
    courseInfo: {
        marginBottom: 2,
    },
    viewBtn: {
        alignSelf: 'center',
        backgroundColor: '#7337EE',
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 8,
        marginVertical: 15,
        width: '70%',
        justifyContent: 'center',
        height: 60
    },
    viewBtnText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center'
    },


    // TABLE SECTION


    tableContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    tableWrapper: {

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