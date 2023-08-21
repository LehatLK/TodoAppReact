import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const DeleteButton = ({ onPress }) => {
    return(
        < View style ={ styles.deleteButton}>
        <TouchableOpacity onPress={onPress}>
        <Text>DELETE</Text>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    deleteButton:{
        borderColor: 'black',
        borderRadius : 5,
        borderWidth: 3,
    }
})
export default DeleteButton;