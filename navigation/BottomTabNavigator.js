import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MakeReservationScreen from '../screens/MakeReservationScreen';
import ViewReservationsScreen from '../screens/ViewReservationsScreen';

import { Octicons } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: () => <Octicons name="home" size={24} color="black" />
        }}
        initialParams={{ username: route.params.username }} 
      />
      <BottomTab.Screen
        name="Make Reservation"
        component={MakeReservationScreen}
        options={{
          title: 'Make Reservation',
          tabBarIcon: () => <Octicons name="calendar" size={24} color="black" />,
        }}
      />
      <BottomTab.Screen
        name="View Reservations"
        component={ViewReservationsScreen}
        options={{
          title: 'My Reservations',
          tabBarIcon: () => <Octicons name="book" size={24} color="black" />,
        }}
        initialParams={{ username: route.params.username }} 
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Make Reservation':
      return 'Make Reservation';
    case 'View Reservations':
      return 'My Reservations';
  }
}
