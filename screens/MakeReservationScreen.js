import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

function MakeReservationScreen({ navigation }) {

  //const [input, setInput ] = useState('');

  return (
    <View style={styles.container}>
      <Text>Under Development...</Text>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    padding: 8,
    margin: 15,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    width: 200,
  }
}

export default MakeReservationScreen;