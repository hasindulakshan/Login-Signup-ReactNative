import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    RefreshControl,
} from 'react-native';

const SignIn = ({ navigation }) => {
    const [refreshIconState, setRefreshIconState] = useState(false);
    const [isConfirmationVisible, setConfirmationVisible] = useState(false);

    const onRefreshState = () => {
        setRefreshIconState(true);
        setRefreshIconState(false);
    }

    const handleSignIn = () => {
        setConfirmationVisible(true);
    }

    const navigateToDashboard = () => {
        setConfirmationVisible(false);
        navigation.navigate('dash-board');
    }

    const cancelSignIn = () => {
        setConfirmationVisible(false);
    }

    return (
        <View style={styles.container}>
            <ScrollView refreshControl={<RefreshControl refreshing={refreshIconState} onRefresh={onRefreshState} />}>
                <View style={styles.centerContainer}>
                    <Text style={styles.greeting}>Welcome Back!</Text>
                    <Text>Back to the Pest Control, Log In here...</Text>
                    <View>
                        <Image
                            style={{ width: 250, height: 180, marginBottom: 25 }}
                            source={require('./assets/login.png')}
                        />
                    </View>

                    <TextInput style={styles.textBox} placeholder="   Enter Your email:" />
                    <TextInput style={styles.textBox} placeholder="   Enter Your Password:" />

                    <TouchableOpacity
                        style={styles.customButton}
                        onPress={handleSignIn}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('sign-up')}>
                        <Text style={{ color: 'black', marginTop: 10 }}>
                            Don't have an account? <Text style={styles.linkText}>Sign up</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {isConfirmationVisible && (
                <View style={styles.dialog}>
                    <Text style={{color:'black',fontSize:16,marginBottom:20,fontWeight:'bold'}}>Are you sure you want to sign in?</Text>
                    <TouchableOpacity onPress={navigateToDashboard}>
                        <Text style={{color:'blue',fontSize:18,marginBottom:10}}>OK</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={cancelSignIn}>
                        <Text style={{color:'red',fontSize:16,marginBottom:20}}>Cancel</Text>
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
        fontSize: 24,
        marginBottom: 20,
        marginTop: 60,
    },
    textBox: {
        width: 300,
        height: 45,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 2,
        marginBottom: 30,
    },
    customButton: {
        backgroundColor: '#1FCE1B',
        marginTop: 20,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 120,
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
});

export default SignIn;
