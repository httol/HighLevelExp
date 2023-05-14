import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { apiUrl } from "./config/ServerConfig";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi Tom, This is an Expo App, Open up App.tsx to start working on your app!</Text>
      <Text>{apiUrl}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
