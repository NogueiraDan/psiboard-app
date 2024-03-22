import { Text, Button, SafeAreaView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="pt-[64px] flex-1 items-center bg-slate-200 back">
      <Text className="text-3xl">Onboarding Screen</Text>
      <Button
        title="Faça seu Login"
        onPress={() => navigation.navigate("SignIn")}
      />
      <Button
        title="Crie sua conta"
        onPress={() => navigation.navigate("SignUp")}
      />
    </SafeAreaView>
  );
}
