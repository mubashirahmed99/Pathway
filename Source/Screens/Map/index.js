
import React, { } from "react";
import {
  FlatList,
 
  View,
  TouchableOpacity,
  Modal, 
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MapView, { Marker } from "react-native-maps";
import { fontSize, scalableheight, } from "../../Utilities/ResponsiveSheet";
import style from "./style";
import { Safeareacontext } from '../../Utilities/SafeAreaContext';
import CustomStatusBar from '../../Components/CustomStatusBar';
import Seperator from '../../Components/Seperator';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useHooks } from './hooks';
import TextWrapper from "../../Components/TextWrapper";
const Map = props => {

  const {
    refMap,
    ref,
    searchRef,
    latitude,
    setLatitude,
    DeltaZoomIn,
    longitude,
    setLongitude,
    inlat,
    inlong,
    setinlat,
    setinlong,
    pinlocation,
    setpinlocation,
    SearchHistory,
    setSearchHistory,
    places,
    getnewlocation,
    getHistory,
    locationdata,
    ZoomIn,
    ZoomOut,
  } = useHooks(props);

  return (
    <View style={style.mainContainer}>
      <CustomStatusBar barStyle={'light-content'} backgroundColor="transparent" />
      <MapView
        ref={refMap}
        mapType={'standard'}
        initialZoom={DeltaZoomIn}
        style={style.mapStyle}
        showsUserLocation={true}
        region={{
          latitude: inlat,
          longitude: inlong,
          latitudeDelta: DeltaZoomIn,
          longitudeDelta: 0.00121,
        }}
        initialRegion={{
          latitude: inlat,
          longitude: inlong,
          latitudeDelta: DeltaZoomIn,
          longitudeDelta: 0.00121,
        }}
      >


        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
        >
          {pinlocation != '' &&
            <View style={style.LocationdesCard}>
              <TextWrapper style={style.LocationtextCard} text={pinlocation} />
            </View>}
        </Marker>
      </MapView>
      <View
        style={{
          ...style.innercontainer,
          paddingTop: Safeareacontext.top,
        }}
      >
        <View style={{
          ...style.topHeaderButton,
          top: Safeareacontext.top

        }}>
          <TouchableOpacity style={style.topHeaderButtoninner}
            onPress={() => {
              getHistory()
              setSearchHistory(!SearchHistory)
              setpinlocation('')
            }}>
            <FontAwesome5
              name="history"
              color={'#F05252'}

              size={fontSize.twenty}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[style.topHeaderButtoninner, {
            right: 0,
          }]} onPress={() => {
            getnewlocation()
          }}>
            <MaterialCommunityIcons
              name="crosshairs-gps"
              color={'#F05252'}
              size={fontSize.twenty}
            />
          </TouchableOpacity>
        </View>
        <GooglePlacesAutocomplete
          ref={searchRef}
          placeholder={'Search'}
          fetchDetails={true}
          isRowScrollable={false}
          onPress={(data,
          ) => {
            locationdata(data);
            searchRef.current?.setAddressText('');
          }}
          numberOfLines={1}
          styles={{
            textInput: {
              ...style.googletext,
            },
            textInputContainer: {
              width: '75%',
            },
            container: {
              zIndex: 3000,
              paddingHorizontal: scalableheight.one,
              borderRadius: fontSize.borderradiusmedium,

            },
          }}
          query={{
            key: "AIzaSyDO5bIiYu9EcYO37Omd1tHykC9QjZVL5fA",
            language: 'en',
          }}
        />
        <TouchableOpacity
          style={{
            ...style.PlusMinus,
            bottom: scalableheight.four,
            right: scalableheight.one
          }}
          onPress={() => {
            ZoomIn();
          }}
        >
          <MaterialCommunityIcons
            name="plus"
            color={'#F05252'}
            size={fontSize.twenty}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            ZoomOut();
          }}
          style={{
            ...style.PlusMinus,
            bottom: scalableheight.ten,
            right: scalableheight.one
          }}
        >
          <MaterialCommunityIcons
            name="minus"
            color={'#F05252'}
            size={fontSize.twenty}
          />
        </TouchableOpacity>
      </View>
      <Modal
        transparent
        style={style.modalMain}
        statusBarTranslucent
        visible={SearchHistory}
      >
        <View
          style={[style.modalInner, {
            paddingTop: Safeareacontext.top,
          }]}>
          <View style={style.modalHeader}>
            <TouchableOpacity style={{
            }} onPress={() => {
              setSearchHistory(false)
            }}>
              <Ionicons
                name="chevron-back"
                color={'#F05252'}
                size={fontSize.twenty}
              />
            </TouchableOpacity>
            <TextWrapper style={style.heading} text={'Location History'} />

          </View>
          <FlatList
            data={places}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
            }}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={() => {
              return (
                <View
                  style={style.emptyList}>

                  <TextWrapper style={style.emptytext} text={'No History Found'} />
                </View>
              );
            }}
            renderItem={({ item }) => (
              <>
                <TouchableOpacity
                  style={style.listLayout}
                  onPress={() => {
                    setinlat(item.Latitude);
                    setinlong(item.Longitude);
                    setLatitude(item.Latitude);
                    setLongitude(item.Longitude);
                    setpinlocation(item.Locationaddress);
                    setSearchHistory(false)
                  }}
                >
                  <Ionicons
                    name="location-sharp"
                    color={'#F05252'}
                    size={fontSize.twenty}
                  />
                  <TextWrapper style={style.listAddress} text={item?.Locationaddress} />
                </TouchableOpacity>
                <Seperator />
              </>
            )}
          />
        </View>
      </Modal>
    </View>

  );
};

export default Map;


