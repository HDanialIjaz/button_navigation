import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home screen </Text>
      <Button title="Go to Detail" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
};
const DetailScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Detail Screen</Text>
      <Button title="Go Back " onPress={() => navigation.goBack()} />
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
