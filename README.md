# Taskly App
A shopping list and a reminder

Below the greastest hits in docs ref used 

## Formatting
### [Using Eslint & Prettier](https://docs.expo.dev/guides/using-eslint/)
  
### Icons & Styling
### [Tailwind for React Native](https://www.nativewind.dev/)
### [Icons](https://docs.expo.dev/versions/latest/sdk/svg/)

## Navigation
### [React Navigation](https://reactnavigation.org/)
### [React Navigation](https://docs.expo.dev/router/installation/#quick-start)

## Input
### [Text Input](https://reactnative.dev/docs/textinput)

## Scroll View
### [Using Scroll View](https://reactnative.dev/docs/using-a-scrollview)

Use Cases : For a fixed small subset of items (Array in Javascript plays 2 roles, [Tuples and Array](https://exploringjs.com/tackling-ts/ch_typescript-essentials.html#typing-arrays)).

This is similar to Tuples, a **fixed** length of elements, generally of different types.

## List View
### [Using List View](https://reactnative.dev/docs/using-a-listview)

Use Cases : For large dataset, (i.e. data from a server).
Behind the scene it use Sliding Window Technique, it keep tracks the visible area you have in your device and it doesn't render items way outside of the visible area and unmount items that you have scroll past.
The anatomy is made of, Visible Area and subset of elements on top and bottom.

## Toggle/Pressable
### [Using Pressable](https://reactnative.dev/docs/pressable)

Use case : Toggle element like below
