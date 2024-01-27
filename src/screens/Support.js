import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Support = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.centerContainer}>
                <Text style={{ color: 'black', fontWeight: "bold", fontSize: 22 }}>Customer Support Area</Text>
                <TouchableOpacity onPress={() => navigation.navigate('dash-board')}>
                    <Image style={{ width: 300, height: 200, marginTop: 30, marginBottom: 30 }} source={require('./assets/undraw_Team_spirit_re_yl1v.png')} />
                </TouchableOpacity>
                <Text>Under Developing, click on the image to return</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerContainer: {
        justifyContent: 'center',
        alignItems: 'center',

    },
})
export default Support;