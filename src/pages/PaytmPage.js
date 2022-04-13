import React,{useState} from "react";
import {View,Text,Image,TouchableOpacity,StyleSheet} from 'react-native';
import { Provider ,Appbar,RadioButton} from 'react-native-paper';
import DashCommonComp from "../components/DashCommonComp";
import DefaultTextInput from "../components/DefautTextInput";
const PaytmPage=props=>{
    const [value, setValue] = useState('first');
    return(
  <View style={{backgroundColor:'white',height:"100%",width:"100%",alignItems:'center',padding:20}}>
    <View>
     {/* <View style={{height:75,width:'100%',borderWidth:5,borderColor:'white',shadowRadius:60,shadowColor:'gray',borderWidth:3,
    borderColor:'#ddd',flexDirection:'row'}}>
        <Image source={require('../assets/backarrow-removebg-preview.png')} style={{height:30,width:30,marginTop:20,marginLeft:15}}/>
        <Text style={{color:"#00BFFF",marginTop:20,fontSize:20,marginLeft:8}}>Paytm Transfer</Text>

     </View> */}
    <DashCommonComp Title="Mobile Number or Email"/>
           <DashCommonComp Title="Amount"/>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>onClickListener()}>
            <Text style={styles.LoginText}>Transfer</Text>
        </TouchableOpacity>
        </View>
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
            marginLeft:0,
            marginRight:0,
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
export default PaytmPage;