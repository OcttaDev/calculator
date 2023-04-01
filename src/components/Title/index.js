import React from "react-native";

import {StyleSheet, View, Text } from "react-native";

function Title({text}){
    const style = StyleSheet.create({
        title: {
            fontSize: 30,
            marginBottom: 20,
            fontWeight: "bold"
            
        }
    })
    return(
        <View>
            <Text style={style.title}>{text}</Text>
        </View>
    )
}
export default Title