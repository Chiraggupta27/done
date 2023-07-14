import React from "react";
import { View , Text , Image, TextInput, TouchableOpacity} from "react-native";
import images from "../../constants/images";
import homeScreenStyle from "./homeScreenStyle";
import icons from "../../constants/icons";

const homeScreen =()=>{
    return (
        <View>
 <Image source={images.logo} style={homeScreenStyle.image}/>
 <Text style={homeScreenStyle.text1}>Let's Sign You In</Text>
 <Text style={homeScreenStyle.text2}>Welcome back, you've been missed</Text>
       <Text style= {homeScreenStyle.text3}>Email</Text>
       <TextInput style={homeScreenStyle.textInput} 
       autoCorrect={false}
       autoCapitalize="none">
       </TextInput>

       <Text style= {homeScreenStyle.text4}>Password</Text>
       <TextInput style={homeScreenStyle.textInput1}
         autoCorrect={false}
         autoCapitalize="none"
         secureTextEntry>
       </TextInput>
<TouchableOpacity>
       <Text style={homeScreenStyle.text5}>Forgot Password ?</Text>
       </TouchableOpacity>

<View style={{flexDirection:"row"}}>
       <TouchableOpacity style={homeScreenStyle.touchopacity}>
            <Text style={homeScreenStyle.text6}>Sign In</Text>
        </TouchableOpacity>
        </View>

        <View style={{flexDirection:"row" }}>
            <Text style={homeScreenStyle.text7}>Don't have an account ? </Text>
            <TouchableOpacity>
                <Text style={homeScreenStyle.text8}> Sign Up</Text>
            </TouchableOpacity>
        </View>

        <View style={{flexDirection:"row"}}>
            <TouchableOpacity style={homeScreenStyle.touchopacity1}>
                <Image source={icons.facebook} style={homeScreenStyle.image1}/>
                <Text style={homeScreenStyle.text9}>Continue with facebook</Text>
            </TouchableOpacity>
            
        </View>

        <View style={{flexDirection:"row" }}>
            <TouchableOpacity style={homeScreenStyle.touchopacity2}>
            <Image source={icons.google} style={homeScreenStyle.image1}/>
                <Text style={homeScreenStyle.text10}>Continue with google</Text>
            </TouchableOpacity>
        </View>
        </View>

        
    );
};

export default homeScreen;