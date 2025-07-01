import { Dimensions, FlatList, ImageBackground, Image, Text, TouchableOpacity, View, Alert, Platform, PermissionsAndroid } from "react-native";
import styles from "./style";
import { fontSize, scalableheight } from "../../Utilities/ResponsiveSheet";
// import FocusAwareStatusBar from "../../components/customStatusBar";
import style from "./style";
const GetStarted = ({ navigation }) => {
  return (
    <View style={{
      backgroundColor: 'red',
      width: '100%', height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: '5%'
    }}>
      <TouchableOpacity onPress={() => {
        // hasLocationPermissions()
        navigation.navigate('Map')

      }} style={{


        backgroundColor: 'pink',
        width: '100%',
        padding: 10

      }}>
        <Text style={{
          textAlign: 'center'
        }}>abc</Text>
      </TouchableOpacity>
    </View>
  );
};
export default GetStarted;
