import React,{useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {View,Text, Image,TouchableOpacity} from 'react-native';
import { Provider ,Appbar,RadioButton} from 'react-native-paper';



const Language = props=>{
  const navigation=useNavigation();
    const [value, setValue] = useState('first');
    const language=[{value:"first",label:"English",key:"1"},
    {value:"second",label:"தமிழ்",key:"tamil"},
    {value:"third",label:"हिन्दी",key:"hindi"},
    {value:"fourth",label:"తెలుగు",key:"teuglu"},
    {value:"fifth",label:"മലയാളം",key:"malayalam"},
    {value:"sixth",label:"ಕನ್ನಡ",key:"Kannada"},
    {value:"seventh",label:"বাংলা",key:"punjabi"},
    {value:"eighth",label:"ગુજરાતી",key:"bengali"}
  ]
  const onNavigate = () =>{
    console.log("Language page is done");
     navigation.navigate('ViewPagerComp');
  }
    return(
        <View style={{height:'100%',width:'100%',backgroundColor:"#FFFFFF",padding:10}}>  
            <Image source={require('../assets/language_topicon.png')} style={{marginTop:20,alignSelf:'center'}}/>
            <Text style={{color:'black',alignSelf:'center',marginTop:15,fontSize:18,fontWeight:'bold'}}>Choose your preferred language</Text>
            <View style={{marginTop:10}}>
            {language.map((res,i)=>{
              return(
            <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
              <RadioButton.Item label={res.label} value={res.value} key={i} uncheckedColor="rgba(0, 0, 0, 0.54)"/>
              <View
          style={{
            borderBottomColor: '#D3D3D3',
            borderBottomWidth: 1,
          }}
        />
            </RadioButton.Group>  )
            
          })
        }
        </View>
            {/* <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
              <RadioButton.Item label="English" value="first" />
              <View
          style={{
            borderBottomColor: '#0070B2',
            borderBottomWidth: 1,
          }}
        />
              <RadioButton.Item label="தமிழ்" value="second" />
              <View
          style={{
            borderBottomColor: '#0070B2',
            borderBottomWidth: 1,
          }}
        />
              <RadioButton.Item label="हिन्दी" value="third" />
              <View
          style={{
            borderBottomColor: '#0070B2',
            borderBottomWidth: 1,
          }}
        />
              <RadioButton.Item label="తెలుగు" value="fourth" />
              <View
          style={{
            borderBottomColor: '#0070B2',
            borderBottomWidth: 1,
          }}
        />
              <RadioButton.Item label="മലയാളം" value="fifth"/>
              <View
          style={{
            borderBottomColor: '#0070B2',
            borderBottomWidth: 1,
          }}
        />
              <RadioButton.Item label="ಕನ್ನಡ" value="sixth"/>
              <View
          style={{
            borderBottomColor: '#0070B2',
            borderBottomWidth: 1,
          }}
        />
              <RadioButton.Item label="বাংলা" value="seventh" />
              <View
          style={{
            borderBottomColor: '#0070B2',
            borderBottomWidth: 1,
          }}
        />
              <RadioButton.Item label="ગુજરાતી" value="eighth" />
          </RadioButton.Group> */}
          <TouchableOpacity onPress={()=>onNavigate()}>
          <Image source={require('../assets/language_submit.png')} style={{alignSelf:'center',marginTop:20}}/>
          </TouchableOpacity>
        </View>
    );
}
export default Language;