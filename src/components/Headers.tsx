import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Dropdown from './Dropdown';
import { useEffect } from 'react';

export default function Header({title , onPress, onData}: any) {
  console.log('headeers',title)
  // const [title, setTitle] = useState("")
  // const [button,setButton]=useState("")
     const handleSelected = (data : string) =>{
      console.log("press me headers : " , data)
      onPress(data)
    }

  switch (title) {
    case 'Dashboard':
      return (
          <View style={styles.container}>
                <Image source={require('../assets/icons/olilitlogo.png')} style={{ width: 220, height: 50 }}></Image>
                <View style={styles.btnContainer}>
                  <TouchableOpacity style={styles.button} onPress={()=>onPress("notification")}>
                      <Icon name="notifications-outline" size={30} color="#000" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={()=>onPress('settings')}>
                      <Icon name="settings-outline" size={30} color="#000" />
                  </TouchableOpacity>
                </View>
          </View>
    
      );break;
      case "Payout":{
        return (
          <View style={styles.payoutContainer}>
                <Text>Payouts</Text>
                <View style={styles.btnContainer}>
                   <Dropdown onPress={handleSelected} options={"payout"} value={""}></Dropdown>
                </View>
          </View>
        )
        break
      }
    default:
      break;
  }
}
const styles = StyleSheet.create({
  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer:{
    display:"flex",
    flexDirection:"row", 
    paddingRight:10
  },
  container:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor:"white",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    zIndex: 100000, // make sure header is on top
    elevation: 100, // for Android
  },
// payout layout
  payoutContainer:{
    paddingLeft:20,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor:"#fbfbfb",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    zIndex: 100000, // make sure header is on top
    elevation: 100, // for Android
  },
  payoutButton :{
    alignItems:"center",
    justifyContent:"center",
    width: 40,
    backgroundColor:"#fbfbfb",
    height:40,
    borderRadius :20
  }
});
