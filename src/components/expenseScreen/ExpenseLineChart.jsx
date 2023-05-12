import { View, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";

const ExpenseLineChart = ({xValues, yValues, title}) => {

  return(
    <View className="w-full items-center justify-center mt-5">
      <Text className="text-white font-bold text-lg mb-3 w-full px-5">{title}</Text>
      <LineChart
        data={{ labels: xValues, datasets: [{ data: yValues }]}}
        fromZero
        width={340}
        height={200}
        yAxisLabel="$ "
        chartConfig={{
          backgroundGradientFrom: "#000000",
          backgroundGradientTo: "#212A3E",
          decimalPlaces: 1,
          color: () => "#ffffff4D",
          labelColor: () => "#ffffff",
          propsForDots: {
            r: "3",
            strokeWidth: "3",
            stroke: "#A5D7E8"
          },
          propsForLabels: {
            fontSize: 9,
            fontWeight: 700
          },
        }}
        bezier
        style={{ borderRadius: 16 }}
      />
  </View>
  )
}

export default ExpenseLineChart;
