import { useNavigation } from "@react-navigation/native";
import React,{Component}from "react";
import {View,Text,TouchableOpacity,Image,StatusBar} from 'react-native';



const Splashpage = props =>{
    const navigation = useNavigation();
   
    React.useEffect(()=>
    {
        setTimeout(() => {
            navigation.navigate('Language');
          }, 5000);
    })
    
    return(
        <View style={{backgroundColor:'white',height:'100%',width:'100%'}}>
            {/* <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/> */}

           <Image source={require('../assets/logo.png')} style={{alignSelf:'center',marginTop:250}}/>
        </View>
    )};

export default Splashpage;