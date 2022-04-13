import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
//import {hp, wp} from '../pages/Dimension';

const DashCommonComp = ({Title, placeholder, style, secureTextEntry,value,onChangeText}) => {
  return (
    <View style={[{marginVertical: 10}, [style]]}>
      {Title?<Text style={styles.TitleText}>{Title}</Text>:<></>}
      <TextInput
      
        style={[styles.TextInput]}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  TextInput: {
    borderWidth: 2,
    borderColor: '#EFEFEF',
    color: '#64549C',
    fontWeight: '500',
    backgroundColor: '#E8E8E8',
    fontFamily: 'Inter-SemiBold',
    // width: 326,
    fontSize:16,
    height: 48,
    marginLeft:0,
    alignContent:'center',
  marginTop:8,
  borderRadius:5
  
  },
  TitleText: {
    fontWeight: '300',
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    fontWeight:'normal',
     color:'#00BFFF',
     marginLeft:0,
    
  },
});


export default DashCommonComp;