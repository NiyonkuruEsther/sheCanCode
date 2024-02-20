import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Search from "./src/components/Search";
import ClothesOverview from "./src/components/ClothesOverview";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView className="p-5">
        <Search />
        <ClothesOverview />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
