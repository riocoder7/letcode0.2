
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { UserDetailContext } from '@/config/UserDetailContext';
import { useRouter } from 'expo-router';

export default function SignOutScreen() {
  const router = useRouter();
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
   


  

  return (
    <View style={styles.container}>
    {/* Profile Header */}
    <View style={styles.header}>
      <Image
        source={{ uri: 'https://via.placeholder.com/50' }}
        style={styles.image}
      />
      <View>
        <Text style={styles.name}>{userDetail.name}</Text>
        <Text style={styles.lastLogin}>{userDetail.email}</Text>
        {/* <Text style={styles.lastLogin}>Last Login: April 12, 2023</Text> */}
      </View>
    </View>

    {/* Menu List */}
    <View style={styles.menu}>
      <TouchableOpacity >
        <View style={styles.menuItem}>
          <Ionicons name="person-outline" size={24} color="black" />
          <Text style={styles.menuItemText}>Profile Details</Text>
        </View>
      </TouchableOpacity  >
      <TouchableOpacity  >
        <View style={styles.menuItem}>
        <MaterialCommunityIcons name="progress-check" size={24} color="black" />
          <Text style={styles.menuItemText}>Progress</Text>
        </View>
      </TouchableOpacity  >
      <TouchableOpacity >
        <View style={styles.menuItem}>
        <MaterialIcons name="travel-explore" size={24} color="black" />
          <Text style={styles.menuItemText}>Explore</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity >
        <View style={styles.menuItem}>
        <MaterialIcons name="quiz" size={24} color="black" />
          <Text style={styles.menuItemText}>Quiz</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity >
        <View style={styles.menuItem}>
        <FontAwesome5 name="laptop-code" size={24} color="black" />
          <Text style={styles.menuItemText}>Compiler</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>router.replace('/otherpages/chatbot')} >
        <View style={styles.menuItem}>
        <Octicons name="dependabot" size={24} color="black" />
          <Text style={styles.menuItemText}>Ai</Text>
        </View>
      </TouchableOpacity>

      {/* sineout btn  */}
      <TouchableOpacity >
      <View style={styles.sineoutBtn} >
          <Ionicons name="power" size={24} color="red" />
          <Text style={[styles.menuItemText,{textAlign:"center", color:"red"}]}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
    
    {/* Footer */}
    <Text style={styles.footer}>Version 1.0</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  header: {
    backgroundColor: '#2E4EA7',
    height:110,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
    backgroundColor:"#fff"
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  lastLogin: {
    color: 'white',
    fontSize: 12,
  },
  menu: {
    marginTop: 10,
  },
  menuItem: {
    marginTop:15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    borderRadius:15
  },
  menuItemText: {
    marginLeft: 16,
    fontSize: 16,
    color: 'black',
  },
  sineoutBtn:{
    flexDirection:"row", 
    justifyContent:"center", 
    alignItems:"center",  
    marginTop:40, 
    borderRadius:12, 
    borderWidth:1, 
    padding:10, 
    borderColor: '#e0e0e0',

  },
  footer: {
    color: 'gray',
    textAlign: 'center',
    marginTop: 25,
    fontSize:16
  },

});
