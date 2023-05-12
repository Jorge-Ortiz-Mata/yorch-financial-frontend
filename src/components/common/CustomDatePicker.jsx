import { useState } from 'react';
import { View, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomTextLabel from './CustomTextLabel';

const CustomDatePicker = ({name, onChange}) => {
  const [dateSelected, setDateSelected] = useState(new Date(1683931385416));
  const [displatyDate, setDisplatyDate] = useState(false);

  const openDatePicker = () => {
    setDisplatyDate(true)
  }

  const handleChange = (event) => {
    setDisplatyDate(false);
    const dateEntered = new Date(event.nativeEvent.timestamp);
    setDateSelected(dateEntered);
    onChange(name, dateEntered)
  };

  return (
    <View>
      <CustomTextLabel title="Fecha de nacimiento" />
      <Text
        onPress={openDatePicker}
        className={`bg-gray-100 text-gray-800 font-bold ${ Platform.OS === 'ios' ? "py-5" : "py-3" } px-2 rounded mb-5`}
      >
        {dateSelected.toLocaleDateString()}
      </Text>
      {displatyDate && (
        <DateTimePicker
          testID="dateTimePicker"
          value={dateSelected}
          mode={'date'}
          is24Hour={true}
          onChange={handleChange}
        />
      )}
    </View>
  );
};

export default CustomDatePicker;
