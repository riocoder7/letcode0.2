import { Stack } from "expo-router";
import { StatusBar, useColorScheme } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default function RootLayout() {
  const theme = useColorScheme();
  return (
    // Wrap the content in GestureHandlerRootView to enable gesture handling
    <GestureHandlerRootView style={{ flex: 1 }}>
     
      <StatusBar hidden={true} />
      <StatusBar
     hidden={false} 
     barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} 
     backgroundColor={theme === 'dark' ? '#121212' : '#FFF'} />
        <Stack screenOptions={{
          headerShown: false,
          
        }}>
          {/* Your routes or screens would go here */}
        </Stack>
      
    </GestureHandlerRootView>
    
  );
}
