import { useFonts } from "expo-font";
import { Text as RNText } from "react-native";

const Text = ({ style, ...rest }) => {
  const [fontsLoaded] = useFonts({
    MetropolisB: require("../fonts/Metropolis-Bold.otf"),
  });

  return <RNText style={[{ fontFamily: "MetropolisB" }, style]} {...rest} />;
};

export default Text;
