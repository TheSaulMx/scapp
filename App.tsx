import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, View, Text, Button} from 'react-native';

function HomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.homeText}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={styles.detailText}>
      <Text>Details Screen</Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  homeText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    color: 'red',
  },
  detailText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
