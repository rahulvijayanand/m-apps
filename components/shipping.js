
import * as React from 'react';
import {  View, StyleSheet } from 'react-native';
import Text from "../fonts/Text";
import TextSemiBold from "../fonts/TextSemiBold"
const Info=[
  {name:"Billing Address",street:"NO1,ABC street",door_no:"Room No 24, 2nd floor",district:"Chennai-97"},
   {name:"Billing Address",street:"NO1,ABC street",door_no:"Room No 24, 2nd floor",district:"Chennai-97"}
]


const Ship=()=>{
  
  return(
    <View style={{marginTop:"15%"}}>
<View style={{height:1,borderWidth:1,borderColor:"#263D2C1A"}}/>
<TextSemiBold style={{marginHorizontal:"5%",marginVertical:"5%",fontSize:24}}>Shipping info</TextSemiBold>
{Info.map((item,index)=>(
  <View style={{marginHorizontal:"10%",marginVertical:"7%",borderColor:"#263D2C29",borderWidth:1,padding:"3%",borderRadius:10,borderColor:"gray",
  borderWidth:0.3,
   shadowColor: "#000",
   shadowOpacity: 0.25,
   shadowRadius: 3.84,
   shadowOffset: {
     width: 0,
     height: 2,
   },
   elevation: 5,
   backgroundColor:"white"}}>
  <Text style={{fontWeight:"bold",marginVertical:"5%"}}>{item.name}</Text>
  <Text>{item.street}</Text>
   <Text>{item.door_no}</Text>
    <Text>{item.district}</Text>
 </View>
))}

</View>
  )
}

export default Ship;