import { useNavigation } from "@react-navigation/native";
import React from "react";
import {Text,Image,View,StyleSheet,TouchableOpacity} from 'react-native';

const LetsgoPage=props=>{
    const navigation=useNavigation();
   const onNext=()=>{
       navigation.navigate('LoginPage1');
    }
    return(
        <View style={{backgroundColor:'#00BFFF',width:'100%',height:'100%'}}>
        <Text style={{color:'white',fontSize:28,fontWeight:'bold',alignSelf:'center',marginTop:110}}>Redeem</Text>
        <Text style={{color:'white',fontSize:16,marginLeft:40,marginTop:20}}>Reeem earned reward points in multiple ways</Text>
            <View style={{flexDirection:'row'}}>
             <Image source={require('../assets/recharge-removebg-preview.png')} style={{height:50,width:90,alignSelf:'flex-start',marginLeft:50,marginTop:30}}/>
            <Text style={{marginTop:40,color:'white',fontSize:16,marginLeft:15,}}>Mobile Recharge</Text>
            </View>
            <View style={{flexDirection:'row'}}>
             <Image source={require('../assets/dth_new-removebg-preview.png')} style={{height:50,width:90,alignSelf:'flex-start',marginLeft:50,marginTop:30}}/>
            <Text style={{marginTop:40,color:'white',fontSize:16,marginLeft:15,}}>DTH Recharge</Text>
            </View>
            <View style={{flexDirection:'row'}}>
             <Image source={require('../assets/bank-removebg-preview.png')} style={{height:50,width:90,alignSelf:'flex-start',marginLeft:50,marginTop:30}}/>
            <Text style={{marginTop:40,color:'white',fontSize:16,marginLeft:15}}>Bank Transfer</Text>
            </View>
            <View style={{flexDirection:'row'}}>
             <Image source={require('../assets/paytm.png')} style={{height:50,width:90,alignSelf:'flex-start',marginLeft:50,marginTop:30}}/>
            <Text style={{marginTop:40,color:'white',fontSize:16,marginLeft:15}}>Paytm Transactions</Text>
            </View>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>onNext()}>
            <Text style={styles.LoginText}>LETS GO</Text>
        </TouchableOpacity>
        </View>
    );
}
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
              color:'#00BFFF',
              fontSize:14
             
        
         },
          buttonContainer: {
            height:36,
           backgroundColor:'#FFFFFF',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf:'center',
            width:100,
            borderRadius:15,
            marginTop:45
          },
});

export default LetsgoPage;