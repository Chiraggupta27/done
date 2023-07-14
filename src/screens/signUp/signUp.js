import React from "react";
import { View , Text , Image, TextInput, TouchableOpacity} from "react-native";
import images from "../../constants/images";
import signUpstyle from "./signUpstyle";
import icons from "../../constants/icons";

const signUp =()=>{
    return (
        <View>
 <Image source={images.logo} style={signUpstyle.image}/>
 <Text style={signUpstyle.text1}>Getting Started</Text>
 <Text style={signUpstyle.text2}>Create an account to continue</Text>
       <Text style= {signUpstyle.text3}>Email</Text>
       <TextInput style={signUpstyle.textInput}>
       </TextInput>

       <Text style= {signUpstyle.text4}>Username</Text>
       <TextInput style={signUpstyle.textInput1}>
       </TextInput>

       <Text style= {signUpstyle.text5}>Password</Text>
       <TextInput style={signUpstyle.textInput2}>
       </TextInput>

<View style={{flexDirection:"row"}}>
       <TouchableOpacity style={signUpstyle.touchopacity}>
            <Text style={signUpstyle.text6}>Sign In</Text>
        </TouchableOpacity>
        </View>

        <View style={{flexDirection:"row" }}>
            <Text style={signUpstyle.text7}>Already have an account ? </Text>
            <TouchableOpacity>
                <Text style={signUpstyle.text8}> Sign In</Text>
            </TouchableOpacity>
        </View>

        <View style={{flexDirection:"row"}}>
            <TouchableOpacity style={signUpstyle.touchopacity1}>
                <Image source={icons.facebook} style={signUpstyle.image1}/>
                <Text style={signUpstyle.text9}>Continue with facebook</Text>
            </TouchableOpacity>
            
        </View>

        <View style={{flexDirection:"row" }}>
            <TouchableOpacity style={signUpstyle.touchopacity2}>
            <Image source={icons.google} style={signUpstyle.image1}/>
                <Text style={signUpstyle.text10}>Continue with google</Text>
            </TouchableOpacity>
        </View>
        </View>

        
    );
};

export default signUp;