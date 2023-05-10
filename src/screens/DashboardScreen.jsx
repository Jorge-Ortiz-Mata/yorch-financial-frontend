import { View, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import WelcomeMessage from "../components/dashboard/WelcomeMessage";
import BoxSection from "../components/dashboard/BoxSection";

const DashboardScreen = () => {

  return(
    <LinearGradient colors={['#000000', '#212A3E']} className="flex-1 justify-center">
      <WelcomeMessage />
      <BoxSection />
      <StatusBar style="light" />
    </LinearGradient>
  )
}

export default DashboardScreen;
