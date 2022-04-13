import React from "react";
import {View,Text,Image} from 'react-native';
const   ExpirePage=props=>{
    return(
        <View style={{height:'100%',width:'100%',backgroundColor:'white'}}>
           
                <Image source={require('../assets/notransaction-removebg-preview.png')} style={{height:130,width:130,marginTop:100,alignSelf:'center'}}/>
            <Text style={{color:'black',fontSize:12,alignSelf:'center',marginTop:-30}}>No Transactions</Text>
            
        </View>
    )
}
export default ExpirePage;