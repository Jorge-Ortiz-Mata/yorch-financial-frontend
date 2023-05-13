import { View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const CustomSelectInput = ({name, onChange}) => {
  const optionsSelect = [
    { label: 'Masculino', value: 'male' },
    { label: 'Femenino', value: 'female' }
  ];

  const handleChange = (value) => {
    onChange(name, value)
  }

  return(
    <View className="mb-5">
      <RNPickerSelect
        onValueChange={handleChange}
        items={optionsSelect}
        style={pickerStyle}
        useNativeAndroidPickerStyle={false}
      />
    </View>
  )
}

export default CustomSelectInput;

const pickerStyle = {
  inputIOS: {
      color: '#000000',
      paddingHorizontal: 10,
      backgroundColor: '#ffffff',
      borderRadius: 5,
  },
  placeholder: {
      color: '#000000',
    },
  inputAndroid: {
      color: '#000000',
      paddingHorizontal: 7,
      paddingVertical: 4,
      backgroundColor: '#ffffff',
      borderRadius: 5,
  },
};
