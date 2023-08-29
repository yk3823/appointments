import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Button, Alert, Platform } from 'react-native';
import { useDimensions } from '@react-native-community/hooks'

export default function App() {
  console.log(useDimensions());
  return (
    <SafeAreaView style={styles.container}>
      <Text> Hello React Native</Text>
      <TouchableOpacity onPress={() => console.log("Image tapped")}>
        <Image
          fadeDuration={1000} //מעלה את התמונה בהדרגה
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300"
          }} />
      </TouchableOpacity>
      <Button
        title="Click Me"
        onPress={() => Alert.alert("My title", "My message", [
          { text: "Yes", onPress: () => console.log("Yes") },
          { text: "No", onPress: () => console.log("No") },])}
      ></Button>
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
