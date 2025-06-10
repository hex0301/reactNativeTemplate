import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PieChart from 'react-native-pie-chart';
import Dropdown from './Dropdown';

interface ChartDataItem {
  label: string;
  value: number;
  amount: number;
  color: string;
}

export const chartData: ChartDataItem[] = [
  {label: 'Issued', value: 50, amount: 12300, color: '#7C4DFF'},
  {label: 'Rejected', value: 50, amount: 1300, color: '#FF7043'},
  {label: 'Pending', value: 50, amount: 101300, color: '#388E3C'},
];

const DonutChartWithLegend  = ({onPress}: any) => {
  const total = chartData.reduce((sum, item) => sum + item.value, 0);
   const handleSelected = (data : string) =>{
      onPress(data)
      console.log("donut page" , data)
    }
  return (
    <View style={{ flexDirection:"column",backgroundColor:"#fff",borderRadius:10 ,maxHeight:'100%', width:"100%", height: "auto"}}>
      <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:30,paddingBottom:5 ,alignItems:"center"}}>
        <Text style={{flex:1}}>Payouts overview</Text>
        <View style={{flex:.5}}>
             <Dropdown onPress={handleSelected} options={"dashboard"}></Dropdown>
        </View>
      </View>


      <View style={styles.wrapper}>
        {/* Donut Chart */}
        <View style={styles.chartContainer}>
          <PieChart
            widthAndHeight={180}
            series={chartData.map(item => ({
              color: item.color,
              value: item.value,
            }))}
            cover={0.6}
            padAngle={0}
          />
          <View style={styles.centerLabel}>
            <Text style={styles.centerTitle}>Total</Text>
            <Text style={styles.centerTitle}> Payouts</Text>
            <Text style={styles.centerValue}>{total}</Text>
          </View>
        </View>

        {/* Legend */}
        <View style={styles.legendContainer}>
          {chartData.map((item, index) => (
            <View key={index}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  gap: '10',
                  alignItems: 'center',
                }}>
                <View style={[styles.dot, {backgroundColor: item.color}]} />
                <Text style={styles.bold}>{item.label}</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  gap: '10',
                  alignItems: 'center',
                  marginBottom: 20,
                }}>
                <View style={[styles.dot, {backgroundColor: ''}]} />
                <Text>
                  ${item.amount.toLocaleString()} ({item.value})
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop:0
  },
  chartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  centerLabel: {
    position: 'absolute',
    alignItems: 'center',
  },
  centerTitle: {
    fontSize: 14,
    color: 'gray',
  },
  centerValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  legendContainer: {
    marginLeft: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    // marginRight: 8,
  },
  legendText: {
    fontSize: 14,
    color: '#333',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default DonutChartWithLegend;
