import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import theme from '../theme';

//Components
import Home from '../screens/Home';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {Text} from 'react-native';

export default function AppRoutes() {
  const Tab = createBottomTabNavigator();
  const HomeStack = createStackNavigator();

  const HomeStackScreen = React.useCallback(
    () => (
      <HomeStack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{headerShown: false}}>
        <HomeStack.Screen name="HomeScreen" component={Home} />
      </HomeStack.Navigator>
    ),
    [HomeStack],
  );

  const renderTabBarIcon = (
    route: RouteProp<ParamListBase, string>,
    focused: boolean,
  ) => {
    const iconName = {
      Home: 'home',
      Discover: 'apple-safari',
      Activity: 'clock',
      Bookmarks: 'bookmark',
      Profile: 'account-circle',
    }[route.name];

    return (
      <Icon
        size={25}
        name={iconName || 'map-marker-question'}
        color={focused ? theme.colors.white : theme.colors.gray}
      />
    );
  };

  const renderTabBarLabel = (
    route: RouteProp<ParamListBase, string>,
    focused: boolean,
  ) => {
    return (
      <Text
        style={{
          color: focused ? theme.colors.white : theme.colors.gray,
        }}>
        {route.name}
      </Text>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => renderTabBarIcon(route, focused),
        tabBarLabel: ({focused}) => renderTabBarLabel(route, focused),
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          paddingTop: 12,
          paddingBottom: 4,
          height: 60,
          backgroundColor: theme.colors.black,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Discover"
        component={HomeStackScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Activity"
        component={HomeStackScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Bookmarks"
        component={HomeStackScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={HomeStackScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
