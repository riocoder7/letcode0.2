import { StyleSheet, Text, View,FlatList, Image } from 'react-native'
import React from 'react'

const SearchCom = () => {
    const  arr = [
        {},
        {},
        {},
        {},

    ]
  return (
<FlatList data={arr} 
showsHorizontalScrollIndicator={false}
  renderItem={({ item }) => (
    <View style={styles.main}>
      <View style={styles.leftside} >
        <View style={styles.imagepart}>
            <Image source={require('@/assets/images/html.jpeg')} style={{ width: '70%', height: '70%', borderRadius:8}} />
        </View>
        <View style={styles.textpart}> 
        <Text style={{ marginTop:0, }}> ___________________</Text>
        <Text style={{fontSize:20, marginTop:8,}}>  Python</Text>
        <Text style={{fontSize:14, marginTop:8,}}>   Python</Text>
        </View>
        </View>
      <View style={styles.rightside} >
      <View style={styles.imagepart}>
      <Image source={require('@/assets/images/html.jpeg')} style={{ width: '70%', height: '70%', borderRadius:8}} />
     </View>
     <View style={styles.textpart}> 
     <Text>_</Text>
     </View>
        </View>
    </View>
  )}
/>

  )
}

export default SearchCom

const styles = StyleSheet.create({
    main:{
        width:'100%',
        flexDirection:'row',
        gap:10,
        // backgroundColor:"green",
        justifyContent:"space-around"
        

    },
    leftside:{
        width:"45%",
        height:200,
        backgroundColor:"pink",
        borderRadius:8,
        marginTop:25
        
    },
    rightside:{
        width:"45%",
        height:200,
        marginTop:25,
        backgroundColor:"pink",
        borderRadius:8,
       
    },
    imagepart:{
        width:'100%',
        height:'60%',
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
        // borderWidth:2,
        // borderColor:"green",
        // borderRadius:8
    },
    textpart:{
        width:'100%',
        height:'40%',
        // borderWidth:2,
        // borderColor:"yellow",
        borderRadius:8
    }

})