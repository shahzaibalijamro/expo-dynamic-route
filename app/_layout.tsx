import { Stack } from "expo-router";
import "../global.css";
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e', // Default background color
        },
        headerTintColor: '#fff',       // Default text/icon color
        headerTitleStyle: {
          fontWeight: 'bold',          // Default title style
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",  // Custom header title for the home page
        }}
      />
      <Stack.Screen
        name="singleProduct/[id]"
        options={{
          title: "Single Product",  // Custom header title for the home page
        }}
      />
    </Stack>
  );
}
