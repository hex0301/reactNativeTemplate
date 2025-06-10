import Icon from 'react-native-vector-icons/Ionicons';
import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  UIManager,
  findNodeHandle,
  Modal,
  Dimensions,
  Image,
  Pressable,
} from 'react-native';
import Header from '../../components/Headers';
import dataList from '../../../data.json';



const FILTER = ['Date', 'Payout-Title', 'Contract ID', "Value", "Status"]
export default function Tab2({data}:any ) {
  const [text, onChangeText] = React.useState('');
  const [refreshing, setRefreshing] = useState(false);
  const screenHeight = Dimensions.get('window').height;



  //for headers
  const [filter, setFilter] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });
  const buttonRef = useRef(null);
  
  
  const onRefresh = () => {
    setFilter("")
    setRefreshing(true);
    // Simulate a network request or data reload
    setTimeout(() => {
      console.log("Page refreshed!");
      setRefreshing(false);
    }, 1500);
  };



//fetch api
const getMoviesFromApi = () => {
  return fetch('https://api.restful-api.dev/objects')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      return json;
    })
    .catch(error => {
      console.error(error);
    });
};


// call api for search 
const doSearch = (data:string) =>{
  getMoviesFromApi()
}


  // next page here
  const handlePress = (item: any) =>{
    console.log(item)
  }



//for headers
 const handleSelect = (value: React.SetStateAction<string>) => {
    setFilter(value)
    setShowMenu(false);
  };

  const toggleMenu = () => {
  if (!showMenu) {
    const handle = findNodeHandle(buttonRef.current);
    if (handle != null) {
      UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
        setDropdownPosition({ top: pageY + height, left: pageX, width });
        setShowMenu(true);
      });
    }
  } else {
    setShowMenu(false);
  }
};

  const Payout= () => {
     return (
       <TouchableOpacity
         ref={buttonRef}
         style={{backgroundColor: 'grey', borderRadius:20,width:40,  height:40, alignItems: "center", justifyContent:"center"}}
         onPress={toggleMenu}
         activeOpacity={0.7}
       >
         <Image source={require('../../assets/icons/filter.png')} />
       </TouchableOpacity>
     );
   };

    const PayoutList = () =>(
    FILTER.map((option) => (
                    <TouchableOpacity
                      key={option}
                      style={[
                        styles.item,
                        option === filter && styles.customItem,
                      ]}
                      onPress={() => {setFilter(option), setShowMenu(false)}}
                    >
                      <Text
                        style={[
                          styles.itemText,
                          option === filter && styles.customItemText,
                        ]}
                      >
                        {option}
                      </Text>
                    </TouchableOpacity>
      ))
   )

  //render items in flatlist 
  const Item = ({data} : any) => ( 
    <TouchableOpacity onPress={()=>{handlePress(data) }}>
      <View style={{
      gap:15, flexDirection:"column",
      justifyContent:'space-between', 
      marginBottom:20,backgroundColor:"white" , 
      borderRadius: 15,width:350, height:'auto' ,
      padding:20, shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,}}>
          <View>
            <Text>{data.remarks.split(" - ")[0]}</Text>
            <Text>{data.remarks.split(" - ")[1]}</Text>
            <Text>{data.remarks.split(" - ")[2]}</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{borderRadius : 20, backgroundColor : "green", paddingLeft:20, paddingRight: 20 , padding : 3}}>
                <Text>{
                data.stateDescription == "Payout Rejected" || "Payout Cancelled"?"Rejected" : 
                data.stateDescription == "Payout Created"?"Pending":
                data.stateDescription == "Payout Issued"?"Issued" : ""
                }</Text>
            </View>
            <View><Icon name='chevron-forward-sharp' size={20} color={"black"}/></View>
          </View>

          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection:"row", justifyContent:'space-between'}}>
              <Text>Value</Text>
              <Text>$40,000.00</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:'space-between'}}>
              <Text>Date / Time</Text>
              <Text> 2025-05-19 03:31:11 PM</Text>
            </View>
          </View>
      </View>
    </TouchableOpacity>

  );


  //main screen of this page
  return (
    <SafeAreaView>
      <View
        style={{
          alignItems: 'center',
          marginBottom: (screenHeight/2)
        }}>
      <View style={{flexDirection:"row" , justifyContent:"space-between" ,width:"100%" , padding : 10,height: 50, alignItems: 'center',alignContent:"center", marginBottom: 10}}>
        <Text style={{fontSize: 20}} >Payouts</Text>
        <Payout />
            {showMenu && (
              <Modal transparent animationType="none" visible={showMenu}>
                <Pressable style={styles.overlay} onPress={() => setShowMenu(false)}>
                  <View
                    style={[
                      styles.dropdown,
                      {
                        top: dropdownPosition.top,
                        left:dropdownPosition.left - 100,
                        width:dropdownPosition.width + 100,
                      },
                    ]}
                  >
                  <PayoutList />
                  </View>
                </Pressable>
              </Modal>
            )}
      </View>
       <View style={styles.searchSection}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder='Search Payouts'
            placeholderTextColor={"#6f767d"}
            onFocus={()=>{onChangeText("")}}
          />
          <TouchableOpacity>
            <Icon name="search-outline"  size={20} color="#000"  onPress={doSearch} />
          </TouchableOpacity>
        </View>

        <View>
          <FlatList 
           showsVerticalScrollIndicator={false}
            data={dataList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
            <Item  data={item}/>
            )}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

// styles 
const styles = StyleSheet.create({
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ededed',
        borderRadius: 10,
        paddingRight: 20,
        marginBottom: 30
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        paddingTop: 10,
        // paddingRight: 10,
        paddingBottom: 10,
        // paddingLeft: 0,
        paddingLeft:20,
        paddingRight:20,
        color: '#424242',
        width:"90%",
        height:50,
        borderRadius: 20
    },


    //for headers css
    dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#96CE36',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    width:100,
    alignSelf: 'flex-start',
  },
  selectedText: {
    color: 'white',
    fontWeight: '600',
    marginRight: 8,
  },
  overlay: {
    flex: 1,
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 12,
    elevation: 6,
    paddingVertical: 8,
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  itemText: {
    fontSize: 16,
    color: '#000',
  },
  customItem: {
    backgroundColor: '#DBFFB5',
    flexDirection: 'row',
    alignItems: 'center',
  },
  customItemText: {
    color: '#222',
    flex: 1,
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: 'orange',
    borderRadius: 5,
    marginRight: 8,
  },
});
