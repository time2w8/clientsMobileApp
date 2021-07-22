import React, { FC } from "react";
import {
    View,
    StatusBar,
    SafeAreaView,
    ViewStyle,
    StatusBarStyle,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView
} from "react-native";

interface IScreenProps {
    containerStyle?: ViewStyle;
    barStyle?: StatusBarStyle;
}

const Container: FC<IScreenProps> = ({ barStyle = "dark-content", containerStyle, children }) => {

    const isIOS = Platform.OS === "ios";

    return (
        <>
            <StatusBar
                barStyle={barStyle}
                backgroundColor={isIOS ? 'transparent' : '#F2F2F2'}
            />
            <SafeAreaView style={[{ flexDirection: "column", flex: 1 }, containerStyle]}>
                {children}
            </SafeAreaView>
        </>
    );
}

export default Container;