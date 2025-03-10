import { useContext, useEffect } from "react";
import { useRouter } from "expo-router";
import { Text, useColorScheme, View, StyleSheet } from "react-native";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { UserDetailContext } from '@/config/UserDetailContext';

export default function Index() {


  const router = useRouter();
  const { userDetail, setUserDetail } = useContext(UserDetailContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Fetch user details from Firestore
        const result = await getDoc(doc(db, "users", user.email || ""));
        if (result.exists()) {
          setUserDetail(result.data());
        }
        // Navigate immediately to Home
        router.replace('../(tabs)/Home');
      } else {
        // If no user, wait 3 seconds and then navigate to Onboarding
        const timer = setTimeout(() => {
          router.replace('/getstart');
        }, 3000);
        return () => clearTimeout(timer);
      }
    });
    return () => unsubscribe();
  }, [router, setUserDetail]);
  

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
