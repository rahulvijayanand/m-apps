import { useFonts } from "expo-font";
import { Text as RNText } from "react-native";

const Text = ({ style, ...rest }) => {
  const [fontsLoaded] = useFonts({
    MetropolisSB: require("../fonts/Metropolis-SemiBold.otf"),
  });

  return (
    <RNText style={[{ fontFamily: "MetropolisSB" }, style]} {...rest} />
  );
};

export default Text;
