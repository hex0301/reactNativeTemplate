import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function Header({title , onPress}: any) {
  // const [title, setTitle] = useState("")
  // const [button,setButton]=useState("")
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
        <View style={styles.container}>
          <Image source={require('../assets/icons/olilitlogo.png')}></Image>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Icon name="notifications-outline" size={30} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Icon name="settings-outline" size={30} color="#000" />
            </TouchableOpacity>
          </View>
        </View>)
        break
      }
    default:
      break;
  }
}

const dashboard = () => {
    return (
        <View style={styles.container}>
          <Image source={require('../assets/icons/olilitlogo.png')}></Image>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Icon name="notifications-outline" size={30} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Icon name="settings-outline" size={30} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      );
};
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
  container: {
    paddingLeft:20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between",
    position: 'absolute',
    top: 0,
    width: '100%',
  },
});
