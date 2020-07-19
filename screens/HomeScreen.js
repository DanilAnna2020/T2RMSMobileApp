import * as WebBrowser from 'expo-web-browser';
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { search } from '../services/reservations';

function HomeScreen({ navigation, route }) {

  const [name, setName] = useState('');

  function onMakeReservationPress() {
    navigation.navigate("Make Reservation"); 
  }

  function onViewReservationsPress() {
    navigation.navigate("View Reservations"); 
  }

  function onLogoutPress() {
    navigation.navigate("Login");
  }

  //get fullname from reservations array (there is customer object with these details)
  useEffect(() => {
    search(route.params.username).then(response => {
      setName(response.data[0].customer.firstName + " " + response.data[0].customer.lastName);
    })
  }, [])  

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.greetingText}>Hello, {name}!</Text>
      <OptionButton
        label="Make Reservation"
        onPress={onMakeReservationPress}
      />

      <OptionButton
        label="My Reservations"
        onPress={onViewReservationsPress}
      />

      <OptionButton
        label="Logout"
        onPress={onLogoutPress}
        isLastOption
      />
    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = {
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  greetingText: {
    alignSelf: 'center',
    fontSize: 20,
    margin: 35  
  }
};

export default HomeScreen;