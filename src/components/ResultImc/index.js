import React from "react-native";

import { View, Text } from "react-native";

function ResultImc({result, message}){
    return(
        <View>
            <Text>{message}</Text>
            <Text>{result}</Text>
        </View>
    )
}
export default ResultImc