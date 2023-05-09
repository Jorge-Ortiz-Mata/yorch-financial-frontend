import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, KeyboardAvoidingView, SafeAreaView } from "react-native";

import SignUpHeader from '../components/signUpScreen/SignUpHeader';
import SignUpForm from '../components/signUpScreen/SignUpForm';
import SignUpFooter from '../components/signUpScreen/SignUpFooter';

const SignUpScreen = () => {
  return(
    <LinearGradient colors={['#000000', '#212A3E']} className="flex-1 items-center justify-center">
    <SafeAreaView className="flex-1 items-center justify-center w-full">
      <ScrollView className="flex-1 w-full">
        <KeyboardAvoidingView behavior="padding" className="items-center justify-center mt-20">
          <SignUpHeader />
          <SignUpForm />
          <SignUpFooter />
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
    <StatusBar style="light" />
  </LinearGradient>
  )
}

export default SignUpScreen;
