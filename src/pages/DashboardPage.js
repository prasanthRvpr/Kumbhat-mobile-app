import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation ,useRoute } from "@react-navigation/native";
import React, { useState , useEffect } from "react";
import {View,Text,Image,TouchableOpacity,PermissionsAndroid} from 'react-native';
import ImageComponent from "../components/ImageComponent";
import GetLocation from 'react-native-get-location'
import Geolocation from 'react-native-geolocation-service';
// import Camera from 'react-native-camera';
const DashboardPage=props=>{
    const route= useRoute();
  // const {name} = route.params;
  // const {mobile} = route.params;
  // const {name} =  route.params.name;
  // const mobile = navigation.getParam('mobile');
    const navigation=useNavigation();
    const Tab=createBottomTabNavigator();
     const onMoved=()=>{
    //   navigation.navigate('Authenticate');
    }
    
    const onRecharge=()=>{
        console.log("Recharge");
        navigation.navigate('RechargePage');

    }
    const onBank=()=>{
        console.log("BankPage");
        navigation.navigate('BankPage');
    }
    const onDth=()=>{
        console.log("DthPage");
        navigation.navigate('DthPage');
    }
    const onPay=()=>{
        console.log("paytmPage");
        navigation.navigate('PaytmPage');
    }
    const onNotif=()=>{
        console.log("NotificationPage");
        navigation.navigate("NotificationPage");
    }
    const onCamera=()=>{
        
        
    }
    const onProfile=()=>{
        console.log("Profile");
        navigation.navigate("Profile");
    }
    const onBalance=()=>{
        console.log("ViewBalance");
        navigation.navigate("ViewBalance");
    };
    // const [currentLongitude,setCurrentLongitude] = useState('...');
    // const [currentLatitude,setCurrentLatitude] = useState('...');
    // const [locationStatus,setLocationStatus] = useState('');
    
    //   useEffect(() => {
    //     const requestLocationPermission = async () => {
    //       if (Platform.OS === 'android') {
    //         getOneTimeLocation();
    //         subscribeLocationLocation();
    //       } else {
    //         try {
    //           const granted = await PermissionsAndroid.request(
    //             PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    //             {
    //               title: 'Location Access Required',
    //               message: 'This App needs to Access your location',
    //             },
    //           );
    //           if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //             //To Check, If Permission is granted
    //             getOneTimeLocation();
    //             subscribeLocationLocation();
    //           } else {
    //             setLocationStatus('Permission Denied');
    //           }
    //         } catch (err) {
    //           console.warn(err);
    //         }
    //       }
    //     };
    //     requestLocationPermission();
    //     return () => {
    //       Geolocation.clearWatch(watchID);
    //     };
    //   }, []);
    
    //   const getOneTimeLocation = () => {
    //     setLocationStatus('Getting Location ...');
    //     Geolocation.getCurrentPosition(
    //       //Will give you the current location
    //       (position) => {
    //         setLocationStatus('You are Here');
    
    //         //getting the Longitude from the location json
    //         const currentLongitude = 
    //           JSON.stringify(position.coords.longitude);
    
    //         //getting the Latitude from the location json
    //         const currentLatitude = 
    //           JSON.stringify(position.coords.latitude);
    
    //         //Setting Longitude state
    //         setCurrentLongitude(currentLongitude);
            
    //         //Setting Longitude state
    //         setCurrentLatitude(currentLatitude);
    //       },
    //       (error) => {
    //         setLocationStatus(error.message);
    //       },
    //       {
    //         enableHighAccuracy: false,
    //         timeout: 30000,
    //         maximumAge: 1000
    //       },
    //     );
    //   };
    //   const subscribeLocationLocation = () => {
    //     watchID = Geolocation.watchPosition(
    //       (position) => {
    //         //Will give you the location on location change
            
    //         setLocationStatus('You are Here');
    //         console.log(position);
    
    //         //getting the Longitude from the location json        
    //         const currentLongitude =
    //           JSON.stringify(position.coords.longitude);
    
    //         //getting the Latitude from the location json
    //         const currentLatitude = 
    //           JSON.stringify(position.coords.latitude);
    
    //         //Setting Longitude state
    //         setCurrentLongitude(currentLongitude);
    
    //         //Setting Latitude state
    //         setCurrentLatitude(currentLatitude);
    //       },
    //       (error) => {
    //         setLocationStatus(error.message);
    //       },
    //       {
    //         enableHighAccuracy: false,
    //         maximumAge: 1000
    //       },
    //     );
    //   };
    useEffect(()=>{
      Geolocation.getCurrentPosition(
        (position) => {
            console.log(position);
        },
        (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
    })
    
    
  
    return(
<View style={{backgroundColor:"#1aa3ff",flex:1,justifyContent:'center',alignItems:'center',paddingBottom:'20%'}}>
    <View style={{flexDirection:'row',marginTop:'-10%'}}>
    <Image source={require('../assets/onlylogo.png')} style={{height:45,width:45,backgroundColor:'white',borderRadius:23,marginRight:'70%'}}/>
     <TouchableOpacity onPress={()=>onNotif()}> 
    <Image source={require('../assets/whiteBell.png')} style={{height:30,width:30}}/>
    </TouchableOpacity>
    
    </View>
    <View style={{flexDirection:'row',marginTop:'6%',marginRight:'55%',alignItems:'flex-start'}}>
        <View style={{}}>
    <TouchableOpacity style={{marginRight:'10%'}} onPress={()=>onProfile()}>
    <Image source={require('../assets/whiteProfilee.png')} style={{height:41,width:40,marginLeft:'-25%',borderRadius:20}}/>
    </TouchableOpacity>  
    </View>
    <View>
     <Text style={{color:"white",fontSize:16,paddingHorizontal:10,marginTop:5,marginLeft:'10%',marginTop:9}}>Welcome !</Text>
     </View>
   </View>
   <View style={{width:'90%'}}>
   <TouchableOpacity onPress={()=>onBalance()}>
       <View style={{flexDirection:'row',borderStyle:'dotted',borderWidth:1,borderColor:'white',borderRadius:15,marginTop:20,justifyContent:'space-between',height:36,paddingHorizontal:3,paddingVertical:2}}>
   <Text style={{color:'white',fontWeight:'normal',fontSize:20}}>  Wallet Balance :</Text>
   <Text style={{color:'white',fontWeight:'normal',fontSize:20}}>₹ 0  </Text>
   </View>
   </TouchableOpacity>
   
   {/* <TouchableOpacity onPress={()=>onMoved()}> */}
   {/* <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
         
        </Camera> */}
         <TouchableOpacity onPress={()=>onCamera()}> 
    <Image source={require('../assets/qrScanner.jpg')} style={{height:65,width:65,alignSelf:'center',marginVertical:16,borderRadius:28}}/>
    </TouchableOpacity>
   {/* </TouchableOpacity> */}
   <Text style={{color:'white',fontSize:14,alignSelf:'center'}}>Tap to verify product</Text>
   <Text style={{color:'white',fontSize:14,alignSelf:'center',marginTop:20}}>Redeem</Text>
   </View>
   <View style={{height:'35%',width:'90%',backgroundColor:'white',borderRadius:15,marginTop:10}}>
       <View style={{flexDirection:'row',marginTop:20}}>
           <TouchableOpacity onPress={()=>onRecharge()}>    
               <ImageComponent source={require('../assets/recharge-removebg-preview.png')} Title="Recharge"/>
           </TouchableOpacity>
  <TouchableOpacity onPress={()=>onDth()}>
    <ImageComponent style={{marginLeft:100}} source={require('../assets/dth_new-removebg-preview.png')} Title="DTH"/>
    </TouchableOpacity>
    </View>
    <View style={{flexDirection:'row',marginTop:20}}>
        <TouchableOpacity onPress={()=>onBank()}>
        <ImageComponent source={require('../assets/bank-removebg-preview.png')} Title="Bank Transfer"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>onPay()} >
        <ImageComponent style={{marginLeft:70}}source={require('../assets/paytm.png')} Title="Paytm" />
        </TouchableOpacity>
    </View>
   </View>
   {/* <MyTabs/> */}
    </View>
    );
}
export default DashboardPage;
