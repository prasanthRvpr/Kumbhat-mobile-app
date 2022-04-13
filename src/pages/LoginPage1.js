import { LOGICAL_OPERATORS } from "@babel/types";
import { NavigationContainer, useNavigation , useRoute } from "@react-navigation/native";
import React,{useState, useEffect}from "react";
import {View,Text,TextInput,StatusBar,Image,StyleSheet,TouchableOpacity} from 'react-native';

import DefaultTextInput from "../components/DefautTextInput";
import OtpPage from "./OtpPage";

const LoginPage1= ()=>{
    const route= useRoute();
    const navigation = useNavigation();
    // const {mobile} = route.params;
    const[ mobile,setMobile]=useState('');
    const [company, setCompany] = useState('17');
    const[message,setMessage] = useState('');
    const [Username,setUsername] = useState('');
    const [Password,setPassword] = useState('');
    const [otp ,setOtp] = useState();
    // return <Text>{mobile}</Text>;
    
    // useEffect (() =>{
        
    //     });
//    constructor(props)
//    {
//        super(props);
//        this.state={
//            mobileNo:'',
//        }
//    }

const onClickListener= async()=>{
    
  
    const requestOptions = {
      method: 'POST',
      headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Basic cGF5czpwYXlzIUAjJCVe',
          'My-Custom-Header': 'foobar'
      },
      body: JSON.stringify({  
        cck123:company,
       mck123:mobile,
       lck123:1,
        Username: 'pays',
        Password:'pays!@#$%^'
      
      })
  };
  fetch('https://dev.pays.net.in:8444/Pays/umnbv/lcjk3', requestOptions)
      .then(response => response.json())
      .then(data =>console.log(data));
      if(mobile !='' && company=='17')
      navigation.navigate('OtpPage',{
          mobile:mobile
      });
}
//     try{
// await fetch('https://dev.pays.net.in:8444/Pays/businessUser/login', {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     company: '17',
//     mobile: 9626021124
   
//   })
// }).then(res=>res.json())
// .then(resData=>{
//   console.log('response',resData);
//     alert(resData.message);
// })

//        navigation.navigate('OtpPage');
// }

// catch(err)
// {
// console.log('error',err);

// }
// }
//    const onClickListener=()=>{
//     // try {
//         fetch(
//         'https://dev.pays.net.in:8444/Pays/businessUser/login', {
//             method: 'POST',
//             headers: {
//               Accept: 'application/json',
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 setMobile: 9626021124,
//                 setCompany: '37'
//             })
//           });
//         // {method: 'POST'}
//         // ).then((responce)=> responce.json()).
//         // then((json)=>{
//         //     setMobile(mobile);
//         // })
//         // console.log(responce.responce.data);
       
//         // } 
//         // catch (error) {
//         // console.error(error);
//         // }
//        console.log("clicked");
//     //    setMobileNo('');
//     if(mobile !='' && company=='37')
//        navigation.navigate('OtpPage');
//    }
   
    console.log(mobile);
    return(
        <View style={{backgroundColor:'white',flex:1,alignItems:'center' ,justifyContent:'center',paddingBottom:'60%'}}>
        {/* <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/> */}
        
       <Image source={require('../assets/logo.png')} style={{alignSelf:'center',marginTop:100}}/>
       <TextInput style={styles.TextInput} keyboardType='numeric'
    value={mobile}
    onChangeText={(number)=>setMobile(number)}
    
        placeholder="  Enter Your mobile number"/>
         <TouchableOpacity style={styles.buttonContainer} onPress={()=>onClickListener()}>
            <Text style={styles.LoginText}>Login</Text>
        </TouchableOpacity>
    </View>
    )};

const styles=StyleSheet.create({
    maContainer:{
        height:'100%',
        width:'100%',
  backgroundColor:'#FFFFFF'
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

export default LoginPage1;