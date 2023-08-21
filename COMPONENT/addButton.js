import React from "react";
import { TouchableOpacity, Text } from "react-native";

const Addbutton = ({ onPress }) => {
    return(
<TouchableOpacity onPress={onPress}>
        <Text>Add</Text>
</TouchableOpacity>


    );
};


export default Addbutton;