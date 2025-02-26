import { useEffect } from "react";
import { useRouter } from "expo-router";
import { Text, useColorScheme, View, StyleSheet } from "react-native";

export default function Index() {


  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/getstart');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  

  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>Welcome</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the container take up the full screen
    justifyContent: "center", // Centers the content vertically
    alignItems: "center", // Centers the content horizontally
    padding: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
