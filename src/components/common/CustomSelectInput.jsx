import { useState } from 'react';
import { View } from 'react-native';
import { Picker as SelectPicker } from '@react-native-picker/picker';

const CustomSelectInput = ({name, onChange}) => {
  const [selectedSex, setSelectedSex] = useState();

  const handleChange = (value) => {
    setSelectedSex(value);
    onChange(name, value);
  }

  return(
    <View className="mb-5 border bg-white rounded text-sm">
      <SelectPicker
        style={{color: '#808080'}}
        selectedValue={selectedSex}
        onValueChange={handleChange}>
        <SelectPicker.Item label="Default" value="DEFAULT" />
        <SelectPicker.Item label="Masculino" value="MASCULINO" />
        <SelectPicker.Item label="Femenino" value="FEMALE" />
      </SelectPicker>
    </View>
  )
}

export default CustomSelectInput;
