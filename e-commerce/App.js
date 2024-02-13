import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import BillingAndPayment from "./src/screens/BillingAndPayment";
import SignIn from "./src/screens/SignIn";
import Home from "./src/screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <SafeAreaView>
    //   <SignIn />
    //   <StatusBar style="auto" />
    // </SafeAreaView>
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        /> */}
        <Stack.Screen
          name="SigIn"
          component={SignIn}
          options={{ title: "SigIn" }}
        />
        <Stack.Screen
          name="Billing and payment"
          component={BillingAndPayment}
          options={{ title: "Billing" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
