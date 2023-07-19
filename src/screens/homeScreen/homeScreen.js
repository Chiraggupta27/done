import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,

} from 'react-native';
import images from '../../constants/images';
import homeScreenStyle from './homeScreenStyle';
import icons from '../../constants/icons';
import constants from '../../constants/constants';
import regex from '../../utility/regex';



const HomeScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const [error, setError] = useState('');
  const [correct, setCorrect] = useState('');
  const [error1, setError1] = useState('');
  const [correct1, setCorrect1] = useState('');

  const validateEmail = email => {
    const emailRegex = regex.emailReegex
      
    return emailRegex.test(email);
  };
  const validatePassword = password => {
    const passwordRegex = regex.passwordRegex
    return passwordRegex.test(password);
  };

  const handleValidation = () => {

   
    if (!validateEmail(email)) {
      setError('please enter a valid email');
      setCorrect('');
      return;
    }
    if (validateEmail(email)) {
      setCorrect('valid email address');
      setError('')
      return;
    }
   
  };

  const handleValidationpassword = () => {
    if (!validatePassword(password)) {
      setError1('please enter a valid password');
      setCorrect1('');
      return;
    }
    if (validatePassword(password)) {
      setCorrect1('valid password');
      setError1('');
      return;
    }
   
  };
  return (
    <View>
      <View style={{flexDirection:"coloum"}}>
        <Image source={images.logo} style={homeScreenStyle.image} />
      
        <Text style={homeScreenStyle.text1}>{constants.text1}</Text>
        <Text style={homeScreenStyle.text2}>{constants.text2}</Text>
      </View>

      <View>
        <Text style={homeScreenStyle.text3}>{constants.text3}</Text>
        <TextInput
          style={homeScreenStyle.textInput}
          autoCorrect={false}
          value={email}
          onChangeText={text => setEmail(text)}
          onChange={handleValidation}
          autoCapitalize="none"
        />
        {error ? (
          <Text style={homeScreenStyle.textValidate}>{error}</Text>
        ) : null}
        {correct ? (
          <Text style={homeScreenStyle.textValidate1}>{correct}</Text>
        ) : null}
        <Text style={homeScreenStyle.text4}>{constants.text4}</Text>
        <TextInput
          style={homeScreenStyle.textInput1}
          autoCorrect={false}
          value={password}
          onChangeText={text => setPassword(text)}
          onChange={handleValidationpassword}
          autoCapitalize="none"
          secureTextEntry
        />
        {error1 ? (
          <Text style={homeScreenStyle.textValidate2}>{error1}</Text>
        ) : null}
        {correct1 ? (
          <Text style={homeScreenStyle.textValidate3}>{correct1}</Text>
        ) : null}
      </View>
      <TouchableOpacity>
        <Text style={homeScreenStyle.text5}>{constants.text5}</Text>
      </TouchableOpacity>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={homeScreenStyle.touchopacity}>
          <Text style={homeScreenStyle.text6}>{constants.text6}</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text style={homeScreenStyle.text7}>{constants.text7} </Text>
        <TouchableOpacity>
          <Text style={homeScreenStyle.text8}> {constants.text8}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'coloum'}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={homeScreenStyle.touchopacity1}>
            <Image source={icons.facebook} style={homeScreenStyle.image1} />
            <Text style={homeScreenStyle.text9}>{constants.text9}</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={homeScreenStyle.touchopacity2}>
            <Image source={icons.google} style={homeScreenStyle.image1} />
            <Text style={homeScreenStyle.text10}>{constants.text10}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;


// export default function homeScreen ({navigation}){
//     function handleNavigation(screenName){
//         navigation.navigate(screenName)
//     }
// }

// onPress ={handleNavigation('screen1')}
// onPress ={navigation.navigate("onBoarding2")}