import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Index from './src/Index';

export default function App() {
  return (
    <LinearGradient
        colors={['#000000', '#212A3E']}
        className="flex-1 items-center justify-center"
      >
      <Index />
      <StatusBar style="light" />
    </LinearGradient>
  );
}
