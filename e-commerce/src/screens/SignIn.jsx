import React, { useState } from "react";
import {
  Button,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { singIn } from "../../styles/signIn";
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { CheckBox } from "react-native-elements";

const SignIn = () => {
  const [checked, setChecked] = useState(false);

  return (
    <ScrollView contentContainerStyle={singIn.container}>
      <View>
        <AntDesign name="close" size={30} style={{ fontFamily: "300" }} />

        {/* intro */}
        <View style={singIn.intro}>
          <View>
            <Text style={singIn.heading}>Sign In</Text>
          </View>
          <Text style={singIn.text}>
            Welcome back! Please enter your details
          </Text>
        </View>

        {/* form */}

        <View>
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
                placeholder="Enter your email"
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
                <MaterialIcons name="password" size={20} color="#007FFF" />
              </View>
              <TextInput
                placeholder="Enter your password"
                style={singIn.formInput}
                placeholderTextColor="black"
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 5
            }}
          >
            <CheckBox
              size={30}
              checked={checked}
              onPress={() => setChecked(!checked)}
            />
            <Text>Remeber me</Text>
          </View>
        </View>
      </View>

      {/* footer functions */}
      <View style={singIn.footerFunctionalities}>
        <Button title="Forgot Password" />
        <TouchableOpacity
          style={{
            backgroundColor: "#007FFF",
            width: "100%",
            paddingVertical: 15,
            borderRadius: 30
          }}
        >
          <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
            Sign In
          </Text>
        </TouchableOpacity>
        <View style={singIn.accountFunctionalisties}>
          <Button title="Create account" />
          <Button title="Sign Up" color="orange" />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
