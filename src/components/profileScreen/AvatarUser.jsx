import { useDispatch, useSelector } from "react-redux";
import { Image, Pressable } from "react-native";
import { EvilIcons } from '@expo/vector-icons';

import { uploadAvatar } from "../../services/profileService";
import { useMediaTransfer } from '../../hooks/useMediaTransfer';
import { profileActions } from "../../store/profileSlice";

const AvatarUser = () => {
  const { pickImage } = useMediaTransfer();
  const dispatch = useDispatch();
  const profileAvatar = useSelector(state => state.profileSlice.profileAvatar);

  const handleOnLaunchImage = async () => {
    try {
      const res = await pickImage();
      if (res === 'canceled') return;

      const response = await uploadAvatar(res);
      dispatch(profileActions.updateAvatar(response.data.avatar))
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <Pressable
      onPress={handleOnLaunchImage}
      className="w-3/6 items-center justify-center"
    >
      {
        profileAvatar?.length > 0
        ? <Image source={{ uri: profileAvatar }} className="w-32 h-32 rounded-full" />
        : <EvilIcons name="user" size={100} color="white" />
      }
    </Pressable>
    )
}

export default AvatarUser;
