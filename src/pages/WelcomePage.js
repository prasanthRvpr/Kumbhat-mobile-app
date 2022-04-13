import React from "react";
import { View,Text, Image,TouchableOpacity} from "react-native";
import { useLinkProps, useNavigation, useRoute } from "@react-navigation/native";
 const WelcomePage =() =>{
    const navigation=useNavigation();
     const onSkip =()=>{
        navigation.navigate('LoginPage1');
     }
     return(
         <View style={{padding:27,alignItems: 'center',backgroundColor:'white',flex:1}}>
             <View style={{alignSelf: "flex-end"}}>
                 <TouchableOpacity onPress={()=>onSkip()}>
                 <Text style={{color:'#87CEFA'}}>Skip</Text>
                 </TouchableOpacity>
             </View>
             <Image style={{marginTop:50}} 
             source={require('../assets/logo.png')}/>
             <Text style={{fontSize: 20,marginTop:10,
               fontFamily: "Microsoft YaHei UI", fontWeight:'bold', color: '#87CEFA'}}>Welcomes You</Text>
               <View style={{justifyContent:'space-evenly'}}>
                   <View style={{flexDirection:'row', justifyContent:'center'}}>
                   <Image style={{marginTop:40,height:70,width:65}} source={require('../assets/fingerPrint.png')}></Image>
                   <Text style={{paddingTop:7,marginTop:48,borderColor:'skyblue',borderWidth:2,borderRadius:20,width:270,textAlign:'center',alignItems:'center',height:37,borderStyle:'dotted', color: '#87CEFA',textAlign:'center'}}>Authenticate your Brand</Text>
                   </View>
                   <View style={{flexDirection:'row', justifyContent:'center'}}>
                   <Image style={{marginTop:40,height:70,width:65}} source={require('../assets/batch.png')}></Image>
                   <Text style={{paddingTop:7,marginTop:48,borderColor:'skyblue',borderWidth:2,borderRadius:20,width:270,textAlign:'center',alignItems:'center',height:37,borderStyle:'dotted', color: '#87CEFA',textAlign:'center'}}>Brand Recognition</Text>
                   </View>
                   <View style={{flexDirection:'row', justifyContent:'center'}}>
                   <Image style={{marginTop:40,height:70,width:65}} source={require('../assets/file.png')}></Image>
                   <Text style={{paddingTop:7,marginTop:48,borderColor:'skyblue',borderWidth:2,borderRadius:20,width:270,textAlign:'center',alignItems:'center',height:37,borderStyle:'dotted', color: '#87CEFA',textAlign:'center'}}>Tamper Evident</Text>
                   </View>
                   <View style={{flexDirection:'row', justifyContent:'center'}}>
                   <Image style={{marginTop:40,height:70,width:65}} source={require('../assets/duplicate.png')}></Image>
                   <Text style={{paddingTop:7,marginTop:48,borderColor:'skyblue',borderWidth:2,borderRadius:20,width:270,textAlign:'center',alignItems:'center',height:37,borderStyle:'dotted', color: '#87CEFA',textAlign:'center'}}>Impossible to Duplicate</Text>
                   </View>
               </View>
         </View>
     )
 }
 export default WelcomePage;

