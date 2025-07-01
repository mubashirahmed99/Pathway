import * as React from 'react';
import { StatusBar } from 'react-native';

function CustomStatusBar(props) {

    return <StatusBar barStyle={props?.barStyle} backgroundColor={props.backgroundColor} translucent />;
}

export default CustomStatusBar;
