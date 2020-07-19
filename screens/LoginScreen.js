import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

function LoginScreen({ navigation, route }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function onLoginPress() {
    navigation.reset({
        index: 0,
        routes: [
            {
                name: 'Root',
                params: { username: username },
            },
        ],
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Please Log In</Text>
      <TextInput style={styles.input} placeholder="Username" onChangeText={setUsername}/>
      <TextInput  secureTextEntry={true} style={styles.input} placeholder="Password" onChangeText={setPassword}/>
      <Button title="Login" onPress={onLoginPress}/>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    padding: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    width: 200,
  },
  loginText: {
    alignSelf: 'center',
    fontSize: 20,
    margin: 25 
  }
}

export default LoginScreen;