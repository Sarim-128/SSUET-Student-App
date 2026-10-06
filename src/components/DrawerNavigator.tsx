import { View, Text, Image } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MyCourses from '../screens/MyCourses'
import Dashboard from '../screens/Dashboard'
import Attendance from '../screens/Attendance'
import Annoucements from '../screens/Annoucements'
import Exam from '../screens/Exam'
import TimeTable from '../screens/TimeTable'

const Drawer = createDrawerNavigator()

const MyDrawer = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerActiveTintColor: '#4899FF',
                drawerActiveBackgroundColor: '#F3F6F9',
            }}

        >

            <Drawer.Screen name='Dashboard' component={Dashboard}
                options={{
                    drawerIcon: ({ color, size }: any) => (
                        <Image source={require('../assets/images/drawer/dashboard.png')}
                            style={{ width: size, height: size, tintColor: color }}
                        />
                    )
                }}
            />

            <Drawer.Screen name='MyCourses' component={MyCourses}
                options={{
                    drawerIcon: ({ color, size }: any) => (
                        <Image source={require('../assets/images/drawer/courses.png')}
                            style={{ width: size, height: size, tintColor: color }}
                        />
                    )
                }}
            />

            <Drawer.Screen name='TimeTable' component={TimeTable}
                options={{
                    drawerIcon: ({ color, size }: any) => (
                        <Image source={require('../assets/images/drawer/timeTable.png')}
                            style={{ width: size, height: size, tintColor: color }}
                        />
                    )
                }}
            />

            <Drawer.Screen name='Attendance' component={Attendance}
                options={{
                    drawerIcon: ({ color, size }: any) => (
                        <Image source={require('../assets/images/drawer/attendance.png')}
                            style={{ width: size, height: size, tintColor: color }}
                        />
                    )
                }}
            />

            <Drawer.Screen name='Announcement' component={Annoucements}
                options={{
                    drawerIcon: ({ color, size }: any) => (
                        <Image source={require('../assets/images/drawer/announcements.png')}
                            style={{ width: size, height: size, tintColor: color }}
                        />
                    )
                }}
            />

            <Drawer.Screen name='Exam' component={Exam}
                options={{
                    drawerIcon: ({ color, size }: any) => (
                        <Image source={require('../assets/images/drawer/exam.png')}
                            style={{ width: size, height: size, tintColor: color }}
                        />
                    )
                }}
            />
        </Drawer.Navigator >
    )
}

export default MyDrawer