import {BottomTabNavigator} from react-navigation/bottom-tabs;
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '../Screens/Feed';
import CreatePost from '../Screens/CreatePost';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const BottomTabNavigator=()=>{
    return(
        <Tab.Navigator>
        ScreenOptions={({route}) => ({
            tabBarIcon:({focused, color,size}) =>{
                let iconName;
                if (route.name === 'Feed') {
                    iconName= focused
                    ? 'book'
                    : 'book-outline'
                }else if (route.name === 'CreatePost') {
                    iconName=focused ? 'create' : 'create-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            }
        })}
tabBarOptions={{
    activeTintColor:'tomato',
    inactiveTintColor:'gray',
}}
<Tab.Screen name="Feed" component={Feed} />
<Tab.Screen name="CreatePost" component={CreatePost}/>
</Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#15193c"
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
      flex: 0.07,
      flexDirection: "row"
    },
    appIcon: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center"
    },
    iconImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain"
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: "center"
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(28),
      fontFamily: "Bubblegum-Sans"
    },
    cardContainer: {
      flex: 0.85
    }
  });
  