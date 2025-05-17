import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./assets/css/styles";
import { BotaoAmarelo } from "./src/Components/BotaoAmarelo";
import { BotaoMarrom } from "./src/Components/BotaoMarrom";
import { Inputs } from "./src/Components/Inputs";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";



export default function App() {

  // const [validacao,setValidacao] = useState(0)

  return (

    <View style={styles.container}>

      <Image style={styles.imgLogoFundo} source={require("./assets/img/imagem-login.png")} />

      <Text style={styles.nome}>Nome</Text>
      <View style={styles.inputContainerNome}>
        <Inputs inputs=""/>
      </View>

      <Text style={styles.email}>Email</Text>
      <View style={styles.inputContainerEmail}>
        <Inputs inputs="" />
      </View>

      <Text style={styles.senha}>Senha</Text>

      <View style={styles.inputContainerSenha}>

        <Inputs inputs="" />

        <BotaoAmarelo BotaoAmarelo="Entrar" />

        <BotaoMarrom BotaoMarrom="Cadastre-se" />

      </View>

      <StatusBar style="auto" />
      <Image style={styles.imgLogo} source={require("./assets/img/logo-DD.png")} />
    </View>
  );
}
