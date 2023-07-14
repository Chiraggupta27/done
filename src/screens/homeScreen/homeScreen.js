import React from "react";
import { View , Text , Image, TextInput, TouchableOpacity} from "react-native";
import images from "../../constants/images";
import homeScreenStyle from "./homeScreenStyle";
import icons from "../../constants/icons";
import constants from "../../constants/constants";

const homeScreen =()=>{
    return (
        <View>
 <Image source={images.logo} style={homeScreenStyle.image}/>
 <Text style={homeScreenStyle.text1}>{constants.text1}</Text>
 <Text style={homeScreenStyle.text2}>{constants.text2}</Text>
       <Text style= {homeScreenStyle.text3}>{constants.text3}</Text>
       <TextInput style={homeScreenStyle.textInput} 
       autoCorrect={false}
       autoCapitalize="none">
       </TextInput>

       <Text style= {homeScreenStyle.text4}>{constants.text4}</Text>
       <TextInput style={homeScreenStyle.textInput1}
         autoCorrect={false}
         autoCapitalize="none"
         secureTextEntry>
       </TextInput>
<TouchableOpacity>
       <Text style={homeScreenStyle.text5}>{constants.text5}</Text>
       </TouchableOpacity>

<View style={{flexDirection:"row"}}>
       <TouchableOpacity style={homeScreenStyle.touchopacity}>
            <Text style={homeScreenStyle.text6}>{constants.text6}</Text>
        </TouchableOpacity>
        </View>

        <View style={{flexDirection:"row" }}>
            <Text style={homeScreenStyle.text7}>{constants.text7} </Text>
            <TouchableOpacity>
                <Text style={homeScreenStyle.text8}> {constants.text8}</Text>
            </TouchableOpacity>
        </View>

        <View style={{flexDirection:"row"}}>
            <TouchableOpacity style={homeScreenStyle.touchopacity1}>
                <Image source={icons.facebook} style={homeScreenStyle.image1}/>
                <Text style={homeScreenStyle.text9}>{constants.text9}</Text>
            </TouchableOpacity>
            
        </View>

        <View style={{flexDirection:"row" }}>
            <TouchableOpacity style={homeScreenStyle.touchopacity2}>
            <Image source={icons.google} style={homeScreenStyle.image1}/>
                <Text style={homeScreenStyle.text10}>{constants.text10}</Text>
            </TouchableOpacity>
        </View>
        </View>

        
    );
};

export default homeScreen;