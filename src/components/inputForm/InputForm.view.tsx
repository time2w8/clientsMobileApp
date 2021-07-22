import React, { FC } from "react";
import { StyleProp, TextStyle } from "react-native";
import { TextInput as TextInputPaper } from 'react-native-paper';

interface IComponentProps {
    containerStyle: StyleProp<TextStyle>,
    label: string,
    icon: string,
    value: any,
    onChangeText: (v: any) => any,
    onBlur: (v: any) => any,
}

const InputForm: FC<IComponentProps> = ({ containerStyle, label = 'label', icon = 'lock', value, onChangeText, onBlur }) => {
    return (
        <>
            <TextInputPaper
                label={label}
                mode="flat"
                left={<TextInputPaper.Icon name={icon} />}
                style={containerStyle}
                value={value}
                theme={{ colors: { primary: 'gray' } }}
                selectionColor={'gray'}
                underlineColor={'gray'}
                outlineColor={'gray'}
                onChangeText={onChangeText}
                onBlur={onBlur}
            />
        </>
    )
}

export default InputForm;