import { useRouter } from 'expo-router';
import React from 'react'
import { View, StyleSheet, Text, Image, useColorScheme, TouchableOpacity } from 'react-native';

function getstart() {
    const router = useRouter();
    const theme = useColorScheme();
    const signUp = () => {
        router.push('/(auth)/sineup')
    };
    return (
        <View style={[styles.container, theme === 'dark' && styles.containerDark]}> {/* Main container */}
            {/* Image Container */}
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require("@/assets/images/logo.png")}
                    resizeMode="contain"  // Maintain the aspect ratio
                />
            </View>

            {/* Heading Text */}
            <View style={styles.textContainer}>
                <Text style={[styles.heading, theme === 'dark' && styles.headingDark]}>LetCode</Text>
                <Text style={[styles.subheading, theme === 'dark' && styles.subheadingDark]}>
                    Would you like more information on working with custom fonts or any other styles?
                </Text>
            </View>

            {/* Get Started Button */}
            <TouchableOpacity
                style={[styles.getStart, theme === 'dark' && styles.getStartDark]}
                onPress={signUp}
            >
                <Text style={styles.getStartText}>Get Started</Text>
            </TouchableOpacity>


        </View>
    )
}

export default getstart
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 40,
        backgroundColor: 'white', // Light theme background
        justifyContent: 'center',
    },
    containerDark: {
        backgroundColor: '#121212', // Dark theme background
    },
    imageContainer: {
        width: "100%",
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    image: {
        width: 200,
        height: 200,
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    heading: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#333', // Light theme text color
        textAlign: 'center',
    },
    headingDark: {
        color: '#fff', // Dark theme text color
    },
    subheading: {
        fontSize: 16,
        color: '#777', // Light theme text color
        textAlign: 'center',
        marginTop: 10,
        paddingHorizontal: 20,
    },
    subheadingDark: {
        color: '#ccc', // Dark theme text color
    },
    getStart: {
        width: "100%",
        height: 55,
        backgroundColor: "#049E55",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    getStartDark: {
        backgroundColor: "#028A45", // Dark theme button color
    },
    getStartText: {
        fontSize: 20,
        color: "white",
        fontWeight: 'bold',
    },
    account: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 20,
    },
    accountText: {
        fontSize: 16,
        color: '#333', // Light theme text color
    },
    accountTextDark: {
        color: '#bbb', // Dark theme text color
    },
    loginText: {
        fontSize: 16,
        color: "#049E55",
        fontWeight: 'bold',
    },
    loginTextDark: {
        color: '#4CAF50', // Dark theme login link color
    },
});
