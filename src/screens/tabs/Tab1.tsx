import React, {useContext} from 'react';
import {View, Text, Button, StyleSheet, ScrollView, Dimensions, SafeAreaView} from 'react-native';
import {AuthContext} from '../../context/AuthContext';
import Header from '../../components/Headers';
import {Image} from 'react-native';
import DonutChartWithLegend, {
  chartData,
} from '../../components/ DonutChartWithLegend';

export default function Tab1({onpress}:any) {
  const {logout} = useContext(AuthContext);
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const handlePress = (data: string) => {
    console.log(chartData);
    console.log('press me', data);
  };


  // return (
  //   <SafeAreaView>
  //     <View style={{flex:1,flexDirection:"column"}}>
  //       {/* <ScrollView contentContainerStyle={{height: "100%" , backgroundColor : 'blue'}} horizontal={false}  showsHorizontalScrollIndicator={false} style={{flex:1 , height:"100%"}} > */}
  //         <View>
  //           <DonutChartWithLegend />
  //         </View>
  //         <View>
  //           <Text> Payouts overview</Text>
  //         </View>
  //       {/* </ScrollView> */}
  //     </View>
  //   </SafeAreaView>
  // );
  return (
    <ScrollView>
    <View style={{justifyContent: 'center',alignItems: 'center'}}>
      <View>
        <DonutChartWithLegend />
      </View>
      
      <View style={styles.container}>
          <View style={styles.claimed}>
            <View style={styles.layer1}>
              <Image
                source={require('../../assets/icons/claimedIcon.png')}></Image>
              <Text style={{fontSize: 20}}>Claimed</Text>
            </View>
            <View style={styles.layer2}>
              <Text style={{fontSize: 30, fontWeight: 600}}>123</Text>
              <View style={styles.percentage}>
                <Text style={styles.percentageText}>+1.66%</Text>
              </View>
            </View>
            <View style={styles.layer3}>
              <Text style={styles.layer3Text}>Last Updated: March 1, 2000</Text>
            </View>
          </View>

          <View style={styles.claimed}>
            <View style={styles.layer1}>
              <Image
                source={require('../../assets/icons/rejectedIcon.png')}></Image>
              <Text style={{fontSize: 20}}>Rejected</Text>
            </View>
            <View style={styles.layer2}>
              <Text style={{fontSize: 30, fontWeight: 600}}>123</Text>
              <View style={styles.percentage}>
                <Text style={styles.percentageText}>+1.66%</Text>
              </View>
            </View>
            <View style={styles.layer3}>
              <Text style={styles.layer3Text}>Last Updated: March 1, 2000</Text>
            </View>
          </View>
        </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    gap: 10,
  },
  claimed: {
    padding: 20,
    paddingLeft:17,
    paddingRight:17,
    gap: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    fontSize: 30,
  },
  layer1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  layer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  percentage: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#bee3d1',
    borderRadius: 10,
  },
  percentageText: {
    color: '#239560',
  },
  layer3: {},
  layer3Text: {
    fontSize: 10,
  },
   scrollContent: {
    overflow: "hidden",
 // same as header height, pushes content below header
  },
});
