import { View, Text, TextInput, Button } from 'react-native'

export function Form() {
 return (
  <View>
   <Text>Perfil</Text>

   <TextInput
    testID="input-name"
    placeholder="Nome"
    autoCorrect={false}
    value="Jeferson"
   />
   <TextInput
    testID="input-surname"
    placeholder="Sobrenome"
    autoCorrect={false}
    value="Lucas"
   />

   <Button title="Salvar" onPress={() => {}} />
  </View>
 )
}