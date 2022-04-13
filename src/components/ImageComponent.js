import React from 'react';
import {StyleSheet, Text, View, TextInput,Image} from 'react-native';
//import {hp, wp} from '../pages/Dimension';

const ImageComponent = ({Title, source, style}) => {
  return (
    <View style={[{marginVertical: 10}, [style]]}>
      
      {/* <TextInput
      
        style={[styles.TextInput]}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        
      /> */}
      <Image
       style={[styles.TextInput]}
      source={source}

      />
      {Title?<Text style={styles.TitleText}>{Title}</Text>:<></>}
    </View>
  );
};

const styles = StyleSheet.create({
  TextInput: {
      width: 50,
      height: 40,
      marginLeft:40,
  
 
  },
  TitleText: {
    fontWeight: '300',
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    fontWeight:'normal',
     color:'#000000A6',
     marginLeft:40,
    
  },
});


export default ImageComponent;