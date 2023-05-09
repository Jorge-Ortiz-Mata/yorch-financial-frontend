import { TextInput } from "react-native"

const CustomTextInput = ({name, placeholder, secureTextEntry, onChange}) => {

  const handleOnChange = (value) => {
    onChange(name, value);
  }

  return(
    <TextInput
      className="bg-gray-100 w-full text-gray-800 font-bold py-1 px-2 rounded mb-5"
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      onChangeText={handleOnChange}
    />
  )
}

export default CustomTextInput;
