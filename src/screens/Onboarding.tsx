import { Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const navigation = useNavigation();
  return (
    <View className="pt-5 flex-1 justify-center items-center bg-slate-200">
      <Text className="text-3xl">Onboarding Screen</Text>
      <Button
        title="Faça seu Login"
        onPress={() => navigation.navigate("SignIn")}
      />
      <Button
        title="Crie sua conta"
        onPress={() => navigation.navigate("SignUp")}
      />
    </View>
  );
}
