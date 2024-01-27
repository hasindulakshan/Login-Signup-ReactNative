import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const Home = ({ navigation }) => {
  return (

    <View style={styles.container}>
      <ScrollView>
        <View style={styles.centerContainer}>
          <Text style={styles.greeting}>DashBoard</Text>
          <View>
            <Image
              style={{ width: 250, height: 180, }}
              source={require('./assets/Dashboard.png')}
            />
          </View>
          <View style={styles.divider} />
          <View style={styles.centerContainer2}>
            <TouchableOpacity onPress={() => navigation.navigate('profile')}>
              <Image
                style={{ width: 100, height: 100, marginBottom: 5 }}
                source={require('./assets/boy.png')}
              />
            </TouchableOpacity>
            <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>User Profile</Text>
            <TouchableOpacity onPress={() => navigation.navigate('pest')}>
              <Image
                style={{ width: 100, height: 100, marginTop: 25, marginBottom: 5 }}
                source={require('./assets/beetle.png')}
              />
            </TouchableOpacity>
            <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>Pests Information</Text>
            <TouchableOpacity onPress={() => navigation.navigate('weather')}>
              <Image
                style={{ width: 100, height: 100, marginTop: 25, marginBottom: 5 }}
                source={require('./assets/weather.png')}
              />
            </TouchableOpacity>
            <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>Check Weather</Text>
            <TouchableOpacity onPress={() => navigation.navigate('market')}>
              <Image
                style={{ width: 100, height: 100, marginTop: 25, marginBottom: 5 }}
                source={require('./assets/market.png')}
              />
            </TouchableOpacity>
            <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>Market Information</Text>
            <TouchableOpacity onPress={() => navigation.navigate('support')}>
              <Image
                style={{ width: 100, height: 100, marginTop: 25, marginBottom: 5, }}
                source={require('./assets/cs.png')}
              />
            </TouchableOpacity>
            <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold', marginBottom: 25 }}>Customer Support</Text>
          </View>
        </View>
      </ScrollView>
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
  centerContainer2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C8C8C8',
    paddingHorizontal: 130,
    paddingTop: 30,
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 2,
  },
  greeting: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 20,
  },
  divider: {
    height: 1.2,
    width: '100%',
    backgroundColor: 'black',
    marginVertical: 30,
  },
});

export default Home;