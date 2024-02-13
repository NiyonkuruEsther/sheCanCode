import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
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
    <ScrollView style={{ justifyContent: "space-around" }}>
      <View>
        <View style={[styles.nav, styles.container]}>
          <Text style={styles.navText}>Todo</Text>
        </View>
        <View>
          <FlatList
            data={TodoList}
            renderItem={({ item, index }) => (
              <TouchableOpacity style={styles.todoListItemContainer}>
                <Text style={styles.todoListItem}>{index + 1}</Text>
                <Text style={styles.todoListItem}>{item.title}</Text>
              </TouchableOpacity>
            )}
            ListHeaderComponent={
              <Text style={styles.todoListTitle}>Todo list items</Text>
            }
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.todoListItems}
          />
        </View>
      </View>

      {/* footer */}
      <View
        style={{
          paddingHorizontal: 20,
          flexDirection: "row",
          alignItems: "flex-end",
          height: "100%",
          columnGap: 10
        }}
      >
        <View
          style={{
            borderBottomWidth: 2,
            flex: 1,
            borderRadius: 12,
            paddingHorizontal: 20,
            width: "100%",
            marginHorizontal: "auto"
          }}
        >
          <TextInput
            placeholder="Enter new todo item"
            style={{
              color: "black",
              fontSize: 20
            }}
          />
        </View>

        <View
          style={{
            backgroundColor: "#FF5733",
            padding: 3,
            borderRadius: 8,
            height: "fit-content"
          }}
        >
          <Button
            title="Add todo"
            color="white"
            accessibilityLabel="Add a new todo item"
          />
        </View>
      </View>
      <StatusBar style="light" />
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
    paddingTop: 30,
    height: 120
  },
  navText: {
    color: "white",
    fontWeight: "500",
    fontSize: 30
  },
  todoListItems: {
    padding: 20,
    flex: 2
  },
  todoListTitle: {
    fontSize: 30,
    paddingBottom: 20
  },
  todoListItemContainer: {
    flexDirection: "row",
    borderRadius: 8,
    borderWidth: 2,
    borderStyle: "dashed",
    marginBottom: 20
  },
  todoListItem: { fontSize: 20, paddingHorizontal: 20, paddingVertical: 10 }
});
