import { Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import CustomButton from "./CustomButton";
import { useEffect, useState } from 'react';

const CustomImagePicker = ({name, onSelectImage}) => {
  const [imageUri, setImageUri] = useState(undefined);
  const [imagePreview, setImagePreview] = useState(undefined);

  useEffect(() => {
    if(imageUri){
      setImagePreview(<Image source={{ uri: imageUri }} className="w-40 h-40 rounded-full mb-5" />)
    } else {
      setImagePreview(<Image source={require("../../../assets/icon.png")} className="w-40 h-40 rounded-full mb-5" />)
    }
  }, [imageUri]);

  const handleLaunchImage = async () => {
    const response = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    const imageUri = response.assets[0].uri
    setImageUri(imageUri)
    onSelectImage(name, imageUri);
  }

  return(
    <>
      { imagePreview }
      <CustomButton
        title="Seleccionar imagen"
        color="sky"
        onPress={handleLaunchImage}
      />
    </>
  )
}

export default CustomImagePicker;
