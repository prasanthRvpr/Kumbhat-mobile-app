import { Picker } from "@react-native-picker/picker";
import React ,{useState} from "react";
import { View, Image , Text, TextInput, TouchableOpacity } from "react-native";
import DashCommonComp from "../components/DashCommonComp";

const BankPage = () =>{
    const[BankAccount,setBankAccount] = useState('DTH Operator');
    return(
        <View style={{backgroundColor:'white'}}>
        {/* <View style={{flexDirection:'row',padding:10,borderWidth:0,width:'100%',
        borderColor:'#000',shadowColor: "#000",
        shadowOffset: {width: 0,height: 9},
        shadowOpacity: 3,shadowRadius: 0,elevation: 1,}}>
        <Image style={{height:40,width:40}} source={require('../../Asset/leftarrow.png')}></Image>
        <Text style={{color:'#87CEFA',fontWeight:'500',fontSize:25,paddingLeft:8}}>Bank Transfer</Text>
        </View> */}
        <Text style={{padding:25,color:'black'}}>Please fill the form to transfer the amount to your preferred bank account</Text>
        <View style={{flexDirection:'column'}}>
            <View></View>
            <View style={{padding:20}}>
                <Text style={{color:'#87CEFA',fontWeight:'400'}}>Payee Account</Text>
                <View style={{height: 50,borderRadius:5,paddingVertical: 0,
                borderWidth: 1,borderColor:'#E8E8E8',backgroundColor:'#E8E8E8'}}>
                    <Picker style={{color:'black'}} mode="dropdown"  selectedValue={BankAccount} 
                onValueChange={(itemValue) => setBankAccount({BankAccount:itemValue})}
                 placeholder="" >
                    <Picker.Item label="Select Bank" value=""/>
                    <Picker.Item label="Payee Account**" value="Payee Account**"/>
                    <Picker.Item label="cancel" value="cancel"/>
                </Picker></View>
            </View>
            <View style={{paddingHorizontal:20}}>
                {/* <Text style={{color:'#87CEFA',fontWeight:'400'}}>Amount to Transfer</Text>
                <TextInput type='text' style={{backgroundColor:'#E8E8E8',borderRadius:5}}></TextInput> */}
                <DashCommonComp Title="Amount to Transfer"/>
            </View>
            <View style={{paddingHorizontal:20}}>
                {/* <Text style={{color:'#87CEFA',fontWeight:'400'}}>Remarks</Text>
                <TextInput placeholder="Enter any transaction remarks" type='text' style={{backgroundColor:'#E8E8E8',borderRadius:5}}></TextInput> */}
                <DashCommonComp Title="Remarks"/>
            </View>
        </View>
        <TouchableOpacity>
            <Text style={{height:35,padding:7,paddingLeft:140,marginTop:20,marginLeft:20,marginRight:20,borderRadius:5,backgroundColor:'#87CEFA',color:'white'}}>TRANSFER</Text>
            </TouchableOpacity>
        </View>
    );
}
export default BankPage;


