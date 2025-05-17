import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./assets/styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.imgLogoFundo} source={require("./assets/img/imagem-login.png")} />
      <Text style={styles.nome}>Nome</Text>
      <View style={styles.inputContainerNome}>
        <TextInput style={styles.inputNome}></TextInput>
      </View>
      <Text style={styles.email}>Email</Text>
      <View style={styles.inputContainerEmail}>
        <TextInput style={styles.inputEmail}></TextInput>
      </View>
      <Text style={styles.senha}>Senha</Text>
      <View style={styles.inputContainerSenha}>
        <TextInput style={styles.inputSenha}></TextInput>
        <TouchableOpacity style={styles.botaoEntrar}>
          <Text style={styles.textoBotaoEntrar}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoCadastrese}>
          <Text style={styles.textoBotaoCadastrese}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
      <Image style={styles.imgLogo} source={require("./assets/img/logo-DD.png")} />
    </View>
  );
}
