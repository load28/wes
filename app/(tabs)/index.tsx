import { SafeAreaView, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
}
