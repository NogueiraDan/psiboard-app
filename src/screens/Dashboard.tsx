import { Text, View, Button, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Dashboard() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-slate-200 mt-10 flex-1 justify-center items-center">
      <Text className="text-3xl">Dashboard Screen</Text>
      <Button
        title="Sair"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: "StackAuthRoutes" }],
          })
        }
      />
    </SafeAreaView>
  );
}
