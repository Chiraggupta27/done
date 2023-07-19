import React from "react";
import { View , Text , Image, TouchableOpacity } from "react-native";
import images from "../../constants/images";
import onBoardingstyle from "./onBoardingstyle";
import constants from "../../constants/constants";

const OnBoarding1 =({navigation}) => { 
    return (
      <View>
        <Image source={images.back}  style={onBoardingstyle.image}/>
        <Image source={images.logo} style={onBoardingstyle.image1} />
        <Image source={images.favFood} style={onBoardingstyle.image2} />

        <Text style={onBoardingstyle.text1}>{constants.otext1}</Text>
        <Text style={onBoardingstyle.text2}>{constants.otext2}</Text>

        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <View style={onBoardingstyle.view1}></View>
          <View style={onBoardingstyle.view2}></View>
          <View style={onBoardingstyle.view3}></View>
        </View>

        <Text style={onBoardingstyle.text3}>{constants.otext3} </Text>
        <TouchableOpacity
          style={onBoardingstyle.touchopacity}
          onPress={navigation.navigate('Screen2')}>
          <Text style={onBoardingstyle.text4}>{constants.otext4} </Text>
        </TouchableOpacity>
      </View>
    );
};
export default OnBoarding1;