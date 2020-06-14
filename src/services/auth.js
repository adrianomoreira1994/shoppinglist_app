import AsyncStorage from '@react-native-community/async-storage';

export const TOKEN_KEY = '@ShoppingList:token';

export const onSignIn = async (token) =>
  await AsyncStorage.setItem(TOKEN_KEY, token);

export const onSignOut = async () => await AsyncStorage.removeItem(TOKEN_KEY);

export const isSignedIn = async () => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);

  return token !== null ? true : false;
};
