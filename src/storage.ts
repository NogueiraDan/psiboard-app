import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeUserData = async (userData: any) => {
  try {
    await AsyncStorage.setItem("userData", JSON.stringify(userData));
  } catch (error) {
    console.error("Erro ao armazenar os dados do usuário:", error);
  }
};
