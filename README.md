# Expo Router with React Native Skia

It took a lot of tries to get this combination working on web. So documenting hoping this is useful for others. 🙂 This will not work on mobile platforms as is.

Steps:

1. Create expo app  
   `npx create-expo-app expo-router-with-skia`
1. Install dependencies for web  
   `npx expo install react-dom react-native-web @expo/webpack-config`
1. Install expo router  
   `npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar react-native-gesture-handler`
1. Follow rest of the [Getting Started](https://expo.github.io/router/docs/#getting-started) steps.
1. Create directory app and move the `App.js` into it and rename it to `index.jsx`
1. Start the server and verify everything works so far  
   `npx expo --clear`
1. Now stop the server and add react-native-skia  
   ```bash
   npx expo install @shopify/react-native-skia
   npx setup-skia-web
   ```
1. Create `postinstall.js` in root (find it in this project)
1. Add this to scripts in `package.json`
   ```json
   "scripts": {
    "postinstall": "node postinstall.js; npx setup-skia-web"
   }
   ```
1. Install `react-native-reanimated` and add it to `babel.config.js`  
   `npx expo install react-native-reanimated`
1. Install `@babel/plugin-proposal-export-namespace-from` and add it to `babel.config.js`  
   `npx expo install @babel/plugin-proposal-export-namespace-from -- -D`
1. Use `HelloWorld.jsx` in this project for testing
1. Load Skia before loading `HelloWorld.jsx` in `your index.jsx`



## References
1. https://docs.expo.dev/tutorial/create-your-first-app/
1. https://expo.github.io/router/docs/#getting-started
1. https://shopify.github.io/react-native-skia/docs/getting-started/installation/
1. https://shopify.github.io/react-native-skia/docs/getting-started/web
1. https://shopify.github.io/react-native-skia/docs/getting-started/web#manual-webpack-installation
1. https://shopify.github.io/react-native-skia/docs/getting-started/hello-world
1. https://github.com/Shopify/react-native-skia/issues/1448#issuecomment-1540059844