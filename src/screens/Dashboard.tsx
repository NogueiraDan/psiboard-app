import { Text, View, Button, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../context/UserContext";

export default function Dashboard() {
  const navigation = useNavigation();
  const { user, removeUser } = useUser();


  async function handleLogout() {
    await removeUser();
    navigation.reset({
      index: 0,
      routes: [{ name: "StackAuthRoutes" }],
    })
  }

  return (
    <SafeAreaView className="bg-slate-200 flex-1 justify-center items-center">
      <Text className="text-3xl">Dashboard Screen</Text>
      <View>
      <Text>Nome: {user?.name}</Text>
      <Text>Email: {user?.email}</Text>
    </View>
      <Button
        title="Sair"
        onPress={handleLogout}
      />
    </SafeAreaView>
  );
}
