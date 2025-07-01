import React from 'react';
import {
  View,
} from 'react-native';
import styleSheet from './style'
export default function Seperator(props) {


  return (
    <View style={[styleSheet.container, props.style]}></View>
  );
}

