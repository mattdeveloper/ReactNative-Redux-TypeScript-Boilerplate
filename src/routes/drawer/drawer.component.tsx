import React from 'react';
import { useColorScheme } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { connect } from 'react-redux';

// import { IReduxState } from 'src/store';
import MainScreen from 'src/screens/main/main.component';

import Header from './header/header.component';
import { IProps } from './drawer.type';
import { Wrapper } from './drawer.style';

const Drawer = createDrawerNavigator();

const CustomDrawer = (props: IProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Wrapper isDarkMode={isDarkMode}>
      <Header />

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </Wrapper>
  );
};

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={MainScreen} />
      <Drawer.Screen name="About" component={MainScreen} />
      <Drawer.Screen name="Products" component={MainScreen} />
    </Drawer.Navigator>
  );
};

// const mapStateToProps = (state: IReduxState) => { };

const mapDispatchToProps = {};

export default connect(undefined, mapDispatchToProps)(DrawerNavigator);
