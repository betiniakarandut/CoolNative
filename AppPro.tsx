import React from "react";

import {
    View,
    Text,
    useColorScheme,
    StyleSheet,
} from 'react-native'

function AppPro(): JSX.Element{
    const IsDarkMode = useColorScheme() === 'dark';
    return(
        <View style = {styles.container}>
            <Text style={IsDarkMode ? styles.whiteText : styles.darkText }>Welcome to App Pro</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    whiteText: {
        color: '#FFFFFF'
    },
    darkText: {
        color: '#000000'
    }
})

export default AppPro;