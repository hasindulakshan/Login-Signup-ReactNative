import React, { useState } from "react";
import { View, Text, TouchableOpacity,
    StyleSheet, Image, TextInput, RefreshControl,
    ScrollView, } from 'react-native';

const SignUp = ({ navigation }) => {
    const [refreshIconState, setRefreshIconState] = useState(false);
    const [isConfirmationVisible, setConfirmationVisible] = useState(false);

    const onRefreshState = () => {
        setRefreshIconState(true);
        setRefreshIconState(false);
    }

    const handleSignUp = () => {
        setConfirmationVisible(true);
    }

    const navigateToDashboard = () => {
        setConfirmationVisible(false);
        navigation.navigate('dash-board');
    }

    const cancelSignUp = () => {
        setConfirmationVisible(false);
    }

    return (
        <View style={styles.container}>
            <ScrollView refreshControl={<RefreshControl refreshing={refreshIconState}
            onRefresh={onRefreshState} />}>
                <View style={styles.centerContainer}>
                    <Text style={styles.greeting}>Welcome Back to Pest Control !</Text>
                    <Text style={styles.greeting_sub}>Hope to assist you & your issues</Text>
                    <View>
                        <Image style={{ width: 210, height: 160, margin: 12 }}
                        source={require('./assets/welcome.png')} />
                    </View>
                    <TextInput style={styles.textBox} placeholder="   Enter Your Name:" />
                    <TextInput style={styles.textBox} placeholder="   Enter Your email:" />
                    <TextInput style={styles.textBox} placeholder="   Enter Your Password:" />
                    <TextInput style={styles.textBox} placeholder="   Confirm Password:" />
                    <TouchableOpacity
                        style={styles.customButton}
                        onPress={handleSignUp}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('sign-in')}>
                        <Text style={{ color: 'black', marginTop: 10 }}>
                            Already have an account? <Text style={styles.linkText}>Log in</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            {isConfirmationVisible && (
                <View style={styles.dialog}>
                    <Text style={{ color: 'black', fontSize: 16, marginBottom: 20, fontWeight: 'bold' }}>Are you sure you want to sign up?</Text>
                    <TouchableOpacity onPress={navigateToDashboard}>
                        <Text style={{ color: 'blue', fontSize: 18, marginBottom: 10 }}>OK</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={cancelSignUp}>
                        <Text style={{ color: 'red', fontSize: 18, marginBottom: 10 }}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            )}
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
    greeting: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: 25,
        marginBottom: 10
    },
    greeting_sub: {
        color: 'black',
        fontSize: 16,
        marginBottom: 15,
    },
    textBox: {
        width: 300,
        height: 45,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 2,
        marginBottom: 20,
    },
    customButton: {
        marginTop: 20,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 120,
        backgroundColor: '#1FCE1B'
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    linkText: {
        color: 'blue',
        fontSize: 16,
    },
    dialog: {
        position: 'absolute',
        top: '40%',
        left: '10%',
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 10 },
        shadowOpacity: 10,
        shadowRadius: 10,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default SignUp;
