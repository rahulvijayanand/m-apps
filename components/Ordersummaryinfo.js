import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from "../fonts/Text";

const Info=[
  {oid:1234567890,date:"24 April 2023,Monday",status:"Ordered",estimate:"28 April,2023 Friday"}
]

const op=()=>{
  return(
    
   <View>
    <View style={{marginHorizontal:"10%",marginVertical:"15%",padding:"3%",flexDirection:"row",justifyContent:"space-between",
        borderColor:"gray",
       borderWidth:0.3,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        elevation: 5,
        backgroundColor:"white"
       
        }}> 
    <View >
    <View style={{marginVertical:"5%"}}>
   <Text style={styles.col1}>OrderID</Text>
   <Text>123456789</Text>
   </View>
   <View>
   <Text style={styles.col1}>Order Status</Text>
   <Text>Ordered</Text>
   </View>
   </View>

   <View >
    <View style={{marginVertical:"5%"}}>
   <Text style={styles.col1}>Order date</Text>
   <Text>24 April 2023,Monday</Text>
   </View>
   <View>
   <Text style={styles.col1}>Delivery Estimate</Text>
   <Text>28 April,2023 Friday</Text>
   </View>
   </View>
</View>

    </View>
    
  )
}
export default op;
const styles=StyleSheet.create({
  col1:{
    color:"#263D2C4D",
    fontWeight:"bold"
  }
})