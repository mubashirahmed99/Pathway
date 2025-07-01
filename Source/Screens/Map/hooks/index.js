import React, { useState, useEffect, useRef } from 'react';
import {
    Platform,
    PermissionsAndroid,
} from "react-native";
import 'react-native-get-random-values';
import AsyncStorage from "@react-native-community/async-storage";
import {SaveHistory} from '../../../Action/action'


import Geolocation from "react-native-geolocation-service";
import Geocoder from "react-native-geocoding";
export function useHooks(props) {
    const { navigation, route } = props
    const refMap = useRef(null);
    const ref = useRef();
    const searchRef = useRef();


    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [DeltaZoomIn, setDeltaZoomIn] = useState(0.01122);
    const [inlat, setinlat] = useState(0);
    const [inlong, setinlong] = useState(0);
    const [pinlocation, setpinlocation] = useState("");
    const [SearchHistory, setSearchHistory] = useState(false);
    const [places, Setplaces] = useState();
    const [Enabled, setEnabled] = useState(false);

    React.useEffect(() => {
        const subscribe = navigation.addListener("focus", () => {
            getLocation();
        });
        return subscribe;
    }, [navigation]);

    const getLocation = async () => {
        setpinlocation("");
        const hasLocationPermission = await hasLocationPermissions();
        if (!hasLocationPermission) {

            return;
        }
        Geolocation.getCurrentPosition(
            (position) => {
                const { coords } = position;
                setinlat(coords.latitude);
                setinlong(coords.longitude);
                setLatitude(coords.latitude);
                setLongitude(coords.longitude);

            },
            (error) => {
                console.log(error.message, "llll");
            },
            {
                accuracy: {
                    android: "high",
                    ios: "best",
                },
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 10000,
                distanceFilter: 0,
                forceRequestLocation: true,
                showLocationDialog: true,
            }
        );
    };

    const hasLocationPermissions = async () => {
        if (Platform.OS === "ios") {
            const hasPermission = await hasLocationPermissionIOS();
            return hasPermission;
        }

        if (Platform.OS === "android" && Platform.Version < 23) {
            return true;
        }

        const hasPermission = await PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );

        if (hasPermission) {
            return true;
        }

        const status = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );

        if (status === PermissionsAndroid.RESULTS.GRANTED) {
            return true;
        }

        if (status === PermissionsAndroid.RESULTS.DENIED) {
            ToastAndroid.show(
                "Location permission denied by user.",
                ToastAndroid.LONG
            );
        } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
            ToastAndroid.show(
                "Location permission revoked by user.",
                ToastAndroid.LONG
            );
        }
        return false;
    };

    const hasLocationPermissionIOS = async () => {
        const openSetting = () => {
            Linking.openSettings().catch(() => {
                console.log("Unable to open settings");
            });
        };
        const status = await Geolocation.requestAuthorization("whenInUse");

        if (status === "granted") {
            return true;
        }

        if (status === "denied") {
            console.log("Location permission denied");
        }

        if (status === "disabled") {
            Alert.alert(
                `Turn on Location Services to allow Bakery App to determine your location.`,
                "",
                [
                    { text: "Go to Settings", onPress: openSetting },
                    { text: "Don't Use Location", onPress: () => { } },
                ]
            );
        }
        return false;
    };

    function getnewlocation() {
        __DEV__ && console.log("locating");
        Geocoder.init("AIzaSyDO5bIiYu9EcYO37Omd1tHykC9QjZVL5fA");
        let lat = 0;
        let long = 0;
        Geolocation.getCurrentPosition((info) => {
            __DEV__ && console.log(info, "INFOOOOFOF");

            console.log(info?.coords?.latitude, "info?.coords?.latitude NEW");
            setinlat(info?.coords?.latitude);
            setinlong(info?.coords?.longitude);
            setLatitude(info?.coords?.latitude);
            setLongitude(info?.coords?.longitude);

            lat = info?.coords?.latitude;
            long = info?.coords?.longitude;

            Geocoder.from(lat, long)
                .then((json) => {
                    var addressComponent = json.results[0].formatted_address;
                    // __DEV__ && console.log(lat, long, "kkkk");
                    setpinlocation(addressComponent);
                })
                .catch((error) => {
                    console.warn(error, "errorerror");
                });
        });
    }

    const getHistory = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('searchHistory');
            console.log(jsonValue, 'jsonValuejsonValue')
            if (jsonValue != null) {
                const placesArray = JSON.parse(jsonValue);
                console.log('Retrieved places:', placesArray);
                Setplaces(placesArray)
                return placesArray;
            } else {
                console.log('No data found');
                return [];
            }
        } catch (e) {
            console.error('Error retrieving data:', e);
            return [];
        }
    }

    function locationdata(data) {
        setpinlocation('')
        Geocoder.init("AIzaSyDO5bIiYu9EcYO37Omd1tHykC9QjZVL5fA");
        Geocoder.from(data.description)
            .then((json) => {
                var location = json.results[0].geometry.location;
                setinlat(location.lat);
                setinlong(location.lng);
                setLatitude(location.lat);
                setLongitude(location.lng);
                Geocoder.from(location.lat, location.lng)
                    .then((json) => {
                        var addressComponent = json.results[0].formatted_address;

                        setpinlocation(addressComponent);
                        SaveHistory(json.results[0].formatted_address, location.lat, location.lng)
                        console.log(JSON.stringify(json.results[0]), 'addressComponent')

                        ref.current?.clear();
                    })
                    .catch((error) => {
                        ref.current?.clear();
                        console.warn(error);
                    });
                ref.current?.clear();
            })
            .catch((error) => console.warn(error));
    }

    const ZoomIn = () => {
        setDeltaZoomIn(DeltaZoomIn / 1.1);
    };

    const ZoomOut = () => {
        setDeltaZoomIn(DeltaZoomIn * 1.1);
    };
    return {
        refMap,
        ref,
        searchRef,
        latitude, setLatitude, setLongitude, DeltaZoomIn, setDeltaZoomIn, longitude, setLatitude, longitude, setLongitude, DeltaZoomIn, inlat, inlong, setinlat, setinlong, pinlocation, setpinlocation, SearchHistory, setSearchHistory, places, Setplaces,
        getnewlocation,
        getHistory,
        locationdata,
        ZoomIn,
        ZoomOut,
    }
}