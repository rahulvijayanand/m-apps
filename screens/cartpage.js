import { View, StyleSheet, StatusBar, Dimensions, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import productdata from "../productdata.json";
import { productcontext } from "../Context/context";
import Location from "../components/Location";
import WishlistComp from "../components/WishlistComp";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");
import BillingAddress from "../components/BillingAddress";
import Text from "../fonts/Text";
import Cartcomponent from "../components/cartcomponent";
import PurchaseDetails from "../components/PurchaseDetails";

const cartpage = ({ route, navigation }) => {
  const { product } = useContext(productcontext);
  const [currentproductdata, setproductdata] = product;
  const [iscartlength, setcartlength] = useState(0);
  useEffect(() => {
    let len = 0;
    for (let i = 0; i < currentproductdata.length; i++) {
      if (currentproductdata[i].iscart) {
        len = len + 1;
      }
    }
    setcartlength(len);
  }, [currentproductdata]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "white" }}
    >
      <View style={styles.container}>
        <View style={{ marginBottom: 30 }}>
          <Location navigation={navigation} type="cart" />
        </View>
        {iscartlength != 0 && (
          <TouchableOpacity onPress={() => {navigation.navigate("Payments")}}>
          <View
            style={{
              backgroundColor: "#263d2c",
              height: height * 0.07,
              width: width - 50,
              alignSelf: "center",
              borderRadius: 10,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "#91e2a8",
                fontSize: 22,
                alignSelf: "center",
                justifyContent: "center",
              }}
            >
              Continue
            </Text>
          </View>
          </TouchableOpacity>
        )}
        <BillingAddress />
        <View style={{ marginTop: 50 }}></View>

        {iscartlength == 0 && (
          <Image
            source={require("../assets/emptycart.png")}
            style={{
              width: width * 1.2,
              height: height * 0.2,
              resizeMode: "cover",
              alignSelf: "center",
            }}
          />
        )}
        {iscartlength == 0 && (
          <Text style={{ color: "#91e2a8", alignSelf: "center" }}>
            Your Cart is Empty !
          </Text>
        )}
        {currentproductdata.map(
          (item) =>
            item.iscart && (
              <Cartcomponent
                id={item.id}
                imageSource={item.images[0]}
                title={item.name}
                ratings={item.rating}
                numReviews={item.verified_buyers}
                oldPrice={item.originalprice}
                newPrice={item.priceafterdiscount}
                discount={item.offerpercentage}
                colors={item.variants["variantcolor"]}
                type={item.type}
                navigation={navigation}
              />
            )
        )}
        {iscartlength != 0 && <PurchaseDetails />}

        {iscartlength != 0 && (
          <TouchableOpacity onPress={() => {navigation.navigate("Payments")}}>
          <View
            style={{
              backgroundColor: "#263d2c",
              height: height * 0.07,
              width: width - 50,
              alignSelf: "center",
              borderRadius: 10,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "#91e2a8",
                fontSize: 22,
                alignSelf: "center",
                justifyContent: "center",
              }}
            >
              Continue
            </Text>
          </View>
          </TouchableOpacity>
        )}
        {iscartlength != 0 && <View style={{ marginBottom: 150 }}></View>}
      </View>
    </ScrollView>
  );
};

export default cartpage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    paddingTop: StatusBar.currentHeight + 10,
  },
});
