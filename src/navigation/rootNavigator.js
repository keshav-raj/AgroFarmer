/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */

import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator} from 'react-navigation';
import {Icon} from 'native-base';
import {appTheme} from '../constants';

import {
  Login,
  OTPpage,
  Home,
  Store,
  Settings} from '../components/screens';

const AuthNavigator = createStackNavigator({
  Login: {screen: Login},
  OTPpage: {screen: OTPpage},
},
{
  headerMode: 'none',
});

const MainTabNavigator = createBottomTabNavigator({
  Home: {screen: Home},
  Store: {screen: Store},
  Settings: {screen: Settings},
},
{
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({focused, tintColor}) => {
      const {routeName} = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = 'home';
      } else if (routeName === 'Store') {
        iconName = `shopping-cart`;
      } else if (routeName === 'Settings') {
        iconName = `sliders`;
      }

      // You can return any component that you like here!
      return <Icon
        type="FontAwesome"
        name={iconName} style={{fontSize: 25, color: tintColor}} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: appTheme.COLORS.PRIMARY,
    inactiveTintColor: appTheme.COLORS.MUTED,
    showLabel: false,
  },
});

const Navigation = createAppContainer(
    createSwitchNavigator({
      Auth: AuthNavigator,
      MainTabNavigator: MainTabNavigator,
    })
);
export default Navigation;
