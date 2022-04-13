import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {View,Text,Image,TouchableOpacity} from 'react-native';

const RewardPage=props=>{
    const navigation=useNavigation();
    const onMoved=()=>{
        console.log("rewared");
      navigation.navigate('Viewpager1');
    }
        return(
<View style={{backgroundColor:"#1aa3ff",height:'100%',width:'100%',padding:20}}>
    <TouchableOpacity onPress={()=>onMoved()}>
   <Text style={{color:"white",fontSize:25,alignSelf:'center',marginTop:150,fontWeight:'normal'}}>Get Rewarded</Text>
   </TouchableOpacity>
    <Image source={require('../assets/reward_new.png')} style={{height:110,width:100,marginTop:20,alignSelf:'center'}}/>

<Text style={{color:"white",fontSize:21,fontWeight:'normal',padding:20}}>On every purchase earn reward points by scanning the coupons or submitting the code </Text>
    </View>
    );
}
export default RewardPage;