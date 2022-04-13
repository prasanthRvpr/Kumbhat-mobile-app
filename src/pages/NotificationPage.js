import React from "react";
import {View,Text,Image,TouchableOpacity,StyleSheet} from 'react-native';

const NotificationPage= ()=>{
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'white',padding:20}}>
            <View style={{paddingBottom:200}}>
                <Image style={{height:50,width:50,alignSelf:'center'}} source={require('../assets/noNotific.webp')}></Image>
                <Text>No notification</Text>
            </View>
        </View>
    );
}
export default NotificationPage;