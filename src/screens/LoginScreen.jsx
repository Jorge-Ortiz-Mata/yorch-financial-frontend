import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, KeyboardAvoidingView, SafeAreaView } from "react-native";

import LoginFooter from "../components/loginScreen/LoginFooter";
import LoginForm from "../components/loginScreen/LoginForm";
import LoginHeader from "../components/loginScreen/LoginHeader";

const LoginScreen = () => {

  return(
    <LinearGradient colors={['#000000', '#212A3E']} className="flex-1 items-center justify-center">
      <SafeAreaView className="flex-1 items-center justify-center w-full">
        <ScrollView className="flex-1 w-full">
          <KeyboardAvoidingView behavior="padding" className="items-center justify-center mt-20">
            <LoginHeader />
            <LoginForm />
            <LoginFooter />
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
      <StatusBar style="light" />
    </LinearGradient>
  )
}

export default LoginScreen;

