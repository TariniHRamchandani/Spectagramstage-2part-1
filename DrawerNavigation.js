import {CreateDrawerNavigation} from '@react-navigation/drawer';
import React from 'react';
import TabNavigotor from './TabNavigator';
import Profile from '../Screens/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Drawer = createDrawerNavigator();

const DrawerNavigator=() => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={TabNavigotor} />
            <Drawer.Screen name='Profile' component={Profile}/>
            </Drawer.Navigator>
    );
};

export default DrawerNavigator;