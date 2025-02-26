import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ChatStart = () => {
  return (
    <View style={styles.container}>
      {/* Top Section with Profile Circles */}
      <View style={styles.profilesContainer}>
        <View style={styles.row}>
          <View style={[styles.profile,{borderBottomRightRadius:75, borderTopRightRadius:75, borderTopLeftRadius:75}]}>
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual image URLs
              style={styles.profileImage}
            />
          </View>
          <View style={[styles.profile,{borderRadius:75}]}>
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }}
              style={styles.profileImage}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.profile,{borderRadius:75}]}>
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }}
              style={styles.profileImage}
            />
          </View>
          <View style={[styles.profile,{borderBottomLeftRadius:75, borderTopRightRadius:75, borderTopLeftRadius:75}]}>
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }}
              style={styles.profileImage}
            />
          </View>
        </View>
      </View>

      {/* Text Section */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Enjoy the new experience of</Text>
        <Text style={styles.title}>chatting with global friends</Text>
        <Text style={styles.subtitle}>Connect people around the world for free</Text>
      </View>

      {/* Button Section */}
      {/* <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity> */}

      {/* Footer Section */}
      {/* <Text style={styles.footerText}>Powered by <Text style={styles.brand}>Ussage</Text></Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:550,
    width:'100%',
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profilesContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 50,
    
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  profile: {
    width: 150,
    height: 150,
    backgroundColor: '#e5e5e5',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#7B61FF',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  footerText: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
  },
  brand: {
    color: '#7B61FF',
    fontWeight: 'bold',
  },
});

export default ChatStart;
