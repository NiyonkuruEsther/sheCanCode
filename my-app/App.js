import { StatusBar } from "expo-status-bar";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";

export default function App() {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={[styles.nav, styles.container]}>
          <Text style={styles.navText}>Todo</Text>
        </View>
        <ScrollView style={styles.todoListItems}>
          <Text style={styles.todoListTitle}>Todo list items</Text>
          <View style={styles.todoListItemContainer}>
            <Text style={styles.todoListItem}>
              What is it like to live in this world!
            </Text>
          </View>
        </ScrollView>
        <StatusBar style="auto" />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 30
  },
  nav: {
    backgroundColor: "#FF5733",
    height: 80
  },
  navText: {
    color: "white",
    fontWeight: "500",
    fontSize: 30
  },
  todoListItems: {
    flex: 1,
    // flexDirection: "column",
    padding: 20
  },
  todoListTitle: {
    fontSize: 30,
    paddingBottom: 20
  },
  todoListItemContainer: {
    borderRadius: 8,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "black",
    marginBottom: 20
  },
  todoListItem: { fontSize: 20, paddingHorizontal: 20, paddingVertical: 10 }
});
