import { View, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

const DashboardScreen = () => {

  return(
    <LinearGradient colors={['#000000', '#212A3E']} className="flex-1 items-center justify-center">
      <Text className="text-white font-semibold">Dashboard</Text>
      <StatusBar style="light" />
    </LinearGradient>
  )
}

export default DashboardScreen;
