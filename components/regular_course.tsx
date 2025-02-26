import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';


interface Course {
  id: number;
  name: string;
  startColor: string;
  endColor: string;
  description: string;

}

const Regular_course  = ({ data, modulizer, setCourse }: { data: Course[], modulizer: () => void, setCourse: React.Dispatch<React.SetStateAction<string>> }) => {
  // const [fomedata, setfomedata]= useState({});
  // const onHandleInputData=(field: string, value: string) => {
  //   setfomedata((prev) => ({
  //     ...prev,
  //     [field]: value
  //   }))
  //   Alert.alert(JSON.stringify(fomedata))
  // }
  const courseData =[ {
    index:1,
    name:"Machine larning programmiong",
    startColor:"#C4C98B",
    EndColor:"#CACAA6",
    
  },
{
  name:"Marn Stack Progamming",
  startColor:"#CDE1FE",
  EndColor:"#EEEEDC",

},
{
  name:"python Progamming",
  startColor:"#CFFFDC",
  EndColor:"#EEEEDC",

}
]
  return (
    <> 
     <FlatList 
       data={data}
       renderItem={({item, index})=>(

       
    <TouchableOpacity  onPress={()=>{
      return(
        modulizer(),
        setCourse(item.name)
      )
    }} 
    // onPress={() => onHandleInputData('type', item.name)}
     style={styles.course}>
      
   

      <LinearGradient
        colors={[item.startColor, item.endColor]} // Adjust colors as needed
     
        style={styles.innerView}
      >
        <View style={{width:"100%" , height:"100%"  , padding:20}}> 
        <View style={styles.text}> 
        <Text 
          style={{fontSize:30, fontWeight:"900", paddingHorizontal:0}} >{item.name}</Text>
        </View>
        <View style={styles.btn}>

          <View style={{width:80, height:35, backgroundColor:"#E9AFFC", borderRadius:15 , justifyContent:"center",borderWidth:1, alignItems:"center"}}>
          <Text style={{fontWeight:"900"}}>Free </Text>   
          </View>
          <View style={styles.arrowView}>
                  <Image source={require('@/assets/icons/arrow.png')} style={{ width: 20, height: 20 }} />
                </View>
        </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>

     
   )} />
   
    </>
    
  )
}

export default Regular_course

const styles = StyleSheet.create({
    course:{
        width:"100%",
        height:180,
        backgroundColor:"#000000",
        padding:5,
    },
    innerView:{
        width:"100%",
        height:"100%",
        borderRadius:25,
        overflow:"hidden"
        // Remove backgroundColor since it's now handled by LinearGradient
        // backgroundColor:"#f0f4f8" 
    },
    text:{
      width:"100%",
      height:"60%",
      // backgroundColor:"green",

    },
    btn:{
      width:"100%",
      height:"50%",
      // backgroundColor:"pink",
      flexDirection:"row",
      alignItems:"flex-end",
      justifyContent:"space-between",
      padding:10
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
})