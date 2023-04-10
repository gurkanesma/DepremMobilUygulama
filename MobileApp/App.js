import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const SidebarMenu = () => {
  const [menuItems, setMenuItems] = useState([
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Contacttt', link: '/contact' },
  ]);

  const handleMenuClick = (link) => {
    // Handle menu item click here
  };

  return (
    <View style={styles.container}>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={() => handleMenuClick(item.link)}
        >
          <Text style={styles.menuItemText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    padding: 20,
    paddingTop: 50,
  },
  menuItem: {
    marginBottom: 10,
  },
  menuItemText: {
    fontSize: 18,
  },
});

export default SidebarMenu;
