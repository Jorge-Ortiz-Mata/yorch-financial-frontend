import { ScrollView, KeyboardAvoidingView, View, SafeAreaView } from "react-native";
import LoginForm from "../components/loginScreen/LoginForm";
import LoginHeader from "../components/loginScreen/LoginHeader";

const LoginScreen = () => {

  return(
    <SafeAreaView className="flex-1 items-center justify-center w-full">
      <ScrollView className="flex-1 w-full">
        <KeyboardAvoidingView behavior="padding" className="items-center justify-center mt-32">
          <LoginHeader />
          <LoginForm />
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default LoginScreen;
