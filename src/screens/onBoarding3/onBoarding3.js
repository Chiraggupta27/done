import React from "react";
import { View , Text , Image, TouchableOpacity } from "react-native";
import images from "../../constants/images";
import onBoardingstyle3 from "./onBoardingstyle3";

const onBoarding3 =() => {
    return (
        <View>
    
            <Image source={images.back} style={onBoardingstyle3.image}/>
            <Image source={images.logo} style={onBoardingstyle3.image1}/>
            <Image source={images.great} style={onBoardingstyle3.image2}/>
        
         <Text style={onBoardingstyle3.text1}>Receive the Great Food</Text>
         <Text style={onBoardingstyle3.text2}>You'll receive the great food within a hour. and get free delivery credits for every order.</Text> 
        
        <View style={{flexDirection:"row" ,alignSelf:"center"}}>
            <View style={onBoardingstyle3.view1}></View>
            <View style={onBoardingstyle3.view2}></View>
            <View style={onBoardingstyle3.view3}></View>
        </View>

        
        <TouchableOpacity style={onBoardingstyle3.touchopacity}>
            <Text style={onBoardingstyle3.text4}>Next</Text>
        </TouchableOpacity>
        
        </View>
    );
};
export default onBoarding3;