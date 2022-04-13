import { NavigationContainer, useNavigation,useRoute } from "@react-navigation/native";
import React,{useState }from "react";
import {View,Text,StatusBar,Image,StyleSheet,TouchableOpacity,TextInput} from 'react-native';

import DefaultTextInput from "../components/DefautTextInput";


const RegisterPage= props=>{
    const route= useRoute();
//   const {mobile} = route.params;
    const navigation = useNavigation();
    const[name,setName]=useState();
    console.log(name);
//    constructor(props)
//    {
//        super(props);
//        this.state={
//            mobileNo:'',
//        }
//    }
   const onClickListener=()=>{
       console.log("clickedContinue");
    //    setMobileNo('');
       navigation.navigate('MainPage');
   }
   const onclick=()=>{
       console.log("onClicked123");
       console.log(name)
   }
   
    
    return(
        <View style={{backgroundColor:'white',flex:1,justifyContent:'center',alignItems:'center',paddingBottom:'60%'}}>
        {/* <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/> */}
        
       <Image source={require('../assets/logo.png')} style={{alignSelf:'center',marginTop:100}}/>
       {/* <DefaultTextInput 
    value={name}
    onChangeText={(text)=>setName(text)}
    
    
        placeholder="  Enter your name"/> */}
        <TextInput style={styles.TextInput}
    value={name}
    onChangeText={(number)=>setName(number)}
    
        placeholder="   Enter your name"/>
         <TouchableOpacity style={styles.buttonContainer} onPress={()=>onClickListener()}>
            <Text style={styles.LoginText}>Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={()=>onclick()}>
            <Text style={styles.LoginText}>Skip</Text>
        </TouchableOpacity>
    </View>
    )};

const styles=StyleSheet.create({
    maContainer:{
        height:'100%',
        width:'100%',
  backgroundColor:'#FFFFFF'
    },
    container:{
        flex:1,
        flexDirection:'row',
        width:276,
        width:276,
        marginTop:33,
        marginLeft:47,
        marginRight:47
    },
    
    logoText:{
        color:'#696969',
        width:280,
        height:24,
        marginTop:423,
        marginLeft:53,
        marginRight:44

    },  
    logoImage:{
        marginTop:40,
          marginLeft:120,
          },
          forgetText:{
              color:'#337ab7',
              fontSize:14,
            textAlign:'right',
            marginRight:30,
            fontWeight:'normal'
          },
          LoginText:{
              color:'#FFFFFF',
              fontSize:14
        
         },
         TextInput: {
            borderWidth: 2,
            borderColor: '#EFEFEF',
            color: '#64549C',
            fontWeight: '500',
            backgroundColor: 'white',
            fontFamily: 'Inter-SemiBold',
            width: 326,
            fontSize:16,
            height: 48,
            alignContent:'center',
          marginTop:8,
          borderTopEndRadius:15,
          borderTopLeftRadius:15,
          borderTopRightRadius:15,
          borderTopStartRadius:15,
          borderBottomLeftRadius:15,
          borderBottomEndRadius:15,
          borderBottomRightRadius:15,
          borderBottomStartRadius:15
          
          },
          buttonContainer: {
            height:46,
           backgroundColor:'#00BFFF',
            justifyContent: 'center',
            alignItems: 'center',
            width:326,
            marginTop:20,
            borderTopEndRadius:15,
  borderTopLeftRadius:15,
  borderTopRightRadius:15,
  borderTopStartRadius:15,
  borderBottomLeftRadius:15,
  borderBottomEndRadius:15,
  borderBottomRightRadius:15,
  borderBottomStartRadius:15
          },
});

export default RegisterPage;