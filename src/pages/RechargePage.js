import React,{useState} from "react";
import {View,Text,Image,TouchableOpacity,StyleSheet} from 'react-native';
// import DropDownPicker from "react-native-dropdown-picker";
import { Provider ,Appbar,RadioButton} from 'react-native-paper';
import DashCommonComp from "../components/DashCommonComp";

import {Picker} from "@react-native-picker/picker";
// import { Dropdown } from 'react-native-element-dropdown';


const RechargePage=props=>{
    const [value, setValue] = useState('first');
    const [Enable , setEnable]  = useState("Select Netwok");
    const [Enable1 , setEnable1]  = useState("Select Circle");
    return(
  <View style={{flex:1,alignItems:'center',padding:20,backgroundColor:'white'}}>
    <View>
     {/* <View style={{height:75,width:'100%',borderWidth:5,borderColor:'white',shadowRadius:60,shadowColor:'gray',borderWidth:3,
    borderColor:'#ddd',flexDirection:'row'}}>
        <Image source={require('../assets/backarrow-removebg-preview.png')} style={{height:30,width:30,marginTop:20,marginLeft:15}}/>
        <Text style={{color:"#00BFFF",marginTop:20,fontSize:20,marginLeft:8}}>Recharge</Text>

     </View> */}
     <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
               <View style={{flexDirection:'row',marginTop:'10%',justifyContent:'space-evenly'}}>
              <RadioButton.Item label="Prepaid" value="first"  uncheckedColor="rgba(0, 0, 0, 0.54)"/>
              <RadioButton.Item label="Postpaid" value="second"  uncheckedColor="rgba(0, 0, 0, 0.54)"/>
              </View>
            </RadioButton.Group>  
            <DashCommonComp Title="Mobile Number"/>
            <View style={{flexDirection:'column'}}>
           <Text style={styles.pickerText}>Select Network</Text>
           <Picker
          selectedValue={Enable}
          style={styles.pickerStyle}
          mode={"dialog"}
          onValueChange={(itemValue) => setEnable(itemValue)}
        >
           <Picker.Item label="Choose Network" value="courses" />
          <Picker.Item label="Data-Structures" value="DSA" />
          <Picker.Item label="ReactJs" value="react" />
          <Picker.Item label="C++" value="cpp" />
          <Picker.Item label="Python" value="py" />
          <Picker.Item label="Java" value="java" />
        </Picker>
        </View>
        <View style={{flexDirection:'column'}}>
        <Text style={styles.pickerText}>Select Circle</Text>
           <Picker
          selectedValue={Enable1}
          style={styles.pickerStyle}
          mode={"dialog"}
          onValueChange={(itemValue) => setEnable1(itemValue)}
        >
           <Picker.Item label="Choose Circle" value="courses" />
          <Picker.Item label="Data-Structures" value="DSA" />
          <Picker.Item label="ReactJs" value="react" />
          <Picker.Item label="C++" value="cpp" />
          <Picker.Item label="Python" value="py" />
          <Picker.Item label="Java" value="java" />
        </Picker>
        </View>
            {/* <DashCommonComp Title="Select Circle"/> */}
            <DashCommonComp Title="Amount"/>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>onClickListener()}>
            <Text style={styles.LoginText}>RECHARGE</Text>
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
          pickerStyle:{
            borderWidth: 2,
            borderColor: '#EFEFEF',
            color: 'black',
            fontWeight: '500',
            backgroundColor: '#E8E8E8',
            fontFamily: 'Inter-SemiBold',
            width: 326,
            fontSize:16,
            height: 48,
            marginLeft:0,
            alignContent:'center',
          marginTop:8,
          borderRadius:5
          },
          pickerText:{fontWeight: '300',
          fontFamily: 'Inter-Medium',
          fontSize: 14,
          marginTop:10,
          fontWeight:'normal',
           color:'#00BFFF',
           marginLeft:0,
          }
});
export default RechargePage;