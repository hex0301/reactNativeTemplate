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

export default function Header({title , onPress}: any) {
  console.log(title)
  // const [title, setTitle] = useState("")
  // const [button,setButton]=useState("")
  switch (title) {
    case 'Dashboard':
      return (
        <SafeAreaView>
          <View style={styles.container1}>
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
        </SafeAreaView>
    
      );break;
      case "Payout":{
        return (
        <SafeAreaView>
          <View style={styles.container1}>
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
        </SafeAreaView>
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

  // container: {
  //   paddingLeft:20,
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent: "space-between",
  //   position: 'absolute',
  //   top: 0,
  //   width: '100%',
  // },
  container1:{
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
  }
});
