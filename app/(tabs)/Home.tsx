import React, { useContext, useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, useColorScheme, FlatList, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Data from '@/components/data.json';
import Popular_course from '@/components/popular_course';
import Regular_course from '@/components/regular_course';
import { Dispatch, SetStateAction } from 'react';
import { Modalize } from 'react-native-modalize';
import Enroll from '@/components/enroll';
import Enrollments from '@/components/enrollments.json'
import { Link, useRouter} from 'expo-router';
import { UserDetailContext } from '@/config/UserDetailContext';
const Home = () => {
  const router = useRouter();

  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const modalizeRefFilter = useRef<Modalize>(null);
  const theme = useColorScheme();
  const isDarkMode = theme === 'dark';
  const [selected, setSelected] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState<string>();
  

 

  const enr = [                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    // Assuming Enrollments data structure looks like this
    { id: 1, title: 'Web Development', student: 'John Doe' },
    { id: 2, title: 'App Development', student: 'Jane Smith' },
    // Add more enrollments here
  ];

  const onOpen = () => {

    modalizeRefFilter.current?.open();

  };
  const onCloseModal = (event: { persist: () => void; }) => {
    event.persist(); // Persist the event to avoid the pooling warning if needed
    modalizeRefFilter.current?.close();
    console.log(event)
  };
  const data = [
    {
      type: 'popular',  // Section for popular Regular_course slider
      data: Data.filter((item) => selected === 'all' || item.category === selected),
    },
    {
      type: 'regular',  // Section for regular course list
      data: Data.filter((item) => selected === 'all' || item.category === selected),
    }
  ];

  const styles = StyleSheet.create({
    header: {
      paddingHorizontal: 10,
      width: '100%',
      height: 60,
      backgroundColor: isDarkMode ? '#000000' : '#f8f9fa',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      elevation: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    profileSection: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    profileImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: isDarkMode ? '#333' : '#ccc',
    },
    userDetails: {
      marginLeft: 10,
    },
    userName: {
      color: isDarkMode ? '#ffffff' : '#000000',
      fontSize: 16,
      fontWeight: 'bold',
    },
    userSubtitle: {
      color: isDarkMode ? '#aaaaaa' : '#555555',
      fontSize: 12,
    },
    iconSection: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconContainer: {
      marginLeft: 10,
      position: 'relative',
      backgroundColor: '#333333',
      borderRadius: 50,
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    notificationBadge: {
      position: 'absolute',
      top: 4,
      right: 5,
      width: 8,
      height: 8,
      backgroundColor: 'red',
      borderRadius: 4,
    },

    text_color: {
      color: 'white',
      fontWeight: '900',
    },
    randerBtnAll: {
      borderRadius: 50,
      borderWidth: 1,
      borderColor: 'white',
      width: 70,
      height: 70,
      alignItems: 'center',
      justifyContent: 'center',


    },
    randerBtns: {
      borderRadius: 50,
      borderWidth: 1,
      borderColor: 'white',
      width: 110,
      height: 70,
      alignItems: 'center',
      justifyContent: 'center',



    },
    courseInfo: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      
      height:50
    }
  });

  return (
   
      <SafeAreaView style={{ backgroundColor: '#000000', flex: 1 }}>
        {/* main View  */}
        <View style={{ flex: 1, }}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.push('/(tabs)/Profile')}>
              <View style={styles.profileSection}>
                <Image
                  source={{
                    uri: 'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                  }}
                  style={styles.profileImage}
                />
                <View style={styles.userDetails}>
                  <Text style={styles.userName}>Dear, {userDetail.name}</Text>
                  <Text style={styles.userSubtitle}>Student</Text>
                </View>
              </View>
            </TouchableOpacity>

            <View style={styles.iconSection}>
              {/* Notification Icon */}
              <TouchableOpacity style={styles.iconContainer}
              onPress={() => router.push('/(tabs)/Notification')}
              >
                <Image style={{ tintColor: 'white', width: 20, height: 20 }} source={require('@/assets/icons/notification.png')} />
                <View style={styles.notificationBadge} />
              </TouchableOpacity>

              {/* Search Icon */}
              <TouchableOpacity style={styles.iconContainer} onPress={() => router.push('/(tabs)/Search')}>
                <Image style={{ tintColor: 'white', width: 20, height: 20 }} source={require('@/assets/icons/search.png')} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Category filter buttons */}
          <View style={{ paddingTop: 10, paddingHorizontal: 10, paddingBottom: 10, marginHorizontal: 2, flexDirection: "row", gap: 10, }}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={['all', 'Development', 'Data', 'Programming', 'git', 'Framework', 'Cloud', 'other']}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity style={{ marginHorizontal: 2 }} onPress={() => setSelected(item)}>
                  <View
                    style={[
                      item === 'all' ? styles.randerBtnAll : styles.randerBtns,
                      selected === item ? { backgroundColor: 'white' } : { backgroundColor: 'rgba(0,0,0,0)' },
                    ]}
                  >
                    <Text style={[styles.text_color, selected === item ? { color: 'black' } : { color: 'white' }]}>
                      {item}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />

          </View>

          {/* Combined FlatList for both Popular Regular_course and Regular Regular_course */}
          <View style={{ width: '100%', flex: 1, paddingHorizontal: 10 }}>
            <FlatList
              data={data}
              keyExtractor={(item, index) => index.toString()}  // Use index for section key
              renderItem={({ item }) => {
                if (item.type === 'popular') {

                  return (
                    <FlatList
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      data={item.data}
                      keyExtractor={(course) => course.id.toString()}
                      renderItem={({ item }) => (

                        <Popular_course key={item.id} data={[item]} modulizer={onOpen} setCourse={setSelectedCourse as Dispatch<SetStateAction<any>>} />

                      )}
                    />
                  );
                } else if (item.type === 'regular') {


                  return (
                    <FlatList
                      data={item.data}
                      keyExtractor={(course) => course.id.toString()}
                      renderItem={({ item }) => (

                        <Regular_course key={item.id} data={[item]} modulizer={onOpen} setCourse={setSelectedCourse as Dispatch<SetStateAction<any>>} />

                      )}
                    />
                  );
                }
                return null;
              }}
            />
          </View>


          <Modalize ref={modalizeRefFilter} snapPoint={500} modalHeight={700} handlePosition="inside" handleStyle={{ backgroundColor: '#8c8c8c' }} modalStyle={{ backgroundColor: "#1c1d20", paddingTop:5}}>
            <View style={{ padding: 10,  }}>

              <View style={styles.courseInfo}>
                <Text></Text>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Course info</Text>
                <TouchableOpacity onPress={onCloseModal}>
                  <Image style={{ tintColor: 'white', width: 30, height: 30 ,padding:10, }} source={require('@/assets/icons/cross-icon.png')} />
                </TouchableOpacity>
              </View>

              <FlatList

                data={Enrollments.filter((enrollment) => enrollment.title === selectedCourse)}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <Enroll key={item.id} enrollment={item} /> // Pass the item directly
                )}
              />
             
            </View>
          </Modalize>
        </View>
      </SafeAreaView>
  
  );
};

export default Home;
