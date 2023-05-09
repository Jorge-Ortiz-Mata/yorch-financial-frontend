import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, KeyboardAvoidingView, SafeAreaView } from "react-native";

import SignUpHeader from '../components/signUpScreen/SignUpHeader';
import SignUpForm from '../components/signUpScreen/SignUpForm';
import SignUpFooter from '../components/signUpScreen/SignUpFooter';

const SignUpScreen = () => {
  return(
    <LinearGradient colors={['#000000', '#212A3E']} className="flex-1">
      <SafeAreaView className="w-full flex-1 justify-center">
        <ScrollView>
          <KeyboardAvoidingView behavior="padding" className="items-center h-[750px]">
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
