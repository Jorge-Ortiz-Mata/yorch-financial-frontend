import { Text } from "react-native"
import HeaderLeft from "../components/header/HeaderLeft"
import HeaderRight from "../components/header/HeaderRight"

export const tabOptions = {
  headerStyle: {
    backgroundColor: '#000000',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTitle: '',
  headerLeft: () => <HeaderLeft />,
  headerRight: () => <HeaderRight />,
  tabBarStyle: {
    backgroundColor: '#212A3E',
    height: 60,
  },
  tabBarActiveTintColor: '#AFD3E2',
  tabBarInactiveTintColor: '#fff',
  tabBarLabelStyle: { fontSize: 12, fontWeight: 700 },
}
