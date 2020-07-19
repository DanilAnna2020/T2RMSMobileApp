import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, FlatList } from 'react-native';
import { search } from '../services/reservations';
import { BorderlessButton } from 'react-native-gesture-handler';

function ViewReservationsScreen({ navigation, route }) {

  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    search(route.params.username).then(response => {
      setReservations(response.data);
    })
  }, [])  


  return (
      <View style={styles.container}>
          <FlatList
              style={styles.list}
              data={reservations}
              keyExtractor={item => item.id}
              renderItem={
                  ({ item }) => {
                      return(
                          <View style={styles.reservation}>
                              <Text style={styles.reservationInfo}>Reservation ID: <Text style={styles.result}>#{item.id}</Text></Text>
                              <Text style={styles.reservationInfo}>Start Date & Time: <Text style={styles.result}>{item.startDateTime.replace("T", " ")}</Text></Text>
                              <Text style={styles.reservationInfo}>End Date & Time: <Text style={styles.result}>{item.endDateTime.replace("T", " ")}</Text></Text>
                              <Text style={styles.reservationInfo}>Number of Guests: <Text style={styles.result}>{item.guests}</Text></Text>
                              <Text style={styles.reservationInfo}>Reservation Status: <Text style={styles.result}>{item.reservationStatus.desc}</Text></Text>
                          </View>
                      );
                  }
              }
          />
      </View>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  result: {
    color: 'black',
    fontWeight: 'bold',
  },
  reservationInfo: {
    backgroundColor: '#f4f3f3',
    padding: 3,
    fontSize: 16,
    borderRadius: 5,
    marginBottom: 2.5,
    marginTop: 2.5,
    color: '#393e46'
  },
  reservation: {
    backgroundColor: '#dfdfdf',
    padding: 3,
    borderRadius: 5,
    marginBottom: 7,
    color: '#393e46'
  },
  list: {
    margin: 10,
    padding: 5
  }
}

export default ViewReservationsScreen;