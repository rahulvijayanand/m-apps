import { View, Text,Image,ImageBackground} from 'react-native'
import React from 'react'
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const CategoryComponent = (props) => {
  return (
    <ImageBackground style={{height:height*0.2,width:width-50,alignSelf:"center",marginTop:20}} source={props.image} imageStyle={{resizeMode:"cover",borderRadius:15}}>
        <Text style={{fontWeight:"bold",fontSize:28,margin:10,marginLeft:15,color:"white"}}>{props.name}</Text>
    </ImageBackground>
  )
}

export default CategoryComponent