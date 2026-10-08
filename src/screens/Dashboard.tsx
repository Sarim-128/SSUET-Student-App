import { Alert, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { studentData } from '../data/studentData'
import { DrawerActions } from '@react-navigation/native'

const Dashboard = ({ navigation }: any) => {

    const handleLogout = () => {
        Alert.alert(
            'Logout',
            'Are you sure you want to logout?',
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Logout', style: 'destructive', onPress: () => navigation.navigate('Login') }
            ]
        )
    }

    return (
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>

            <StatusBar barStyle='dark-content' />

            {/* HEADER SECTION */}
            < View style={styles.headerContainer} >

                <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                    <Image style={styles.headerIcon} source={require('../assets/images/dashboard/menu.png')} />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>Dashboard</Text>

                <TouchableOpacity style={styles.iconBtn} onPress={handleLogout}>
                    <Image style={styles.headerIcon} source={require('../assets/images/dashboard/logout.png')} />
                </TouchableOpacity>

            </View >

            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>

                {/* INFO SECTION */}

                <View style={styles.profileCard}>
                    <Text style={styles.infoHeading}>{studentData.full_name}</Text>
                    <Text style={styles.infoSubText}>Roll No: {studentData.student_id}</Text>
                    <View style={styles.profileBadge}>
                        <Text style={styles.profileBadgeText}>{studentData.section}</Text>
                    </View>
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
                <View style={[styles.sectionContainer, { marginBottom: 100 }]}>

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
        backgroundColor: '#FFFFFF',
    },
    headerContainer: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 14,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E9F2',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1E293B',
    },
    iconBtn: {
        padding: 4,
    },
    headerIcon: {
        width: 22,
        height: 22,
    },
    scrollContainer: {
        padding: 15,
        backgroundColor: '#F4F6F9',
    },
    sectionContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 14,
        marginBottom: 20,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },

    HeadingContainer: {
        backgroundColor: '#F64E60',
        paddingHorizontal: 16,
        paddingVertical: 14,
        justifyContent: 'center',
    },
    HeadingText: {
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 18,
    },


    // INFO SECTION
    profileCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 14,
        padding: 20,
        marginBottom: 20,
        elevation: 2,
    },
    profileBadge: {
        alignSelf: 'flex-start',
        backgroundColor: '#EEF2FF',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 6,
        marginBottom: 8,
        marginTop: 8,
    },
    profileBadgeText: {
        color: '#4F46E5',
        fontWeight: '600',
        fontSize: 12,
    },
    infoHeading: {
        fontSize: 20,
        fontWeight: '700',
        color: '#0F172A',
        marginBottom: 4,
    },
    infoSubText: {
        fontSize: 14,
        color: '#64748B',
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
        backgroundColor: '#4F46E5',
        paddingVertical: 12,
        borderRadius: 10,
        marginVertical: 16,
        width: '80%',
        alignItems: 'center',
        elevation: 3,
    },
    viewBtnText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#FFFFFF',
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