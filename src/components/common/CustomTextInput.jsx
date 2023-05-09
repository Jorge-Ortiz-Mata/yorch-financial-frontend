import { TextInput } from "react-native"

const CustomTextInput = ({placeholder, secureTextEntry}) => {

  return(
    <TextInput
      className="bg-gray-100 w-full text-gray-800 font-bold py-1 px-2 text-sm rounded mb-5"
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  )
}

export default CustomTextInput;
