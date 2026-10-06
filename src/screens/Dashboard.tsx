import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { studentData } from '../data/studentData'
import { DrawerActions,  } from '@react-navigation/native'

const Dashboard = ({ navigation }: any) => {

    const navigateMyCourses = () => {
        navigation.navigate('MyCourses');
    }

    const handleDrawer = () => {
       navigation.dispatch(DrawerActions.openDrawer())
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollContainer}>

                {/* INFO SECTION */}
                <View style={styles.infoContainer}>

                    <Text style={styles.infoHeading}>Overview</Text>
                    <Text style={styles.info}>Name: {studentData.full_name} </Text>
                    <Text style={styles.info}>Roll No: {studentData.student_id} </Text>
                    <Text style={styles.info}>Section: {studentData.section} </Text>

                </View>

                {/* STATS SECTION */}
                <View style={styles.statsContainer}>

                    <View style={styles.statsHeadingContainer}>
                        <Text style={styles.statsHeadingText}>My Stats</Text>
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
                <View style={styles.courseContainer}>

                    <View style={styles.statsHeadingContainer}>
                        <Text style={styles.statsHeadingText}>My Courses</Text>
                    </View>

                    <View style={styles.courseItem}>
                        <Text style={styles.courseTitle}>{studentData.enrolled_courses[0].title}</Text>
                        <Text style={styles.courseInfo}>Course Code: {studentData.enrolled_courses[0].code}</Text>
                        <Text style={styles.courseInfo}>Credit Hours: {studentData.enrolled_courses[0].credit_hours}</Text>
                        <Text style={styles.courseInfo}>Instructor: {studentData.enrolled_courses[0].instructor}</Text>
                        <Text style={styles.courseInfo}>Room No: {studentData.enrolled_courses[0].room}</Text>
                    </View>

                    <View style={styles.courseItem}>
                        <Text style={styles.courseTitle}>{studentData.enrolled_courses[1].title}</Text>
                        <Text style={styles.courseInfo}>Course Code: {studentData.enrolled_courses[1].code}</Text>
                        <Text style={styles.courseInfo}>Credit Hours: {studentData.enrolled_courses[1].credit_hours}</Text>
                        <Text style={styles.courseInfo}>Instructor: {studentData.enrolled_courses[1].instructor}</Text>
                        <Text style={styles.courseInfo}>Room No: {studentData.enrolled_courses[1].room}</Text>
                    </View>

                    <TouchableOpacity onPress={navigateMyCourses} style={styles.viewBtn}>
                        <Text style={styles.viewBtnText}>View All</Text>
                    </TouchableOpacity>

                    {/* {studentData.enrolled_courses.map((item) => (
                        <View style={styles.courseItem}>
                            <Text style={styles.courseTitle}>{item.title}</Text>
                            <Text style={styles.courseInfo}>{item.code}</Text>
                            <Text style={styles.courseInfo}>{item.credit_hours}</Text>
                            <Text style={styles.courseInfo}>{item.instructor}</Text>
                            <Text style={styles.courseInfo}>{item.room}</Text>
                        </View>
                    ))} */}

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

    // INFO SECTION

    infoContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
        elevation: 10,
        marginBottom: 30,
    },
    infoHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    info: {
        fontSize: 16
    },

    // CARD SECTION
    statsContainer: {
        backgroundColor: "#FFFFFF",
        alignItems: 'center',
        elevation: 10,
        borderRadius: 10,
        marginBottom: 30,
    },
    statsHeadingContainer: {
        backgroundColor: '#F64E60',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        borderTopEndRadius: 10,
        borderTopLeftRadius: 10,
    },
    statsHeadingText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 22,
        marginLeft: 8,
    },
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
    courseContainer: {
        backgroundColor: "#FFFFFF",
        elevation: 10,
        borderRadius: 10,
        marginBottom: 30,
    },
    courseItem: {
        padding: 15,
    },
    courseTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
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
    },
    viewBtnText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },


})