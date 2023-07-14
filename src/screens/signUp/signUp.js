import React from "react";
import { View , Text , Image, TextInput, TouchableOpacity} from "react-native";
import images from "../../constants/images";
import signUpstyle from "./signUpstyle";
import icons from "../../constants/icons";
import constants from "../../constants/constants";
const signUp =()=>{
    return (
        <View>
 <Image source={images.logo} style={signUpstyle.image}/>
 <Text style={signUpstyle.text1}>{constants.stext1}</Text>
 <Text style={signUpstyle.text2}>{constants.stext2}</Text>
       <Text style= {signUpstyle.text3}>{constants.stext3}</Text>
       <TextInput style={signUpstyle.textInput}>
       </TextInput>

       <Text style= {signUpstyle.text4}>{constants.stext4}</Text>
       <TextInput style={signUpstyle.textInput1}>
       </TextInput>

       <Text style= {signUpstyle.text5}>{constants.stext5}</Text>
       <TextInput style={signUpstyle.textInput2}>
       </TextInput>

<View style={{flexDirection:"row"}}>
       <TouchableOpacity style={signUpstyle.touchopacity}>
            <Text style={signUpstyle.text6}>{constants.stext6}</Text>
        </TouchableOpacity>
        </View>

        <View style={{flexDirection:"row" }}>
            <Text style={signUpstyle.text7}>{constants.stext7}</Text>
            <TouchableOpacity>
                <Text style={signUpstyle.text8}> {constants.stext8}</Text>
            </TouchableOpacity>
        </View>

        <View style={{flexDirection:"row"}}>
            <TouchableOpacity style={signUpstyle.touchopacity1}>
                <Image source={icons.facebook} style={signUpstyle.image1}/>
                <Text style={signUpstyle.text9}>{constants.stext9}</Text>
            </TouchableOpacity>
            
        </View>

        <View style={{flexDirection:"row" }}>
            <TouchableOpacity style={signUpstyle.touchopacity2}>
            <Image source={icons.google} style={signUpstyle.image1}/>
                <Text style={signUpstyle.text10}>{constants.stext10}</Text>
            </TouchableOpacity>
        </View>
        </View>

        
    );
};

export default signUp;