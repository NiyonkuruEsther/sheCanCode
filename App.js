import { Image, ScrollView, Text, View } from "react-native";
// import tw from 'tailwind-react-native-classnames'

export default function App() {
  return (
    <ScrollView className="flex flex-1  bg-black">
      <View>
        <Image
          source={{
            uri: "https://reactnative.dev/docs/assets/p_cat2.png"
          }}
          // style={{ width: 200, height: 200 }}
        />
      </View>
      <View>
        <Text className="text-white">Find a perfect job match</Text>
      </View>
      {/* <StatusBar /> */}
    </ScrollView>
  );
}


// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     alignItems: "center",
//     justifyContent: "center"
//   }
// })