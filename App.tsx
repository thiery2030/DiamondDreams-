import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './assets/styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>ola</Text>
      <StatusBar style="auto" />
      
    </View>
  );
}