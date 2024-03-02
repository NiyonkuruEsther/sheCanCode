import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Search from "./src/components/Search";
import ClothesOverview from "./src/components/ClothesOverview";
import Like from "./src/components/Like";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="p-5">
          <Search />
          <ClothesOverview />
        </View>
        <Like />
      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
