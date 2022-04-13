// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { ScrollableTabView, DefaultTabBar, ScrollableTabBar, } from '@valdio/react-native-scrollable-tabview'
import React from "react";
import {View,Text,Image} from 'react-native';
import AuthenticationPage from "./AuthenticationPage";
import EarnedPage from "./EarnedPage";
import ExpirePage from "./ExpirePage";
import RedeemPage from "./RedeemPage";

// const Tab = createMaterialTopTabNavigator();
const TransactionPage=props=>{
  
    return(
       <View style={{height:'100%',width:'100%'}}>
         <View style={{height:60,width:'100%',backgroundColor:'#00BFFF',flexDirection:'row'}}>
         <Image source={require('../assets/onlylogo.png')} style={{height:40,width:40,backgroundColor:'white',borderRadius:23,marginTop:10,marginLeft:15}}/>
        <Text style={{color:'white',fontSize:16,marginTop:18,marginLeft:20}}>Transactions</Text>
         </View>
         <ScrollableTabView  screenOptions={{
          inactiveTintColor: '#00BFFF',
          activeTintColor: '#00BFFF',
          
          
        }}>
         <EarnedPage tabLabel="EARNED" options={{
            tabBarLabel: 'EARNED',
            tabBarLabelStyle:{fontSize:9},
            // tabBarIcon: ({ color, size }) => (
            //   <Image source={require('../assets/dashboard-removebg-preview.png')} style={{height:20,width:20}}/>
            // ),
            headerShown:false
          }} />
        <RedeemPage tabLabel="REDEEMED" options={{
            tabBarLabel: 'EARNED',
            tabBarLabelStyle:{fontSize:9},
            // tabBarIcon: ({ color, size }) => (
            //   <Image source={require('../assets/dashboard-removebg-preview.png')} style={{height:20,width:20}}/>
            // ),
            headerShown:false
          }} />
        <ExpirePage tabLabel="EXPIRED" options={{
            tabBarLabel: 'EARNED',
            tabBarLabelStyle:{fontSize:9},
            // tabBarIcon: ({ color, size }) => (
            //   <Image source={require('../assets/dashboard-removebg-preview.png')} style={{height:20,width:20}}/>
            // ),
            headerShown:false
          }} />
        <AuthenticationPage tabLabel="AUTHENTICATED" options={{
            tabBarLabel: 'EARNED',
            tabBarLabelStyle:{fontSize:9},
            // tabBarIcon: ({ color, size }) => (
            //   <Image source={require('../assets/dashboard-removebg-preview.png')} style={{height:20,width:20}}/>
            // ),
            headerShown:false
          }} />
      {/* <Tab.Navigator
        initialRouteName="Earned"
        screenOptions={{
          inactiveTintColor: '#00BFFF',
          activeTintColor: '#00BFFF',
          
          
        }}
      >
            <Tab.Screen
          name="EarnedPage"
          component={EarnedPage}
          options={{
            tabBarLabel: 'EARNED',
            tabBarLabelStyle:{fontSize:9},
            // tabBarIcon: ({ color, size }) => (
            //   <Image source={require('../assets/dashboard-removebg-preview.png')} style={{height:20,width:20}}/>
            // ),
            headerShown:false
          }}  />
        <Tab.Screen
          name="RedeemPage"
          component={RedeemPage}
          options={{
            tabBarLabel: 'REDEEMED',
            tabBarLabelStyle:{fontSize:10},
            // tabBarIcon: ({ color, size }) => (
            //   <Image source={require('../assets/tansaction-removebg-preview.png')} style={{height:20,width:20}}/>
            //   ),
            headerShown:false
          }}  />
        <Tab.Screen
          name="ExpirePAge"
          component={ExpirePage}
          options={{
            tabBarLabel: 'EXPIRED',
            tabBarLabelStyle:{fontSize:10},
            // tabBarIcon: ({ color, size }) => (
            //   <Image source={require('../assets/settings-removebg-preview.png')} style={{height:20,width:20}}/>
            // ),
            headerShown:false
          }} />
           <Tab.Screen
          name="AuthenticationPage"
          component={AuthenticationPage}
          options={{
            tabBarLabel: 'AUTHENTICATED',
            tabBarLabelStyle:{fontSize:10},
            // tabBarIcon: ({ color, size }) => (
            //   <Image source={require('../assets/settings-removebg-preview.png')} style={{height:20,width:20}}/>
            // ),
            headerShown:false
          }} />
      </Tab.Navigator> */}
      </ScrollableTabView>
         
</View>
    );
}
export default TransactionPage;