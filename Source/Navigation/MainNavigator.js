import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import GetStarted from "../Screens/Getstarted";
import Map from "../Screens/Map";
const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="GetStarted">
                <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
                <Stack.Screen name="Map" component={Map} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MainNavigator;
