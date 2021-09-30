import React, { Component } from 'react';
import { FlatList, Text, View,Image, Platform, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';

render() {
    return(
      <View style={styles.container}>
          <View style={styles.cardContainer}>
              <View style={styles.authorContainer}>
                  <View style={styles.authorImageContainer}>
<Image  source={require("../assetss/profile_img.png")}
style={styles.profileImage}></Image>
<View></View>
                  </View>

              </View>

          </View>
      </View>
        
    )
}