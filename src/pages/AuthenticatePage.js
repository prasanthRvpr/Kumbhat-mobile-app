import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {View,Text,Image,TouchableOpacity} from 'react-native';

const AuthenticatePage=props=>{
    const navigation=useNavigation();
    // const onNext=()=>{
    //     navigation.navigate('Rewarded');

    // }
        return(
<View style={{backgroundColor:"#1aa3ff",height:'100%',width:'100%',padding:20}}>
    {/* <TouchableOpacity onPress={()=>onNext()}> */}
   <Text style={{color:"white",fontSize:25,alignSelf:'center',marginTop:150,fontWeight:'normal'}}>Authenticate</Text>
   {/* </TouchableOpacity> */}
    <Image source={require('../assets/authenticate.png')} style={{height:110,width:100,marginTop:30,alignSelf:'center'}}/>

<Text style={{color:"white",fontSize:21,fontWeight:'normal',padding:20}}>Verify if the product being purchased is a genuine product by the brand</Text>
    </View>
    );
}
export default AuthenticatePage;