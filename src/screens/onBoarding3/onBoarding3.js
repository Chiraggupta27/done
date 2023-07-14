import React from "react";
import { View , Text , Image, TouchableOpacity } from "react-native";
import images from "../../constants/images";
import onBoardingstyle3 from "./onBoardingstyle3";
import constants from "../../constants/constants";

const onBoarding3 =() => {
    return (
        <View>
    
            <Image source={images.back} style={onBoardingstyle3.image}/>
            <Image source={images.logo} style={onBoardingstyle3.image1}/>
            <Image source={images.great} style={onBoardingstyle3.image2}/>
        
         <Text style={onBoardingstyle3.text1}>{constants.ntext1}</Text>
         <Text style={onBoardingstyle3.text2}>{constants.ntext2}</Text> 
        
        <View style={{flexDirection:"row" ,alignSelf:"center"}}>
            <View style={onBoardingstyle3.view1}></View>
            <View style={onBoardingstyle3.view2}></View>
            <View style={onBoardingstyle3.view3}></View>
        </View>

        
        <TouchableOpacity style={onBoardingstyle3.touchopacity}>
            <Text style={onBoardingstyle3.text4}>{constants.ntext3}</Text>
        </TouchableOpacity>
        
        </View>
    );
};
export default onBoarding3;