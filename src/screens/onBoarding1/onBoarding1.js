import React from "react";
import { View , Text , Image, TouchableOpacity } from "react-native";
import images from "../../constants/images";
import onBoardingstyle from "./onBoardingstyle";

const onBoarding1 =() => {
    return (
        <View>
    
            <Image source={images.back} style={onBoardingstyle.image}/>
            <Image source={images.logo} style={onBoardingstyle.image1}/>
            <Image source={images.favFood} style={onBoardingstyle.image2}/>
        
         <Text style={onBoardingstyle.text1}>Choose a Favourite Food</Text>
         <Text style={onBoardingstyle.text2}>When you order Eat Steet, we'll hook you up with exclusive coupon, specials and rewards</Text> 
        
        <View style={{flexDirection:"row" ,alignSelf:"center"}}>
            <View style={onBoardingstyle.view1}></View>
            <View style={onBoardingstyle.view2}></View>
            <View style={onBoardingstyle.view3}></View>
        </View>

        <Text style={onBoardingstyle.text3}>Skip</Text>
        <TouchableOpacity style={onBoardingstyle.touchopacity}>
            <Text style={onBoardingstyle.text4}>Next</Text>
        </TouchableOpacity>
        
        </View>
    );
};
export default onBoarding1;