import AsyncStorage from "@react-native-community/async-storage";
export const SaveHistory = async (address, lat, long) => {
    try {
        const History = await AsyncStorage.getItem('searchHistory');
        let locationHistory = History ? JSON.parse(History) : [];
        const newObjj = {
            Locationaddress: address,
            Latitude: lat,
            Longitude: long,
        };
        locationHistory.unshift(newObjj);
        if (locationHistory?.length > 20) {
            locationHistory.pop();
        }
        await AsyncStorage.setItem('searchHistory', JSON.stringify(locationHistory));
        console.log('locationHistory saved successfully!');
    } catch (error) {
        console.error('Error saving history:', error);
    }
};