import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";

const navigation = useNavigation();

const Home = () => {
  return (
    <ScrollView>
      <TouchableOpacity onPress={() => [navigation.navigate("SignIn")]}>
        <Text>Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Home;
