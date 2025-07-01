import React from 'react';
import {
    Text,
} from 'react-native';

export default function TextWrapper(props) {

    return (
        <Text
           
            numberOfLines={props.numberOfLines}
            style={[props.style]}>{props.text}</Text>
    );
}

