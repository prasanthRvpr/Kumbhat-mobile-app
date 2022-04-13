import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { View, Image , Text, TextInput, TouchableOpacity } from "react-native";
import DashCommonComp from "../components/DashCommonComp";


const DthPage = () =>{
    const[pickerValue,setPickerValue] = useState('DTH Operator');
    const [pickerFocused, setPickerFocused] = useState(false);
    const [Enable , setEnable]  = useState("Select Netwok");
    return(
    <View style={{backgroundColor:'white'}}>
    {/* <View style={{flexDirection:'row',padding:10,borderWidth:0,width:'100%',
    borderColor:'#000',shadowColor: "#000",
    shadowOffset: {width: 0,height: 9},
    shadowOpacity: 3,shadowRadius: 0,elevation: 1,}}>
    <Image style={{height:40,width:40}} source={require('../assets/leftarrow.png')}></Image>
    <Text style={{color:'#87CEFA',fontWeight:'500',fontSize:25,paddingLeft:8}}>DTH</Text>
    </View> */}
    <View style={{flexDirection:'column',padding:0}}>
        <View style={{padding:20}}>
            <Text style={{color:'#87CEFA',fontWeight:'400'}}>DTH Operator</Text>
            <View style={{}}>
                <Picker  style={{borderWidth: 2,
            borderColor: '#EFEFEF',
            color: 'black',
            fontWeight: '500',
            backgroundColor: '#E8E8E8',
            fontFamily: 'Inter-SemiBold',
            
            fontSize:16,
            height: 48,
            marginLeft:0,
            alignContent:'center',
          marginTop:8,
          borderRadius:5}} selectedValue={pickerValue} 
            onValueChange={(itemValue) => setPickerValue({pickerValue:itemValue})}
             placeholder="Choose Operator">
                <Picker.Item label="Choose Operator" value=""/>
                <Picker.Item label="Airtel Digital Tv" value="Airtel Digital Tv"/>
                <Picker.Item label="Reliance Big Tv" value="Reliance Big Tv"/>
                <Picker.Item label="Dish Tv" value="Dish Tv"/>
                <Picker.Item label="Sun Direct" value="Sun Direct"/>
                <Picker.Item label="TATA SKY DTH" value="TATA SKY DTH"/>
                <Picker.Item label="videocon DTH" value="videocon DTH"/>
                <Picker.Item label="cancel" value="cancel"/>
            </Picker>
            </View>
            {/* <Picker  onFocus={() => setPickerFocused(true)}
onBlur={() => setPickerFocused(false)}
             selectedValue={pickerValue}
             style={{height: 48, width: 350,backgroundColor:'#E8E8E8'}}
             onValueChange={(itemValue) =>
                setPickerValue({pickerValue: itemValue}) 
             }>
                  <Picker.Item label="Choose Operator" value="" enabled={!pickerFocused}/>
                <Picker.Item label="Airtel Digital Tv" value="Airtel Digital Tv"/>
                <Picker.Item label="Reliance Big Tv" value="Reliance Big Tv"/>
                <Picker.Item label="Dish Tv" value="Dish Tv"/>
                <Picker.Item label="Sun Direct" value="Sun Direct"/>
                <Picker.Item label="TATA SKY DTH" value="TATA SKY DTH"/>
                <Picker.Item label="videocon DTH" value="videocon DTH"/>
                <Picker.Item label="cancel" value="cancel"/>
             {/* <Picker.Item label="Java" value="java" />
             <Picker.Item label="JavaScript" value="js" /> */}
             {/* </Picker> */} 
        </View>
        <View style={{paddingHorizontal:20}}>
            {/* <Text style={{color:'#87CEFA',fontWeight:'400'}}>Customer ID</Text>
            <TextInput placeholder="Enter Customer ID" type='text' style={{borderRadius:5,backgroundColor:'#E8E8E8'}}></TextInput> */}
            <DashCommonComp Title="Customer ID"/>
        </View>
        <View style={{paddingHorizontal:20}}>
            {/* <Text style={{color:'#87CEFA',fontWeight:'400'}}>Amount</Text>
            <TextInput placeholder="Enter Amount" type='text' style={{borderRadius:5,backgroundColor:'#E8E8E8'}}></TextInput> */}
            <DashCommonComp Title="Amount"/>
        </View>
    </View>
    <TouchableOpacity>
        <Text style={{height:46,padding:7,paddingLeft:140,marginTop:20,marginLeft:20,marginRight:20,borderRadius:5,backgroundColor:'#87CEFA',color:'white'}}>RECHARGE</Text>
        </TouchableOpacity>
    </View>
);
}
export default DthPage;

