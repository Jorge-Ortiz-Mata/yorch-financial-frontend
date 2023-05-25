import { TextInput, Platform } from "react-native";

const CustomTextArea = ({name, value, placeholder, secureTextEntry, onChange}) => {

  const handleOnChange = (value) => {
    onChange(name, value);
  }

  return(
    <TextInput
      className="bg-gray-100 w-full text-gray-800 py-3 px-5 rounded mb-5"
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      onChangeText={handleOnChange}
      value={value}
      multiline
      editable
      numberOfLines={3}
    />
  )
}

export default CustomTextArea;
