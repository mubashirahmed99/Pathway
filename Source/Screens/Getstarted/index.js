import { ImageBackground, TouchableOpacity, View} from "react-native";

import style from "./style";
import TextWrapper from "../../Components/TextWrapper";
import CustomStatusBar from "../../Components/CustomStatusBar";
import { Safeareacontext } from "../../Utilities/SafeAreaContext";
import { useHooks } from './hooks';
const GetStarted = props => {
  const {
    hasLocationPermissions
  } = useHooks(props);

  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../../Utilities/Assets/Images/map.png")}
      style={style.BackgroundImage}
    >
      <CustomStatusBar barStyle={'dark-content'} backgroundColor="transparent" />
      <View style={[style.innercontainer, {
        paddingBottom: Safeareacontext.bottom
      }]}>
        <TouchableOpacity onPress={
          hasLocationPermissions
        } style={style.button}>
          <TextWrapper style={style.buttontext} text={'PROCEED'} />
        </TouchableOpacity>

      </View>
    </ImageBackground>




  );
};
export default GetStarted;
