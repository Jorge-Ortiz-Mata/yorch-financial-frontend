import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Index from './src/Index';

export default function App() {
  return (
    <View className="bg-gradient-to-r from-indigo-500 h-10 border-2 border-red-500">
      <Index />
      <StatusBar style="light" />
    </View>
  );
}
