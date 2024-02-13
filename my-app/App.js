import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default function App() {
  const TodoList = [
    { title: "Eat" },
    { title: "take pills" },
    { title: "Go for sports" }
  ];

  return (
    <SafeAreaView>
      <View style={[styles.nav, styles.container]}>
        <Text style={styles.navText}>Todo</Text>
      </View>
      <FlatList
        data={TodoList}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.todoListItemContainer}>
            <Text style={styles.todoListItem}>{item.title}</Text>
          </TouchableOpacity>
        )}
        ListHeaderComponent={
          <Text style={styles.todoListTitle}>Todo list items</Text>
        }
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.todoListItems}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
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
