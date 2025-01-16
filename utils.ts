import { ShoppingListItemType } from "./app";

// Generate 20 elements for Scroll View testing
export const testList: ShoppingListItemTypeItemType[] = Array(20)
  .fill(() => ({}))
  .map((_, index) => ({
    id: index.toString(),
    name: "Cocoa",
  }));
