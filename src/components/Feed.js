import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { GetUserFeed } from "./api/UserFeed";

export default function Load(props) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(true);

  useEffect(() => {
    GetUserFeed();
  }, [isLoading]);

  return <Text>{data.name}</Text>;
}
