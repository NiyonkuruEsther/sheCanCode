import React from "react";
import { CheckBox, ScrollView, Text, TextInput, View } from "react-native";
import { singIn } from "../../styles/signIn";
import Icon from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const SignIn = () => {
  return (
    <ScrollView style={singIn.container}>
      <Icon name="close" size={30} style={{ fontFamily: "300" }} />

      {/* intro */}

      <View style={singIn.intro}>
        <View>
          <Text style={singIn.heading}>Sign In</Text>
        </View>
        <Text style={singIn.text}>Welcome back! Please enter your details</Text>
      </View>

      {/* form */}

      <View style={singIn.form}>
        {/* Input one */}
        <View style={singIn.formItem}>
          <View
            style={{
              backgroundColor: "#F7EFFD",
              borderRadius: 30,
              padding: 10
            }}
          >
            <Fontisto name="email" size={20} color="purple" />
          </View>
          <TextInput
            placeholder="enter your email"
            style={singIn.formInput}
            placeholderTextColor="black"
          />
        </View>
        {/* input two */}
        <View style={singIn.formItem}>
          <View
            style={{
              backgroundColor: "#E3F4FF",
              borderRadius: 30,
              padding: 10
            }}
          >
            <MaterialIcons name="password" size={20} color="blue" />
          </View>
          <TextInput
            placeholder="enter your password"
            style={singIn.formInput}
            placeholderTextColor="black"
          />
        </View>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
      </View>
    </ScrollView>
  );
};

export default SignIn;
