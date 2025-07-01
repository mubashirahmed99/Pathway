import 'react-native-get-random-values';
import { Alert, Linking, Platform, PermissionsAndroid } from "react-native";




export function useHooks(props) {
    const { navigation } = props
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
    return {
        hasLocationPermissions
    }
}