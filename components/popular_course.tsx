import React, { useRef } from 'react';
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Modalize } from 'react-native-modalize';
// import CourseEnrollment from './courseEnrollment';

interface Course {
  id: number;
  name: string;
  startColor:string;
  endColor:string;
  description:string
}

const Popular_course = ({ data, modulizer, setCourse }: { data: Course[], modulizer: () => void, setCourse: React.Dispatch<React.SetStateAction<string>> }) => {
  
  
  return (
    <>
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.popular_course} onPress={()=>{
          return(
            modulizer(),
            setCourse(item.name)
          )
        }}  >
          <View style={styles.popular_course_parts}>
            <LinearGradient colors={[item.startColor, item.endColor]} style={styles.gradient}>
            <View style={[styles.textContainer]} >
              
              <Text style={styles.text}>
                {item.name}
              </Text>
                <Text style={{ marginTop: 20, fontFamily:"arial" }}>{item.description}</Text>
            </View>

            <View style={styles.btn_arrow}>
              <View style={styles.freeBtn}>
                <Text style={{ fontWeight: "500" }}>Free</Text>
              </View>
              <View style={styles.arrowView}>
                <Image source={require('@/assets/icons/arrow.png')} style={{ width: 20, height: 20 }} />
              </View>
            </View>
            </LinearGradient>
          </View>
        </TouchableOpacity>
      )}
    />
 
    </>
  );
};

export default Popular_course;

const styles = StyleSheet.create({
  popular_course: {
    paddingTop: 10,
    paddingHorizontal: 5,
    paddingBottom: 5,
    
  },
  popular_course_parts: {
    width: 154,
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: "#f0f4f8",
  },
  gradient: {
    width: "100%",
    height: "100%",
    
  },
  textContainer: {
    paddingHorizontal: 8,
    paddingTop: 25,
    overflow:"hidden",
    height:"70%",
    
  },
  text: {
    fontSize: 20,
    fontWeight: "900",
    color: "#000",
  },
  btn_arrow:{
    width:"100%",
    height:"30%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    padding:10
  },
  freeBtn:{
    width:60,
    height:30,
    backgroundColor:"#E9AFFC",
    borderRadius:20,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    borderWidth:1
  },
  arrowView: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:"black",
    borderWidth:1
  },
});
