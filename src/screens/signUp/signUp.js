import React from "react";
import { View , Text, Image ,TextInput ,TouchableOpacity} from "react-native";
import styles from "./signUpstyle";
import images from "../../constants/images";
import constants from "../../constants/constants";
import textInputstyle from "../../Components/textInput/textInputstyle"
import buttonStyle from "../../Components/buttons/buttonStyle"

const signUp = () => {
    return (
<View style={styles.view1}>
    <View style={styles.view2}>
        <Image source = {images.logo} style={styles.image1}/>
        <Text style={styles.text1}>{constants.stext1}</Text>
    </View>
    <View style={styles.view3}>
        <Text style={styles.text2}>{constants.stext2}</Text>
    </View>

    <View style={styles.view4}>
        <Text style={styles.text3}>{constants.stext3}</Text>
        <TextInput style={textInputstyle.style}></TextInput>
        <Text style={styles.text3}>{constants.stext4}</Text>
        <TextInput style={textInputstyle.style}></TextInput>
        <Text style={styles.text3}>{constants.stext5}</Text>
        <TextInput style={textInputstyle.style}></TextInput>
    </View>

    <View style={styles.view5}>
        <TouchableOpacity style={buttonStyle.style}>
            <Text style={styles.text4}>{constants.stext6}</Text>
        </TouchableOpacity>
    </View>


<View style={styles.view7}>
    <View style={styles.view6}>
        <Text style={styles.text3}>{constants.stext7}</Text>
        <TouchableOpacity >
            <Text style={styles.text5}>{constants.stext8}</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.view8}>
        <TouchableOpacity style={buttonStyle.style1}>
        <Text style={styles.text4}>{constants.stext9}</Text>

        </TouchableOpacity >

        <TouchableOpacity style={buttonStyle.style2}>
        <Text style={styles.text6}>{constants.stext10}</Text>

        </TouchableOpacity>

    </View>

    </View>

</View>
    );
};

export default signUp