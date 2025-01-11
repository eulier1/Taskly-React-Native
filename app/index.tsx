import { StyleSheet, TextInput, ScrollView } from "react-native";
import { theme } from "../theme";
import { useState } from "react";
import { ShoppingListItem } from "../components/ShoppingList";

type ShoppingListItemType = {
  id: string;
  name: string;
};

const initialList: ShoppingListItemType[] = Array(20)
  .fill(() => ({}))
  .map((_, index) => ({
    id: index.toString(),
    name: "Cocoa",
  }));

export default function App() {
  const [shoppingList, setsShoppingList] =
    useState<ShoppingListItemType[]>(initialList);
  const [value, setValue] = useState<string>("");

  const handleSubmit = () => {
    if (value) {
      const newShoppingList = [
        { id: new Date().toTimeString(), name: value },
        ...shoppingList,
      ];
      setsShoppingList(newShoppingList);
      setValue("");
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderIndices={[0]}
    >
      <TextInput
        placeholder="E.g. Coffee"
        style={styles.textInput}
        value={value}
        onChangeText={setValue}
        keyboardType="default"
        returnKeyType="done"
        onSubmitEditing={handleSubmit}
      />
      {shoppingList.map((item) => (
        <ShoppingListItem name={item.name} key={item.id} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    paddingTop: 12,
  },
  textInput: {
    borderColor: theme.colorLightGrey,
    borderWidth: 2,
    padding: 12,
    marginHorizontal: 12,
    marginBottom: 12,
    fontSize: 18,
    borderRadius: 50,
    backgroundColor: theme.colorWhite,
  },
});
