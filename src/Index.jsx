import ModalScreen from './screens/ModalScreen';
import LoginScreen from './screens/LoginScreen';

const Index = () => {
  const user = true;

  if(user) return <LoginScreen />

  return(
    <ModalScreen />
  )
}

export default Index;
