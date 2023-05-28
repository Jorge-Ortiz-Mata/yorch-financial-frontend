import { Text } from "react-native"

const ProfileSummary = ({summary}) => {

  return(
    <Text className="text-white text-center">
      {summary ? summary : '---'}
    </Text>
  )
}

export default ProfileSummary;
