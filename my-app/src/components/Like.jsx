import { View, Text, FlatList, ImageBackground } from "react-native";
import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Data } from "../data";

const Like = () => {
  const [data, setData] = useState(Data);

  const loadMoreData = () => {
    setData([...data, ...data]);
  };
  return (
    <FlatList
      style={{ paddingHorizontal: 6 }}
      data={data}
      renderItem={({ item, index }) => (
        <View
          style={{
            justifyContent: "space-between",
            flex: 1,
            padding: 10
          }}
        >
          <ImageBackground
            className="h-40 items-end"
            key={index}
            source={{ uri: item.url }}
            resizeMode="cover"
            borderRadius={20}
            style={{
              borderRadius: 25,
              flex: 1,
              padding: 10
            }}
          >
            <View className="bg-white rounded-full w-8 p-2 items-center justify-center">
              <AntDesign name="hearto" size={16} />
            </View>
          </ImageBackground>
          <View className="gap-2 pt-3">
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
          </View>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      numColumns={2}
      onEndReached={loadMoreData}
    />
  );
};

export default Like;
