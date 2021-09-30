import React, { Component } from 'react';
import { FlatList, Text, View,Image, Platform, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class DailypicScreen extends Component {
    render() {
        return(
            <View style={StyleSheet.container}>
            <SafeAreaView style={StyleSheet.droidSafeArea}></SafeAreaView>
            </View>
            
            <View style={StyleSheet.appTitle}>
            <Image 
            source={require("../assetss/logo.png")} 
            style={StyleSheet.iconImage}></Image>
             </View>
             <View style={StyleSheet.appTitleTextContainer}>
                 <Text style={StyleSheet.appTitleText}>SPECTAGRAM</Text>
             </View>
             <View>

             <View style={styles.cardContainer}>
             <FlatList
             keyExtractor={this.keyExtractor}
             data={posts}
             renderItem={this.renderItem}
             />
             </View>
             </View>
        )
        
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
        backgroundColor:"black"
    },
    droidSafeArea:{
        marginTop: Platform.OS ==="android"? StatusBar.currentHeight:RFValue(35)
    },
    appTitle:{
        flex:0.07,
        flexDirection:"row"
    },
    appIcon:{
        flex: 0.2,
        justifyContent:"center",
        alignItems:"center"
    },
    iconImage:{
        width:"100%",
        height:"100%",
        resizeMode:"contain"
    },
    appTitleTextContainer:{
        flex:0.8,
        justifyContent:"center"
    },
    appTitleText:{
        color:"white",
        fontSize:RFValue(28),
    },
    cardContainer:{
        flex:0.85
    }
});
