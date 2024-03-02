import { View, Text, Image } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const Search = () => {
  return (
    <View className="gap-5">
      <View className="flex-row justify-between items-center">
        <View className=" bg-slate-100 rounded-full text-red-500 w-[40px] py-2 items-center">
          <AntDesign name="arrowleft" size={25} />
        </View>
        <Text className="text-lg font-semibold">Search</Text>
        <Image
          source={{
            uri: "https://t3.ftcdn.net/jpg/03/20/78/84/360_F_320788475_nEiLVViOBewea7taZWqNUR0lJAMTAaSo.jpg"
          }}
          height={30}
          width={30}
          className="rotate-90"
        />
      </View>
      <View className="flex-row justify-between items-center px-3 py-2 bg-slate-200 rounded-full">
        <View className="flex-row gap-2 items-center">
          <EvilIcons name="search" size={25} style={{ opacity: 0.4 }} />
          <Text className="text-lg opacity-40">Search ...</Text>
        </View>
        <Image
          source={{
            uri: "https://i.pinimg.com/564x/db/bb/cc/dbbbcc5a04883c6e6215389b0cb5fcc1.jpg"
          }}
          height={20}
          width={20}
          className="opacity-30"
        />
      </View>
    </View>
  );
};

export default Search;
