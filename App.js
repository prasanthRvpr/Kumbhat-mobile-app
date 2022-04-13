
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import React from 'react';
 
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
import AuthenticatePage from './src/pages/AuthenticatePage';
import BankPage from './src/pages/BankPage';
import DashboardPage from './src/pages/DashboardPage';
import DthPage from './src/pages/DthPage';

import EarnedPage from './src/pages/EarnedPage';
import ExpirePage from './src/pages/ExpirePage';
import Language from './src/pages/Language';
import LetsgoPage from './src/pages/LetsgoPage';
import LoginPage1 from './src/pages/LoginPage1';
import MainPage from './src/pages/MainPage';
import OtpPage from './src/pages/OtpPage';
import PaytmPage from './src/pages/PaytmPage';
import RechargePage from './src/pages/RechargePage';
import RedeemPage from './src/pages/RedeemPage';
import RegisterPage from './src/pages/RegisterPage';
import NotificationPage from './src/pages/NotificationPage';
import Profile from './src/pages/ProfilePage';

import RewardPage from './src/pages/RewardPage';
import SettingPage from './src/pages/SettingPage';
import Splashpage from './src/pages/Splashpage';
import TransactionPage from './src/pages/TransactionPage';
import ViewPagerComp from './src/pages/ViewPagerComp';
import WelcomePage from './src/pages/WelcomePage';
import ViewBalance from './src/pages/ViewBalance';

 const Stack=createStackNavigator();
 const App = () => {
  
   return (
     <NavigationContainer>
     <Stack.Navigator>
     <Stack.Screen name="Splashpage" component={Splashpage} options={{headerShown:false}} />
     <Stack.Screen name="Language" component={Language} options={{headerShown:false}}/>
     <Stack.Screen name="ViewPagerComp" component={ViewPagerComp} options={{headerShown:false}} />
     <Stack.Screen name="WelcomePage" component={WelcomePage} options={{headerShown:false}} />
     <Stack.Screen name="AuthenticatePage" component={AuthenticatePage} options={{headerShown:false}}/>
     <Stack.Screen name="RewardPage" component={RewardPage} options={{headerShown:false}}/>
     <Stack.Screen name="LetsgoPage" component={LetsgoPage} options={{headerShown:false}}/>
     <Stack.Screen name="LoginPage1" component={LoginPage1} options={{headerShown:false}}/>
     <Stack.Screen name="OtpPage" component={OtpPage} options={{headerShown:false}} />
     <Stack.Screen name="RegisterPage" component={RegisterPage} options={{headerShown:false}}/>
     <Stack.Screen name="MainPage" component={MainPage} options={{headerShown:false}}/>
     {/* <Stack.Screen name="DashboardPage" component={DashboardPage} options={{headerShown:false}}/>
     <Stack.Screen name="TransactionPage" component={TransactionPage} options={{headerShown:false}}/>
     <Stack.Screen name="SettingPage" component={SettingPage} options={{headerShown:false}}/>
     <Stack.Screen name="EarnedPage" component={EarnedPage} options={{headerShown:false}}/>
     <Stack.Screen name="RedeemPage" component={RedeemPage} options={{headerShown:false}}/>
     <Stack.Screen name="ExpirePage" component={ExpirePage} options={{headerShown:false}}/> */}
     <Stack.Screen name="AuthenticationPage" component={AuthenticatePage} options={{headerShown:false}}/>
        <Stack.Screen name="RechargePage" component={RechargePage} options={{headerShown:true,headerTintColor:'#00BFFF',title:'Recharge'}}/>
        <Stack.Screen name="DthPage" component={DthPage} options={{headerShown:true,headerTintColor:'#00BFFF',title:'DTH'}}/>
        <Stack.Screen name="PaytmPage" component={PaytmPage} options={{headerShown:true,headerTintColor:'#00BFFF',title:'Paytm Transfer'}}/>
        <Stack.Screen name="BankPage"component={BankPage} options={{headerShown:true,headerTintColor:'#00BFFF',title:'Bank Transfer'}}/>
        <Stack.Screen name="NotificationPage"component={NotificationPage} options={{headerShown:true,headerTintColor:'#00BFFF',title:'Notification'}}/>
        <Stack.Screen name="Profile"component={Profile} options={{headerShown:true,headerTintColor:'#00BFFF',title:'Profile'}}/>
        <Stack.Screen name="ViewBalance"component={ViewBalance} options={{headerShown:false,headerTintColor:'#00BFFF',title:'View Balance'}}/>
        </Stack.Navigator>
   </NavigationContainer>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;
 