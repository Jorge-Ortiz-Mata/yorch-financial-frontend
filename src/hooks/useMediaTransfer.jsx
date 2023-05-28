import { Platform } from "react-native";
import { getType } from "mime/lite";
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';

const fixUri = (uri) => Platform.select({ ios: uri.replace('file://', ''), android: uri });
const validImageFormats = ["image/jpeg", "image/jpg", "image/png"];

export const useMediaTransfer = () => {

  async function pickImage() {
    let data = new FormData();
    const { canceled, assets: [{ uri }] } = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.All,
      allowsEditing: true,
    });
    if (canceled) return;

    if (!validImageFormats.includes(getType(uri))) throw new Error(
      "Solo se aceptan imágenes de tipo jpg, jpeg, o png.",
    );
    data.append("avatar",
      { name: uri.split("/").pop(), type: getType(uri), uri: fixUri(uri) }
    );

    return data;
  }

  return {
    pickImage,
  };
};
