import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {View,Text,Image,TouchableOpacity,StyleSheet} from 'react-native'

const ViewBalance =()=>{
    const navigation=useNavigation();
    const onCancel=()=>{
        navigation.navigate("DashboardPage");
    }
    return(
     <View style={styles.PageContainer}>
         <View style={styles.row}>
         <Text style={{color:'#1E90FF',fontSize:16}}>View Balance</Text>
         <TouchableOpacity onPress={()=>onCancel()}>
            <Text style={styles.textContainer}>CANCEL</Text>
        </TouchableOpacity>
         </View>
         <View style={styles.rowView}>
             <Text style={{color:'white',fontSize:15,paddingLeft:5}}>Available</Text>
             <Text style={{color:'white',fontSize:15,paddingRight:5}}>₹ 0</Text>
         </View>
         <Image style={{height:60,width:60,alignSelf:'center',marginTop:'50%'}}  source={require('../assets/moneyLocker.webp')}></Image>
     </View>
    );
}

const styles = StyleSheet.create({
    PageContainer:{
        flex:1,
        backgroundColor:'white',
        padding:20
    },
    row:{
        flexDirection:'row', 

    },
    textContainer:{
        color:'#1E90FF',
        marginLeft:'65%',
        fontSize:16
    },
    rowView:{
        flexDirection:'row',
        backgroundColor:'#1E90FF',
        height:'6%',
        borderRadius:5,
        justifyContent:'space-between',
        paddingVertical:9,
        marginTop:'10%'
       
    },
    rowText:{
        color:'white',
        fontSize:15,
    }
})
export default ViewBalance;