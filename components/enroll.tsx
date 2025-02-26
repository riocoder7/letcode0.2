import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, Share, TouchableOpacity } from 'react-native';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// Define the Course type
interface Course {
    image: any;
    id: number;
    title: string;
    description: string;
    instructor: string;
}

// CourseCard component that accepts `enrollment` prop
const Enroll = ({ enrollment, }: { enrollment: Course, }) => {
    const router = useRouter();
    const shareContent = async () => {
        try {
          const result = await Share.share({
            message: 'Check out this awesome content!',
            url: 'https://www.google.com', // Optional: You can also share a URL
            title: 'Share Example',
          });
      
          if (result.action === Share.sharedAction) {
            console.log('Content shared successfully');
          } else if (result.action === Share.dismissedAction) {
            console.log('Share dismissed');
          }
        } catch (error) {
          console.error('Error sharing content', error);
        }
      };
      const title = enrollment.title;
      console.log(enrollment.image);

      
    return (
        
        <View style={styles.container}>
            <Text style={styles.courseName} >{enrollment.title} </Text>
            <View style={styles.imageSection}>
            <Image
               source={{ uri: enrollment.image}} // Use a direct image URL
            style={{ width: "100%", height: "100%", borderRadius: 12 }}
            resizeMode="cover" // Ensures the image scales properly
             />

            </View>

            <View style={{ flexDirection: "row", width: '100%', height: 100, alignItems: "center", }}>
                <View style={styles.lessions}>

                    <View style={styles.icon}>


                        <Image
                            source={require('@/assets/icons/icons8-book-50.png')}
                            style={{ width: 30, height: 30, borderRadius: 24 }}

                        />
                    </View>
                    <View style={styles.textPart}>
                        <Text style={{ color: "#fff" }}>22 lession </Text>
                    </View>

                </View>
                <View style={[styles.lessions, { marginLeft: 5 }]}>
                    <View style={styles.icon}>


                        <Image
                            source={require('@/assets/icons/icons8-clock-50.png')}
                            style={{ width: 30, height: 30, borderRadius: 24 }}

                        />
                    </View>
                    <View style={styles.textPart}>
                        <Text style={{ color: "#fff" }}> hellow </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={shareContent} style={[styles.share, { marginLeft: 5 }]}>
                    <View>
                        <Image 
                            source={require('@/assets/icons/icons8-share-50.png')}
                            style={{ width: 30, height: 30, borderRadius: 24 }}
                        />
                    </View>
                </TouchableOpacity>

            </View>

            <View style={{width:'100%',  height:180, padding:10, borderWidth:1, borderColor:"#999999", borderRadius:12 }}>
             <Text style={{fontSize:16, color:"#cccccc", fontFamily:""}}>{enrollment.description} </Text>
            </View>

            <TouchableOpacity onPress={() => router.push(`/(courses)/html?title=${encodeURIComponent(title)}`)} style={{width:'100%', height:50, backgroundColor:"#007bff", marginTop:20, borderRadius:12, justifyContent:"center"}}>
                <Text  style={{ textAlign: 'center', fontSize:20,fontWeight: 'bold',  color:"#fff" }}>Enroll Now</Text>
            </TouchableOpacity>

        </View>
       
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"grren",
        width:'100%',

    },
    imageSection: {
        width: '100%',
        height: 180,
        marginTop: 20,
        
        borderRadius: 12,
    },
    courseName: {
        marginTop: 20,
        fontSize: 43,
        color: "white",
    },
    lessions: {
        width: '40%',
        height: 50,
        flexDirection: "row",
        borderRadius: 30,
        backgroundColor: "#080808"

    },
    share: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: "#DAD9DC",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        width: 48,
        height: 49,
        borderRadius: 50,
        backgroundColor: "#1c1d20",
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    textPart: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    }
});

export default Enroll;
