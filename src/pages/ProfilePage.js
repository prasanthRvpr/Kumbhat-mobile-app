import React from "react";
import {View,Text,Image,TextInput,TouchableOpacity,StyleSheet} from 'react-native';
import { NavigationContainer, useNavigation,useRoute } from "@react-navigation/native";
import DashCommonComp from "../components/DashCommonComp";
import DefaultTextInput from "../components/DefautTextInput";

const Profile=()=>{
    const route= useRoute();
//   const {name} = route.params;
//   const {mobile} = route.params;
    const onUpdateInfo =()=>{
        
    }
    return(
        <View style={{padding:20,backgroundColor:'white',flex:1,alignItems:'center'}}>
            <View style={{width:'100%'}}>
            <View style={{flexDirection:'column'}}>
                <Text style={{color:'#1E90FF',fontSize:13}}>Name</Text>
                <TextInput style={{borderColor:'grey',borderBottomWidth:0.2,backgroundColor:'white',marginTop:'2%',height:27}}/>
            </View>
            <View style={{flexDirection:'column',paddingVertical:26}}>
                <Text style={{color:'#1E90FF',fontSize:13}}>Email</Text>
                <TextInput style={{borderColor:'grey',borderBottomWidth:0.2,backgroundColor:'white',marginTop:'2%',height:27}}/>
            </View>
            <View style={{flexDirection:'column'}}>
                <Text style={{color:'#1E90FF',fontSize:13}}>Mobile</Text>
                <TextInput keyboardType='numeric' style={{borderColor:'grey',borderBottomWidth:0.2,backgroundColor:'white',marginTop:'2%',height:27}}/>
            </View>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>onUpdateInfo()}>
            <Text style={{color:'white'}}>UPDATE INFO</Text>
        </TouchableOpacity>
        </View>
        </View>
    );
}
const styles=StyleSheet.create({
    buttonContainer:{
        height:40,
        backgroundColor:'#1aa3ff',
        width:130,
        alignSelf:'center',
        paddingHorizontal:20,
        paddingVertical:9,
        marginTop:30,
        borderRadius:4

    }
});
export default Profile;