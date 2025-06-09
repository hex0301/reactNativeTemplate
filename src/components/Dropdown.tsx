import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Dimensions,
  Pressable,
  UIManager,
  findNodeHandle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const OPTIONS = ['Day', 'Week', 'Month', 'MTD', 'YTD', 'Custom'];

function Dropdown ({onPress} : any){
  const [selected, setSelected] = useState('Week');
  const [showMenu, setShowMenu] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });
  const buttonRef = useRef(null);

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

  const handleSelect = (value: React.SetStateAction<string>) => {
    setSelected(value);
    setShowMenu(false);
    onPress(value)
  };

  return (
    <View>
      <TouchableOpacity
        ref={buttonRef}
        style={styles.dropdownButton}
        onPress={toggleMenu}
        activeOpacity={0.7}
      >
        <Text style={styles.selectedText}>{selected}</Text>
        <Icon name={showMenu ? 'chevron-up-outline' : 'chevron-down-outline'} size={16} color="white" />
      </TouchableOpacity>

      {showMenu && (
        <Modal transparent animationType="none" visible={showMenu}>
          <Pressable style={styles.overlay} onPress={() => setShowMenu(false)}>
            <View
              style={[
                styles.dropdown,
                {
                  top: dropdownPosition.top,
                  left: dropdownPosition.left,
                  width: dropdownPosition.width,
                },
              ]}
            >
              {OPTIONS.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.item,
                    option === selected && styles.customItem,
                  ]}
                  onPress={() => handleSelect(option)}
                >
                  <Text
                    style={[
                      styles.itemText,
                      option === selected && styles.customItemText,
                    ]}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </Pressable>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Dropdown;
