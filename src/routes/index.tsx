import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import MainScreen from 'src/screens/main/main.component';

import Drawer from './drawer/drawer.component';

const Stack = createStackNavigator();

const AppContainer: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Drawer"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Drawer" component={Drawer} />
        {/* <Stack.Screen name="MainScreen" component={MainScreen} /> */}
        {/* <Stack.Screen name="AboutScreen" component={AboutScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
