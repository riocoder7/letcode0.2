import React, { useRef, useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, FlatList, Alert, Image } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Modalize } from 'react-native-modalize';
import SearchCom from '@/components/search';

const SearchPage = () => {
  const modalizeRefFilter = useRef<Modalize>(null);

  const [searchInput, setsearchInput] = useState('');
  const [Beginners, setBeginners] = useState(false);
  const [Advance, setAdvance] = useState(false);
  const [Intermediate, setIntermediate] = useState(false);
  

  
  // Example course data
  const courseData = [
    { name: "Java", logo: require('@/assets/icons/java-icon.png') },
    { name: "Python", logo: require('@/assets/icons/python-logo.png') },
    { name: "JavaScript", logo: require('@/assets/icons/javascript.png') },
    { name: "C++", logo: require('@/assets/icons/cpp.png') },
    { name: "C#", logo: require('@/assets/icons/cshap.png') },
    { name: "Ruby", logo: require('@/assets/icons/ruby.png') },
    { name: "Go", logo: require('@/assets/icons/go.png') },
    { name: "Swift", logo: require('@/assets/icons/swift.png') },
    { name: "Kotlin", logo: require('@/assets/icons/kotlin.png') },
    { name: "PHP", logo: require('@/assets/icons/php.png') },
    { name: "TypeScript", logo: require('@/assets/icons/typescript.png') },
    { name: "Rust", logo: require('@/assets/icons/rust.png') },
    { name: "Dart", logo: require('@/assets/icons/dart.png') },
  { name: "GitHub", logo: require('@/assets/icons/github.png') },
  { name: "Git", logo: require('@/assets/icons/git.png') },
  { name: "AWS", logo: require('@/assets/icons/aws.png') },
  { name: "Kubernetes", logo: require('@/assets/icons/kubernetes.png') },
  { name: "MongoDB", logo: require('@/assets/icons/mongodb.png') },
  { name: "MySQL", logo: require('@/assets/icons/mysql.png') },
  { name: "Firebase", logo: require('@/assets/icons/firebase.png') },
  { name: "sarfaraz", logo: require('@/assets/icons/firebase.png') }
  ];

  // Filter courses based on the search input
  const filteredCourses = courseData.filter(course =>
    course.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  // Function to open the bottom sheet
  const onOpen = () => {
    modalizeRefFilter.current?.open(); 
  };

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          {/* Search Icon */}
          <Icon name="search" size={24} color="#fff" style={styles.searchIcon} />

          {/* Divider between search icon and input */}
          <Text style={styles.divider}>|</Text>

          {/* Search Input */}
          <TextInput
            style={styles.input}
            placeholder="Search..."
            placeholderTextColor="#aaa"
            value={searchInput}
            onChangeText={setsearchInput}
            autoFocus={false}
          />
          {/* Divider between input and filter icon */}
          <Text style={styles.divider}>|</Text>

          {/* Filter Icon */}
          <TouchableOpacity style={styles.iconContainer} onPress={onOpen}>
            <Icon name="filter-list" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Background view */}
        <View style={styles.backgroundView}>
          <SearchCom/>

          {/* <Text style={styles.backgroundText}>Background content behind courses</Text> */}
        </View>

        {/* Absolutely Positioned Courses Display */}
        {searchInput !== '' && filteredCourses.length > 0 ? (
          <FlatList
        
            data={filteredCourses}
            keyExtractor={(item) => item!.name}
            renderItem={({ item }) => (
             
               <View style={styles.searchItem}>
                <View style={{width: 50, height: 50, borderRadius: 25, overflow: 'hidden'}}>
                  <Image source={item.logo} style={{width: '100%', height: '100%'}} resizeMode="cover" />
                </View>
                <View style={{width:'65%', height:"100%", }}>
                <Text style={{fontSize:18, color:"#fff"}} >{item.name}</Text>
                <Text style={{fontSize:12, color:"#666666"}} >{item.name} krfjkfjfkj kjdkjdj k kkjsksj </Text>
                 </View>
                <TouchableOpacity onPress={()=>Alert.alert("navgate")} style={{flexDirection:"row", justifyContent:"center",alignItems:"center", }}> 
                <Image  source={require('@/assets/icons/right-arrow1.png')} style={{width: 24, height: 24, }} />
                </TouchableOpacity>
               
              </View>
              
                
              
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.courseListContainer}
            style={styles.absoluteCoursesList} // Absolute positioning applied here
          />
        ) : (
          searchInput !== '' && (
            <View style={{position:"absolute", top:65, left:0, right:0, zIndex:10,  }}>
            <Text style={styles.noResultsText}>No results found</Text>
            </View>
          )
        )}

        {/* Bottom Sheet filter */}
        <Modalize ref={modalizeRefFilter} snapPoint={300} modalHeight={700} handlePosition="inside">
          <View style={styles.bottomSheetContent}>
            <View style={styles.bottomSheet_sub_Content}> 
            <View>  <Text style={{fontSize:25}}>Beginners </Text> </View>
              <TouchableOpacity  onPress={()=>setBeginners(!Beginners)} style={[{width:50, height:'80%',borderRadius:8 ,  borderWidth:2}, Beginners === true ?{backgroundColor:"red"}:{backgroundColor:"yellow"}]}> </TouchableOpacity>
              </View>

             <View style={styles.bottomSheet_sub_Content}> 
              <Text style={{fontSize:25}}>Intermediate </Text> 
              <TouchableOpacity onPress={()=>setIntermediate(!Intermediate)} style={[{width:50, height:'80%',borderRadius:8 ,  borderWidth:2}, Intermediate === true ?{backgroundColor:"red"}:{backgroundColor:"yellow"}]}> </TouchableOpacity>
              </View>

               <View style={styles.bottomSheet_sub_Content}> 
              <Text style={{fontSize:25}}>Advance </Text> 
              <TouchableOpacity onPress={()=>setAdvance(!Advance)} style={[{width:50, height:'80%',borderRadius:8 ,  borderWidth:2, }, Advance === true ?{}:{backgroundColor:"yellow"} ]}> 
                <Text style={{ fontSize: 25 }}>✅</Text>
              </TouchableOpacity>
              </View>
          </View>
        </Modalize>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'black',
    position: 'relative', // This makes the absolute positioning work inside this container
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1e1e', // Darker background for search bar
    borderRadius: 8,
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: '100%', // Increase width to 100%
    height: 50, 
    borderWidth:2,
    borderColor:"gray"
    
  },
  searchIcon: {
    marginRight: 4,
  },
  divider: {
    color: '#555',
    marginHorizontal: 4,
    fontSize: 25,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    marginLeft: 4,
    color: '#fff', // White text color for input
  },
  iconContainer: {
    paddingHorizontal: 8,
  },
  backgroundView: {
    width: '100%',
    height: 500,
    flex:1,
    // backgroundColor: 'red',
    // justifyContent: 'center',
    // alignItems: 'center',
    position: 'relative',
    top:20 // Makes sure other content stays below
  },
  backgroundText: {
    color: 'white',
    fontSize: 18,
  },
  courseListContainer: {
    marginTop: 5,
    
  },
  searchItem: {
    borderRadius:10,
    padding: 5,
    marginBottom: 10,
    borderWidth:1,
    borderColor:"#333333",
    overflow:"hidden",
    height:60,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around"
    
  },
  courseText: {
    color: '#fff',
    fontSize: 16,
  },
  absoluteCoursesList: {
    paddingHorizontal:15,
    backgroundColor:"black",
    position: 'absolute', // Positions the list over the background content
    top: 80, // Adjust top position to avoid overlap with search bar
    left: 0,
    right: 0,
    zIndex: 10, // Ensure the courses list appears on top
  },
  noResultsText: {
    color: '#aaa',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    backgroundColor:"black",
    height:60
  },
  bottomSheetContent: {
    padding: 16,
  },
  bottomSheetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  dragHandle: {
    backgroundColor: '#ff6347',
    height: 5,
    borderRadius: 3,
    width: '20%',
    alignSelf: 'center',
    marginTop: 10,
  },
  bottomSheet_sub_Content:{
    width:'100%',
    height:50,
    borderRadius:8, 
    borderWidth:2,
    marginTop:30, 
    paddingHorizontal:10,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"    
  }
});

export default SearchPage;
