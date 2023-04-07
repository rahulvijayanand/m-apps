import { useFonts } from "expo-font";
import { Text as RNText } from "react-native";

const Text = ({ style, ...rest }) => {
  const [fontsLoaded] = useFonts({
    MetropolisRegular: require("../fonts/Metropolis-Regular.otf"),
  });

  return (
    <RNText style={[{ fontFamily: "MetropolisRegular" }, style]} {...rest} />
  );
};

export default Text;
