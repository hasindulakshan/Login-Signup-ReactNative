import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Profile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.centerContainer}>
                <Text style={{ color: 'black', fontWeight: "bold", fontSize: 22 }}>User Information</Text>
                <TouchableOpacity onPress={() => navigation.navigate('dash-board')}>
                    <Image style={{ width: 400, height: 200, marginTop: 30, marginBottom: 30 }} source={require('./assets/profile.png')} />
                </TouchableOpacity>
                <Text>Under Developing, click on the image to return</Text>
                <TouchableOpacity onPress={() => navigation.navigate('sign-up')}>
                    <Text style={{ marginTop: 30, color: 'blue' }}>Log out</Text>
                </TouchableOpacity>
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
export default Profile;

