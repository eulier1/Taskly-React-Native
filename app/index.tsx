import {
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
  View,
  Text,
} from "react-native";
import { theme } from "../theme";
import { useState } from "react";
import { ShoppingListItem } from "../components/ShoppingList";

type ShoppingListItemType = {
  id: string;
  name: string;
};

const initialList: ShoppingListItemType[] = Array(10000)
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
    <FlatList
      data={shoppingList}
      renderItem={({ item }) => {
        console.log(item);
        return (
          <View>
            <Text>{item.id}</Text>
            <ShoppingListItem name={item.name} />
          </View>
        );
      }}
      stickyHeaderIndices={[0]}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      ListHeaderComponent={
        <TextInput
          placeholder="E.g. Coffee"
          style={styles.textInput}
          value={value}
          onChangeText={setValue}
          keyboardType="default"
          returnKeyType="done"
          onSubmitEditing={handleSubmit}
        />
      }
    />
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
