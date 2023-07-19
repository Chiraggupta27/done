import { StyleSheet } from "react-native";
import themes from "../../constants/themes"
const styles = StyleSheet.create({
  view1: {
    flex: 1,
    marginHorizontal:25
  },
  view2: {
    alignItems: 'center',
    marginTop: 50,
    flexDirection: 'coloum',
    justifyContent: 'space-between',
    height: 150,
  },
  view3:{
    alignItems: 'center',
  },
  view4:{
//justifyContent:"flex-end",
marginTop:30,
flexDirection:"coloum",
justifyContent:"space-between",
height:280
  },
  view5:{
    marginTop:30

  },
  view6:{
flexDirection:"row",
height:30,
alignItems:"flex-end",
justifyContent:"center"
  },
  view7:{
    flexDirection:"coloum",
    justifyContent:"space-between",
    height:270
  },
  view8:{
flexDirection:"coloum",
justifyContent:"space-between",
height:115
  },
  image1: {
    height: 70,
    width: 220,
  },
  text1: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 20,
    color: 'grey',
  },
  text3:{
    fontSize:15,
    color:"grey"
  },
  text4:{
    alignSelf:"center",
    justifyContent:"center",
    color:"white"
  },
  text5:{
    color:"orange",
  },
  text6:{
    alignSelf:"center",
    justifyContent:"center",
    color:"black"
  }
});

export default styles;