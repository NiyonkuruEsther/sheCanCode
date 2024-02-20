import {
  View,
  Text,
  ScrollView,
  FlatList,
  ImageBackground
} from "react-native";
import React, { useState } from "react";
import { Data } from "../data";

const ClothesOverview = () => {
  const [data, setData] = useState(["All", "Man", "Women", "brides"]);

  const loadMoreData = () => {
    setData([...data, ...data]);
  };

  const [clothes, setClothes] = useState(Data);

  const loadMoreDataClothes = () => {
    setClothes([...clothes, ...clothes]);
  };
  return (
    <View className="pt-5 gap-5">
      {/* Tags */}
      <FlatList
        className=""
        data={data}
        renderItem={({ item, index }) => (
          <View
            className={` ${
              index === 0 ? "bg-amber-800 " : "border border-slate-400 "
            } rounded-full mr-4`}
          >
            <Text
              className={` py-3 px-6  ${
                index === 0 ? "text-white " : "text-black "
              }
             `}
            >
              {item}
            </Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        onEndReached={loadMoreData}
      />
      {/* Gallery */}

      <FlatList
        className="gap-4 h-[20vh] "
        data={clothes  }
        renderItem={({ item, index }) => (
          <ImageBackground
            key={index}
            source={{ uri: item.url }}
            resizeMode="cover"
            className="justify-between mr-4 w-[60vw] object-center "
            borderRadius={25}
          >
            <View className="bg-amber-800 rounded-full w-[128px] whitespace-nowrap m-4">
              <Text className=" text-white py-1 px-4  ">{item.tag}</Text>
            </View>
            <View className="flex-row justify-between bg-black rounded-b-3xl opacity-40 p-4">
              <Text className=" text-white">{item.description}</Text>
              <Text className=" text-white">{item.price}</Text>
            </View>
          </ImageBackground>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onEndReached={loadMoreDataClothes}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ClothesOverview;
