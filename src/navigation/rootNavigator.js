/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */

import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator} from 'react-navigation';
import {Icon} from 'native-base';
import { appTheme, navigatorScreen} from '../constants';

import {
  Login,
  OTPpage,
  Home,
  Store,
  Settings,
  ServiceBooking,
  ServiceBookingResult,
  ServiceDetails} from '../components/screens';

const AuthNavigator = createStackNavigator({
  [navigatorScreen.Login]: {screen: Login},
  [navigatorScreen.OTPpage]: {screen: OTPpage},
},
{
  headerMode: 'none',
});


const MainTabNavigator = createBottomTabNavigator({
  [navigatorScreen.Home]: {screen: Home},
  // Store: {screen: Store},
  [navigatorScreen.Settings]: {screen: Settings},
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

const MainStack = createStackNavigator({
  [navigatorScreen.MainTabNavigator]: { screen: MainTabNavigator },
  [navigatorScreen.ServiceBooking]: { screen: ServiceBooking },
  [navigatorScreen.ServiceBookingResult]: { screen: ServiceBookingResult},
  [navigatorScreen.ServiceDetails]: { screen: ServiceDetails},
},
  {
    headerMode: 'none',
  });

const Navigation = createAppContainer(
    createSwitchNavigator({
      [navigatorScreen.MainStack]: MainStack,
      [navigatorScreen.Auth]: AuthNavigator,
    })
);
export default Navigation;
