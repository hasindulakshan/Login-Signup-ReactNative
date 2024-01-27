import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './src/screens/SignUp';
import SignIn from './src/screens/SignIn';
import DashBoard from './src/screens/DashBoard';
import Profile from './src/screens/Profile';
import Weather from './src/screens/Weather';
import Market from './src/screens/Market';
import Pest from './src/screens/Pest';
import Support from './src/screens/Support';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="sign-up" component={SignUp} options={{ title: 'SignUp' }} />
        <Stack.Screen name="sign-in" component={SignIn} options={{ title: 'SignIn' }} />
        <Stack.Screen name='dash-board' component={DashBoard} options={{ title: "DashBoard" }} />
        <Stack.Screen name='profile' component={Profile} options={{ title: "Profile" }} />
        <Stack.Screen name='weather' component={Weather} options={{ title: "Weather" }} />
        <Stack.Screen name='market' component={Market} options={{ title: "Market" }} />
        <Stack.Screen name='pest' component={Pest} options={{ title: "Pest" }} />
        <Stack.Screen name='support' component={Support} options={{ title: "Support" }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;