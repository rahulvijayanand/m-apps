import * as React from 'react';
import { Text, View, StyleSheet,StatusBar,Image } from 'react-native';
import { AntDesign,MaterialIcons,MaterialCommunityIcons  } from '@expo/vector-icons';
const Savedcards=({data})=>{
    
    return(
        <View>
        {data.map((item, index) => (
       <View>
          <View style={{padding:"5%"}}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                {item.name}
              </Text>
              <Text
                style={{
                  textDecorationLine: 'underline',
                  textDecorationColor: 'black',
                  fontWeight: 'bold',
                  marginLeft: '5%',
                }}>
                Edit
              </Text>
            </View>
            <Text style={{ marginVertical: '5%' }}>Arunkumar {"\n"}Expires : {item.exp_date} </Text>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: '5%',
                width: '70%',
              }}>
              <MaterialCommunityIcons
                name="checkbox-marked"
                size={24}
                color="#82acd9"
              />

              <Text style={{marginLeft:"3%"}}>
                Save card as per new RBI guidelines.{' '}
                <Text style={{ color: '#82acd9' }}>Learn more</Text>
              </Text>
            </View>
           
          </View>
     <View style={{height:1,borderWidth:0.5,borderColor:"#afb3b1"}}/>
          </View>
      ))}
          </View>
    )
}
export default Savedcards;

