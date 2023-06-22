import { lazy } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";

import { WithSkiaWeb } from "@shopify/react-native-skia/lib/module/web";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <WithSkiaWeb getComponent={() => import("../components/HelloWorld")} fallback={<Text>Loading Skia...</Text>} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
