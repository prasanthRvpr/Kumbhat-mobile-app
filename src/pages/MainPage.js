import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation,useRoute } from "@react-navigation/native";
import React  from "react";
import {View,Text,Image,TouchableOpacity} from 'react-native';
import ImageComponent from "../components/ImageComponent";
import DashboardPage from "./DashboardPage";
import SettingPage from "./SettingPage";
import TransactionPage from "./TransactionPage";

const MainPage=props=>{
  const route= useRoute();
  // const {name} = route.params;
  // const {mobile} = route.params;
    const navigation=useNavigation();
    const Tab=createBottomTabNavigator();
    // console.log(name);
     const onMoved=()=>{
    //   navigation.navigate('Authenticate');
    }
    // function MyTabs() {
    //     return (
    //       <Tab.Navigator>
    //         <Tab.Screen name="Home" component={HomeScreen} 
    //          options={{
    //             tabBarLabel: 'Home',
    //             tabBarIcon: ({ color, size }) => (
    //               <Image source={require('../assets/save.png')}
    //               />
    //             ),
    //           }}/>
    //         <Tab.Screen name="Settings" component={SettingsScreen} />
    //       </Tab.Navigator>
    //     );
    //   }
    //   function HomeScreen() {
    //     return (
    //       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //         <Text>Home!</Text>
    //       </View>
    //     );
    //   }
      
    //   function SettingsScreen() {
    //     return (
    //       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //         <Text>Settings!</Text>
    //       </View>
    //     );
    //   }
    return(


      <Tab.Navigator
        initialRouteName="DashboardPage"
        screenOptions={{
          activeTintColor:'#00BFFF',
          inactiveTintColor: 'black',
         
          
        }}
        >
            <Tab.Screen
          name="DashboardPage"
          component={DashboardPage}
          options={{
            tabBarLabel: 'Dashboard',
            tabBarIcon: ({ color, size }) => (
              <Image source={require('../assets/dashboard-removebg-preview.png')} style={{height:20,width:20}}/>
            ),
            headerShown:false
          }}  />
        <Tab.Screen
          name="TransactionPage"
          component={TransactionPage}
          options={{
            tabBarLabel: 'Transaction',
            tabBarIcon: ({ color, size }) => (
              <Image source={require('../assets/tansaction-removebg-preview.png')} style={{height:20,width:20}}/>
              ),
            headerShown:false
          }}  />
        <Tab.Screen
          name="Settings"
          component={SettingPage}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Image source={require('../assets/settings-removebg-preview.png')} style={{height:20,width:20}}/>
            ),
            headerShown:false
          }} />
      </Tab.Navigator>
      
   
    )
}
export default MainPage;
