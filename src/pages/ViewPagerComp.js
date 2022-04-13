// import React in our code
import { IndicatorViewPager, PagerDotIndicator } from '@shankarmorwal/rn-viewpager';
import React from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text
} from 'react-native';
import PagerView from 'react-native-pager-view';
import AuthenticatePage from './AuthenticatePage';
import LetsgoPage from './LetsgoPage';
import RewardPage from './RewardPage';
import WelcomePage from './WelcomePage';

// import {
//   PagerTabIndicator,
//   IndicatorViewPager,
//   PagerTitleIndicator,
//   PagerDotIndicator,
// } from 'rn-viewpager';

// import PagerView from 'react-native-pager-view';
// import Authenticate from './Authenticate';
// import Letgo from './Letgo';


const ViewPagerComp= () => {
  return (
    <PagerView style={styles.pagerView} initialPage={0} showPageIndicator={true} >
        
    <View key="1">
    <WelcomePage/>
    </View>
    <View key="2">
      <AuthenticatePage/>
    </View>
    <View key="3">
    <RewardPage/>
    </View>
    <View key="4">
    <LetsgoPage/>
    </View>
  </PagerView>
  );
};



export default ViewPagerComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pagerView:{
    flex:1,
  },
  background1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C70039',
  },
  background2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF5733',
  },
  background3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC300',
  },
  textStyle: {
    color: 'white',
    fontSize: 30,
  },
  pagerStyle: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'white',
  },
});;
