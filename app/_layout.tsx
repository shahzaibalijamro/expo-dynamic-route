import { Stack } from "expo-router";
import "../global.css";
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",               // Custom header title for the index page
          headerStyle: {
            backgroundColor: '#f4511e',  // Custom header background color
          },
          headerTintColor: '#fff',       // Custom header text and icon color
          headerTitleStyle: {
            fontWeight: 'bold',          // Custom header title style
          },
        }}
      />
    </Stack>
  );
}
