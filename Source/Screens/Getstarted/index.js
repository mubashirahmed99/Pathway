import { Dimensions, FlatList, ImageBackground, Image, Text, TouchableOpacity, View, Alert, Linking, Platform, PermissionsAndroid } from "react-native";
import styles from "./style";
import { fontSize, scalableheight } from "../../Utilities/ResponsiveSheet";
// import FocusAwareStatusBar from "../../components/customStatusBar";
import style from "./style";
import TextWrapper from "../../Components/TextWrapper";
import CustomStatusBar from "../../Components/CustomStatusBar";
import { Safeareacontext } from "../../Utilities/SafeAreaContext";
const GetStarted = ({ navigation }) => {
  const hasLocationPermissions = async () => {
    if (Platform.OS === "android" && Platform.Version < 23) {
      navigation.navigate('Map');
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (hasPermission) {
      navigation.navigate('Map');
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      navigation.navigate('Map');
      return true;
    }

    if (
      status === PermissionsAndroid.RESULTS.DENIED ||
      status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN
    ) {
      Alert.alert(
        'Location Permission',
        'Location permission is required to use this feature. Please enable it in your app settings.',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Open Settings',
            onPress: () => {
              Linking.openSettings().catch(() => {
                ToastAndroid.show("Unable to open settings", ToastAndroid.SHORT);
              });
            },
          },
        ],
        { cancelable: true }
      );
    }

    return false;
  };
  return (
    <ImageBackground
      resizeMode="cover"
      local={true}
      source={require("../../Utilities/Assets/Images/map3.png")}
      style={style.BackgroundImage}
    >
      <CustomStatusBar barStyle={'dark-content'} backgroundColor="transparent" />
      <View style={[style.innercontainer, {
        paddingBottom: Safeareacontext.bottom
      }]}>
        <TouchableOpacity onPress={() => {
          hasLocationPermissions()
        }} style={style.button}>
          <TextWrapper style={{ fontSize: fontSize.fifteen, color: 'white' }} text={'PROCEED'} />
        </TouchableOpacity>

      </View>
    </ImageBackground>




  );
};
export default GetStarted;
