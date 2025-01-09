import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ShoppingListItem } from "./components/ShoppingList";

export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingListItem name="Coffee"></ShoppingListItem>
      <ShoppingListItem name="Tea"></ShoppingListItem>
      <ShoppingListItem name="Chocolate"></ShoppingListItem>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
