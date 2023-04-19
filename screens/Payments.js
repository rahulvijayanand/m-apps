import React,{useContext,useEffect,useState} from "react";
import { Text, View, StyleSheet, StatusBar,ScrollView } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import Save from "../components/Saveopt"
import Button from "../components/Button";
import Othermodes from "../components/OtherModes"
import Amount from "../components/Amount"
import productdata from "../productdata.json";
import { productcontext } from "../Context/context";

const Cardinfo = [
  { id: 1, name: "Visa ****9080", exp_date: "08/27" },
  { id: 2, name: "Yes Bank Credit Card ****8980", exp_date: "07/29" },
  { id: 3, name: "ICICI Credit Card ****2880", exp_date: "08/27" },
];
const Onlinepay=[
  {id:1,name:"Google pay"},
  {id:2,name:"Phonepe"},
  {id:3,name:"Paytm"}
]

const others=[
  {id:1,name:"Add Debit/Credit/ATM card",info:"You can see your cards as per new RBI Guidelines.",l:" Learn more"},
  {id:2,name:"Net Banking"},
  {id:2,name:"Pay on delivery",info:"Currently not available"}
]
export default function Payments({route,navigation}) {
    const { product } = useContext(productcontext);
  const [currentproductdata, setproductdata] = product;

  const [totaldiscountedprice,settotaldiscountedprice]=useState(0);

  useEffect(() => {
    let discount=0
    for(let i=0;i<currentproductdata.length;i++){
        if(currentproductdata[i].iscart){
            discount=discount+(parseInt(currentproductdata[i].count)*parseInt(currentproductdata[i].priceafterdiscount))
        }
    }
    settotaldiscountedprice(discount)
  }, [currentproductdata]);


  return (
    
    <View style={styles.container}>
    
      
      
      <View
        style={{
          marginHorizontal: "5%",
          flexDirection: "row",
          marginVertical: "7%",
        }}
      >
        <AntDesign name="arrowleft" size={28} color="black" />
        <Text style={{ fontSize: 24, marginHorizontal: "3%" }}>
          Payments
        </Text>
      </View>
      <ScrollView>
       <Button name="Continue"/>
      <Amount name={totaldiscountedprice}/>
      <View
        style={{
          marginHorizontal: "5%",
          borderRadius: 5,
          borderColor: "#afb3b1",
          borderWidth: 0.5,
          marginVertical:"10%"
        }}
      >
          <Save data={Cardinfo} />
       
      </View>
      <View
        style={{
          marginHorizontal: "5%",
          borderRadius: 5,
          borderColor: "#afb3b1",
          borderWidth: 0.5,
          marginVertical:"10%"
        }}
      >
     <View style={{padding:"5%"}}>
    <Text
          style={{
          
            fontWeight: 'bold',
            fontSize: 18,
          }}>
     Other Modes
     
        </Text>
        </View>
        <Othermodes onlinepay={Onlinepay} other={others}/>
      </View>
        <Button name="Continue"/>
     </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
},

});