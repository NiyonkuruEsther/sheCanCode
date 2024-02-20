import { View, Text, ScrollView, FlatList } from "react-native";
import React, { useState } from "react";

const ClothesOverview = () => {
  const [data, setData] = useState(["All", "Man", "Women", "brides"]);

  const loadMoreData = () => {
    setData([...data, ...data]);
  };
  return (
    <ScrollView className="py-5 gap-5">
      <Text>Clothens Overview</Text>
      {/* tags */}
      <FlatList
        className=""
        data={data}
        renderItem={({ item, index }) => (
          <View className="bg-amber-800 rounded-full mr-4">
            <Text className=" text-white py-3 px-6 ">{item}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        onEndReached={loadMoreData}
      />
    </ScrollView>
  );
};

export default ClothesOverview;
