import React, { useState , useEffect ,useRef } from "react";
import { View,Text, Image ,TextInput,StyleSheet,TouchableOpacity,Button } from "react-native";
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { useLinkProps, useNavigation, useRoute } from "@react-navigation/native";
import RNOtpVerify from 'react-native-otp-verify';
import PropTypes from 'prop-types';
import SmsRetriever from "react-native-sms-retriever"
// import TimerText from './TimerText';

import LoginPage1 from "./LoginPage1";

const OtpPage = (props) =>{
  const route= useRoute();
  const {mobile} = route.params;
  const [data, setData] = useState([]);
  const[ res , setRes ] = useState();
  const [loading, setLoading] = useState(true);
  const [condition, setCondition] = useState(false)
    const [otp, setOtp] =React.useState();
    const [company, setCompany] = useState('17');
    const navigation=useNavigation();
//     const {otpRequestData, attempts} = props;
//     const [attemptsRemaining, setAttemptsRemaining] = useState(attempts);
//   const [otpArray, setOtpArray] = useState(['', '', '', '']);
//   const [submittingOtp, setSubmittingOtp] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   let resendOtpTimerInterval;
// let autoSubmitOtpTimerInterval;
// const autoSubmitOtpTimerIntervalCallbackReference = useRef();

// const RESEND_OTP_TIME_LIMIT = 30; // 30 secs
// const AUTO_SUBMIT_OTP_TIME_LIMIT = 4; // 4 secs

// const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(
//   RESEND_OTP_TIME_LIMIT,
// );
// // 0 < autoSubmitOtpTime < 4 to show auto submitting OTP text
// const [autoSubmitOtpTime, setAutoSubmitOtpTime] = useState(
//   AUTO_SUBMIT_OTP_TIME_LIMIT,
// );

    const onChangeNumber=()=>{
      navigation.navigate('LoginPage1');
    }
    
    console.log(mobile);

    //  const onVerify =() =>{
     
    const onVerify =() =>{
      console.log(otp);
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
          ock123:otp,
        
          Username: 'pays',
          Password:'pays!@#$%^'
        
        })
    };
     
     fetch('https://dev.pays.net.in:8444/Pays/umnbv/cvocjk3', requestOptions)
        .then(response => response.json())
        .then(data =>{  alert(data.data.message)
          if(data.data.message === 'Validate Successfully'){
         
          navigation.navigate('RegisterPage')
        }});
    }
    const onResend= async()=>{
      setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT);
      startResendOtpTimer();
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

  //   const autoSubmitOtpTimerIntervalCallback = () => {
  //     if (autoSubmitOtpTime <= 0) {
  //       clearInterval(autoSubmitOtpTimerInterval);
  
  //       // submit OTP
  //       onSubmitButtonPress();
  //     }
  //     setAutoSubmitOtpTime(autoSubmitOtpTime - 1);
  //   };

  //   const startResendOtpTimer = () => {
  //     if (resendOtpTimerInterval) {
  //       clearInterval(resendOtpTimerInterval);
  //     }
  //     resendOtpTimerInterval = setInterval(() => {
  //       if (resendButtonDisabledTime <= 0) {
  //         clearInterval(resendOtpTimerInterval);
  //       } else {
  //         setResendButtonDisabledTime(resendButtonDisabledTime - 1);
  //       }
  //     }, 1000);
  //   };
    
  //   useEffect(() => {
  //     // autoSubmitOtpTime value will be set after otp is detected,
  //     // in that case we have to start auto submit timer
  //     autoSubmitOtpTimerIntervalCallbackReference.current = autoSubmitOtpTimerIntervalCallback;
  //   });
  //   useEffect(() => {
  //     startResendOtpTimer();
  //   return () => {
  //     if (resendOtpTimerInterval) {
  //       clearInterval(resendOtpTimerInterval);
  //     }
  //   };
  // }, [resendButtonDisabledTime]);

    // useEffect(() => {
    //   // docs: https://github.com/faizalshap/react-native-otp-verify
  
    //   RNOtpVerify.getOtp()
    //     .then(p =>
    //       RNOtpVerify.addListener(message => {
    //         try {
    //           if (message) {
    //             const messageArray = message.split('\n');
    //             if (messageArray[2]) {
    //               const otp = messageArray[2].split(' ')[0];
    //               if (otp.length === 4) {
    //                 setOtpArray(otp.split(''));
  
    //                 // to auto submit otp in 4 secs
    //                 setAutoSubmitOtpTime(AUTO_SUBMIT_OTP_TIME_LIMIT);
    //                 startAutoSubmitOtpTimer();
    //               }
    //             }
    //           }
    //         } catch (error) {
    //           logErrorWithMessage(
    //             error.message,
    //             'RNOtpVerify.getOtp - read message, OtpVerification',
    //           );
    //         }
    //       }),
    //     )
    //     .catch(error => {
    //       logErrorWithMessage(
    //         error.message,
    //         'RNOtpVerify.getOtp, OtpVerification',
    //       );
    //     });
  
    //   // remove listener on unmount
    //   return () => {
    //     RNOtpVerify.removeListener();
    //   };
    // }, []);

  //  getHash = async () => {
  //     const hash = await RNSmsRetriever.getHash();
  //     const headers = new Headers();
  //     headers.append("Content-Type", "application/json");
  
  //     const body = { hash: hash };
  
  //     const options = {
  //       method: "POST",
  //       headers,
  //       mode: "cors",
  //       body: JSON.stringify(body)
  //     };
  
  //     fetch("<requestbin.com url>", options);
  //   };
 
  // _onSmsListenerPressed = async () => {
  //   try {
  //     const registered = await SmsRetriever.startSmsRetriever()
  //     console.log("Response: ", registered)
  //     if (registered) {
  //       SmsRetriever.addSmsListener(event => {
  //         console.log("MSG:", event.message)
  //         SmsRetriever.removeSmsListener()
  //       })
  //     }
  //   } catch (error) {
  //     console.log("ERROR", error)
  //   }
  // }
  _onPhoneNumberPressed = async () => {
    try {
    mobile = await SmsRetriever.requestPhoneNumber();
    } catch (error) {
    console.log(JSON.stringify(error));
    }
    };
   
    // Get the SMS message (second gif)
    _onSmsListenerPressed = async () => {
    try {
    const registered = await SmsRetriever.startSmsRetriever();
    if (registered) {
    SmsRetriever.addSmsListener(event => {
    console.log(event.message);
    SmsRetriever.removeSmsListener();
    }); 
    }
    } catch (error) {
    console.log(JSON.stringify(error));
    }
    };


        return(
    
        <View style={{alignItems:'center',padding:40,marginTop:80}}>
           <Image style={{height:70,width:65}} source={require('../assets/message.png')}></Image>
           <Text style={{padding:10,color:'#87CEFA',fontSize:15}}>Your OTP has been sent to</Text>
           <View style={{alignContent: 'space-around',flexDirection:'row',marginTop:2,marginBottom:2,height:40,width:150,borderStyle:'dotted',borderWidth:1,borderRadius:20,borderColor:'grey',padding:5}}>
           <Text style={{color:'grey',paddingTop:2,paddingRight:0,paddingLeft:15}}>{mobile}</Text>
           <TouchableOpacity onPress={()=>onChangeNumber()}>
           <Image style={{height:20,width:20}} source={require('../assets/pencil.png')}></Image>
           </TouchableOpacity>
           </View>
           {/* <TextInput keyboardType='numeric' style={{height:39,width:200,borderColor:'grey',borderStyle:'dotted',borderWidth:2,borderRadius:20,textAlign:'center'}}><Text style={{color:'grey'}}>9876543210</Text>
           <Image style={{height:20,width:20}} source={require('../../Asset/pencil.png')}></Image></TextInput> */}
           <OTPInputView
        pinCount={4}
        value={otp}
        autoComplete="sms-otp"
        onChangeText={(number)=>setOtp(number)}
        style={styles.otpView}
        codeInputFieldStyle={styles.underlineStyleBase}
        onCodeFilled={value => {
          console.log(value);
          setOtp(value);
        }}
      />
      
            <TouchableOpacity onPress={()=>onVerify()}>
            <Text style={{borderRadius:20,backgroundColor:'#87CEFA',padding:10,color:'white',paddingRight:30,paddingLeft:30}}>VERIFY</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop: 10}} onPress={()=>onResend()} >
            <Text style={{color:'#87CEFA'}}>RESEND CODE</Text>
            </TouchableOpacity>
            {/* <TimerText text={'Submitting OTP in'} time={autoSubmitOtpTime} /> */}

        </View>
    );
    
}
const styles = StyleSheet.create({
        borderStyleBase: {
          width: 30,
          height: 45
        },
      
        borderStyleHighLighted: {
          borderColor: "#87CEFA",
        },
      
        underlineStyleBase: {
          width: 45,
          height: 45,
          borderWidth: 1.5,
          borderBottomWidth: 1.5,
          borderRadius:10,
          borderColor: "#87CEFA",
        },
        otpView: {
            width: '80%',
            height: 200,
            color: 'black',
            justifyContent:'space-evenly',
          },
      
        underlineStyleHighLighted: {
          borderColor: "#87CEFA",
        },
      });
export default OtpPage

