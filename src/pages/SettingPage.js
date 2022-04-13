

import React from "react";
import { View , Image , Text} from "react-native";

const SettingPage = () => {
   return(
       <View>
           <View style={{flexDirection:'row',backgroundColor:'#00BFFF',height:60,padding:5,alignItems:'center'}}>
               <Image style={{height:45,width:45,backgroundColor:'white',borderRadius:23}} source={require('../assets/onlylogo.png')}></Image>
               <Text style={{color:'white',paddingLeft:10,fontWeight:'bold'}}>Settings</Text>
           </View>
           <View style={{padding:15,flexDirection:'column',backgroundColor:'white',borderRadius:4,elevation:3}}>
           <View style={{flexDirection:'row'}}>
                   <Image style={{height:40,width:40}} source={require('../assets/wallet-removebg-preview.png')}></Image>
                   <Text style={{flex:1,paddingTop:7,paddingLeft:25}}>Manage Bank Account</Text>
                   <Image style={{height:25,width:25,marginTop:10}} source={require('../assets/greaterthan.png')}></Image>
               </View>
               <View style={{flexDirection:'row',paddingTop:15}}>
                   <Image style={{height:40,width:40}} source={require('../assets/settings.png')}></Image>
                   <Text style={{flex:1,paddingTop:7,paddingLeft:25}}>Account Settings</Text>
                   <Image style={{height:25,width:25,marginTop:10}} source={require('../assets/greaterthan.png')}></Image>
               </View>
               <View style={{flexDirection:'row',paddingTop:15}}>
                   <Image style={{height:40,width:40}} source={require('../assets/mail.png')}></Image>
                   <Text style={{flex:1,paddingTop:7,paddingLeft:25}}>Contact Us</Text>
                   <Image style={{height:25,width:25,marginTop:10}} source={require('../assets/greaterthan.png')}></Image>
               </View>
               <View style={{flexDirection:'row',paddingTop:15}}>
                   <Image style={{height:40,width:40}} source={require('../assets/info.png')}></Image>
                   <Text style={{flex:1,paddingTop:7,paddingLeft:25}}>About Us</Text>
                   <Image style={{height:25,width:25,marginTop:10}} source={require('../assets/greaterthan.png')}></Image>
               </View>
               <View style={{flexDirection:'row',paddingTop:15}}>
                   <Image style={{height:40,width:40}} source={require('../assets/locker.png')}></Image>
                   <Text style={{flex:1,paddingTop:7,paddingLeft:25}}>Privacy Policy</Text>
                   <Image style={{height:25,width:25,marginTop:10}} source={require('../assets/greaterthan.png')}></Image>
               </View>
               <View style={{flexDirection:'row',paddingTop:15}}>
                   <Image style={{height:40,width:40}} source={require('../assets/t&c.png')}></Image>
                   <Text style={{flex:1,paddingTop:7,paddingLeft:25}}>Terms and Conditions</Text>
                   <Image style={{height:25,width:25,marginTop:10}} source={require('../assets/greaterthan.png')}></Image>
               </View>
               <View style={{flexDirection:'row',paddingTop:15}}>
                   <Image style={{height:40,width:40}} source={require('../assets/headphone.webp')}></Image>
                   <Text style={{flex:1,paddingTop:7,paddingLeft:25}}>Support</Text>
                   <Image style={{height:25,width:25,marginTop:10}} source={require('../assets/greaterthan.png')}></Image>
               </View>
               <View style={{flexDirection:'row',paddingTop:15}}>
                   <Image style={{height:40,width:40}} source={require('../assets/tag.png')}></Image>
                   <Text style={{flex:1,paddingTop:7,paddingLeft:25}}>Ticket Details</Text>
                   <Image style={{height:25,width:25,marginTop:10}} source={require('../assets/greaterthan.png')}></Image>
               </View>
           </View>
           <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
           <Image style={{height:25,width:25,marginTop:29}} source={require('../assets/logout.webp')}></Image>
           <Text style={{color:'#00BFFF',alignSelf:'center',paddingTop:30,fontSize:15}}>LOGOUT</Text>
           </View>
           {/* <View style={{marginTop:130,flexDirection:'row',backgroundColor:'white',borderRadius:4,elevation:3,justifyContent:'space-around'}}>
              <View style={{flexDirection:'column'}}>
              <Image style={{height:30,width:30,marginLeft:18}} source={require('../assets/dashboard.webp')}></Image>
              <Text>Dashboard</Text>
              </View>
              <View style={{flexDirection:'column'}}>
              <Image style={{height:30,width:30,marginLeft:23}} source={require('../assets/transaction.webp')}></Image>
              <Text>Transactions</Text>
              </View>
              <View style={{flexDirection:'column'}}>
              <Image style={{height:30,width:30,marginLeft:12}} source={require('../assets/settings.png')}></Image>
              <Text>Settings</Text>
              </View>
           </View> */}
       </View>
   );
}

export default SettingPage;