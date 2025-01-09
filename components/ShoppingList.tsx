import { Text, TouchableOpacity, View, StyleSheet, Alert } from "react-native";
import { theme } from "../theme";

type Props = {
  name: string;
  isCompleted?: boolean;
};

export function ShoppingListItem({ name, isCompleted }: Props) {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want to delete ${name} ?`,
      "It will be gone for good",
      [
        {
          text: "Yes",
          onPress: () => console.log("Ok, deleting"),
          style: "destructive",
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ],
    );
  };

  return (
    <View
      style={[
        styles.itemsContainer,
        isCompleted ? styles.isCompleted : undefined,
      ]}
    >
      <Text
        style={[
          styles.itemText,
          isCompleted ? styles.completedText : undefined,
        ]}
      >
        {name}
      </Text>
      <TouchableOpacity
        style={[
          styles.button,
          isCompleted ? styles.buttonCompleted : undefined,
        ]}
        onPress={handleDelete}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemsContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colorCerulean,
    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  isCompleted: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorLightGrey,
  },
  itemText: { fontSize: 18, fontWeight: "200" },
  button: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  buttonCompleted: {
    backgroundColor: theme.colorGrey,
  },
  completedText: {
    textDecorationLine: "line-through",
    textDecorationColor: theme.colorGrey,
  },
});
