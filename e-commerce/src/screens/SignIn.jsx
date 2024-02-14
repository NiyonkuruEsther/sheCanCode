import React, { useState } from "react";
import { Button, ScrollView, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { CheckBox } from "react-native-elements";
import { TextInput } from "react-native-paper";
import { signIn } from "../../styles/signIn";

const SignIn = () => {
  const [checked, setChecked] = useState(false);

  return (
    <ScrollView contentContainerStyle={signIn.container}>
      <View>
        <TouchableOpacity>
          <AntDesign name="close" size={20} style={{ fontFamily: "300" }} />
        </TouchableOpacity>

        {/* intro */}
        <View style={signIn.intro}>
          <View>
            <Text style={signIn.heading}>Sign In</Text>
          </View>
          <Text style={signIn.text}>
            Welcome back! Please enter your details
          </Text>
        </View>

        {/* form */}

        <View>
          <View style={signIn.form}>
            {/* Input one */}
            <TextInput
              label="Email"
              mode="flat"
              left={
                <TextInput.Icon
                  icon="email-outline"
                  size={20}
                  style={{
                    borderRadius: 30,
                    backgroundColor: "#F7EFFD",
                    padding: 5,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  color="purple"
                />
              }
              theme={{
                roundness: 12,
                colors: { primary: "#007FFF", background: "#F7EFFD" }
              }}
            />
            {/* input two */}
            <TextInput
              label="Password"
              mode="flat"
              secureTextEntry
              left={
                <TextInput.Icon
                  icon="lock-outline"
                  size={20}
                  style={{
                    borderRadius: 30,
                    backgroundColor: "#E3F4FF",
                    padding: 5,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  color="#007FFF"
                />
              }
              theme={{
                roundness: 12,
                colors: { primary: "#007FFF", background: "#F5FBFF" }
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 5
            }}
          >
            <CheckBox
              size={20}
              checked={checked}
              onPress={() => setChecked(!checked)}
            />
            <Text>Remember me</Text>
          </View>
        </View>
      </View>

      {/* footer functions */}
      <View style={signIn.footerFunctionalities}>
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
        <View style={signIn.accountFunctionalisties}>
          <Button title="Create account" />
          <Button title="Sign Up" color="orange" />
        </View>
      </View>

      {/* Social media */}
      <View
        style={{
          flexDirection: "row",
          marginBottom: 20,
          backgroundColor: "#F5FBFF",
          padding: 12,
          borderRadius: 100,
          justifyContent: "space-around"
        }}
      >
        <View
          style={{
            shadowRadius: 12,
            padding: 5,
            borderRadius: 30,
            backgroundColor: "white",
            width: 50,
            height: 50,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Entypo name="facebook-with-circle" size={20} color="#007FFF" />
        </View>
        <View
          style={{
            shadowRadius: 12,
            padding: 5,
            borderRadius: 30,
            backgroundColor: "white",
            width: 50,
            height: 50,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <FontAwesome name="google" size={20} color="red" />
        </View>
        <View
          style={{
            shadowRadius: 12,
            padding: 5,
            borderRadius: 30,
            backgroundColor: "white",
            width: 50,
            height: 50,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <AntDesign name="apple1" size={20} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
