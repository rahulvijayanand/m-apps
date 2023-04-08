import React from "react";
import { Image, StyleSheet, View,StatusBar,_ScrollView} from "react-native";
import Text from "../fonts/Text";
import TopBar from "../components/TopBar";
import NotifyMe from "../components/NotifyMe";
import ReadMore from "../components/ReadMore";
import { ScrollView } from "react-native-gesture-handler";
function ExploreScreen() {
  return (
    <View style={styles.container}>
     <TopBar/>
     <ScrollView showsVerticalScrollIndicator={false}>
     <NotifyMe/>
     <ReadMore/>
     </ScrollView>
    </View>
  );
}

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight + 10,
  },
});
