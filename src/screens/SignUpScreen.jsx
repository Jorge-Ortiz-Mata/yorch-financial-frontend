import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from "react-native";

import SignUpHeader from '../components/signUpScreen/SignUpHeader';
import SignUpForm from '../components/signUpScreen/SignUpForm';
import SignUpFooter from '../components/signUpScreen/SignUpFooter';

const SignUpScreen = () => {
  return(
    <ScrollView>
      <LinearGradient colors={['#000000', '#212A3E']} className="flex-1 items-center">
        <SignUpHeader />
        <SignUpForm />
        <SignUpFooter />
        <StatusBar style="light" />
      </LinearGradient>
    </ScrollView>
  )
}

export default SignUpScreen;
