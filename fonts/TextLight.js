import { useFonts } from "expo-font";
import { Text as RNText } from "react-native";

const Text = ({ style, ...rest }) => {
  const [fontsLoaded] = useFonts({
    MetropolisL: require("../fonts/Metropolis-Thin.otf"),
  });

  return <RNText style={[{ fontFamily: "MetropolisL" }, style]} {...rest} />;
};

export default Text;
