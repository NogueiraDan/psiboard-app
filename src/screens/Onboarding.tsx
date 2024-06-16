import {
  Text,
  SafeAreaView,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView className="flex-1">
      <ImageBackground
        source={require("../../assets/bg.png")}
        className="pt-[64px] px-5 flex-1 items-center text-white justify-around object-contain"
      >
        <View className="items-center">
          <Image
            source={require("../../assets/custome.png")}
            style={{ width: 200, height: 200 }}
          />
          <Text className="text-[48px] mt-5 text-white">PsiBoard</Text>
          <Text className="text-[22px] mt-5 w-auto text-center text-white">
            Seus atendimentos em um só lugar
          </Text>
        </View>

        <View className="w-[250px] h-auto gap-5">
          <TouchableOpacity
            testID="login-button"
            onPress={() => navigation.navigate("SignIn")}
            className="text-center flex items-center justify-center h-[54px] py-2 bg-[#45b7ba] text-[#fff] font-semibold rounded"
          >
            <Text className="text-white font-semibold text-[16px]">
              Faça seu Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            testID="sign-up-button"
            onPress={() => navigation.navigate("SignUp")}
            className="text-center flex items-center  justify-center h-[54px]  px-4 py-2 bg-[#45b7ba] text-[#fff] font-semibold rounded"
          >
            <Text className="text-white font-semibold text-[16px]">
              Cadastre-se
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
