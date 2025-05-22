import styles from "../../assets/styles";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { BotaoAmarelo } from "../Components/BotaoAmarelo";
import { BotaoMarrom } from "../Components/BotaoMarrom";
import { Inputs } from "../Components/Inputs";
import { useState } from "react";
import { autenticacao } from "../FirebaseConexao";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { db } from "../FirebaseConexao";
import { addDoc, collection, Firestore, setDoc, doc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { stackProp } from "../rotas/Stack";

export const Login: React.FC = () => {
  const navigation = useNavigation<stackProp>()
  const [validacao, setValidacao] = useState(0)

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  // const [cpf, setCpf] = useState('')

  const [user, setUser] = useState('')

  async function criarUsuario() {

    if(nome != '' && email != '' && senha != '') {

      console.log('funcao chamada')

      const info = {
        NomeUsuario: nome
      }

      try{
        const usuario = await createUserWithEmailAndPassword(autenticacao, email, senha)

        console.log('esse sao os dados que serao enviados com a conta info criada ' + info.NomeUsuario + usuario.user.uid)

        const infosRef = doc (db, 'usuario', usuario.user.uid)

        await setDoc(infosRef, info)
        .then((usuario) =>{
          Alert.alert('cadastro realizado com sucesso')
          console.log('documento adicionado com sucesso')

          navigation.navigate('Home')
        }).catch((error) =>{
          console.log(error)
        })

      }catch (error) {
        console.log('erro ao adicionar uma conta ou adicionar ao firestore:' + error)
      }

    }else{
      console.log('fudeeeuuuu')
    }
  } 


  async function entrarUsuario() {
    try{
      const usuario = await signInWithEmailAndPassword(autenticacao, email, senha)
      setUser(String(usuario.user.email))

      navigation.navigate('Home')
    }catch (error) {
      console.log(error)
    }
  } 


  return (
    <View style={styles.container}>
      <View style={styles.base}>

        {validacao == 0 ? (
          <View style={{ alignItems: 'center' }}>
            <View style={styles.logoContainer}>
              <Image style={styles.imgLogoFundo} source={require("../../assets/img/imagem-login.png")} />
              <Image style={styles.imgLogo} source={require("../../assets/img/logo-DD.png")} />
            </View>

            <View style={styles.inputGeralContainer}>

              <Text style={styles.email}>Email</Text>
              <View style={styles.inputContainer}>
                <Inputs inputs=""/>
              </View>

              <Text style={styles.senha}>Senha</Text>
              <View style={styles.inputContainer}>
                <Inputs inputs="" />
              </View>
            </View>

            <View style={styles.botaoContainer}>
              <BotaoAmarelo BotaoAmarelo="Entrar" AutenticarUsuario={() => entrarUsuario()} />

              <BotaoMarrom BotaoMarrom="Cadastre-se" Validacao={() => setValidacao(1)} />
            </View>
          </View>

        ) :

          <View>
            <View style={styles.logoContainer}>
              <Image style={styles.imgLogoFundo} source={require("../../assets/img/imagem-login.png")} />
              <Image style={styles.imgLogo} source={require("../../assets/img/logo-DD.png")} />
            </View>

            <View style={styles.inputGeralContainer}>
              <Text style={styles.nome}>Nome</Text>
              <View style={styles.inputContainer}>
                <Inputs inputs=""  inputValor={nome} inputInfos={(Text) => setNome(Text)}/>
              </View>

              <Text style={styles.email}>Email</Text>
              <View style={styles.inputContainer}>
                <Inputs inputs=""  inputValor={email} inputInfos={(Text) => setEmail(Text)} />
              </View>

              <Text style={styles.senha}>Senha</Text>
              <View style={styles.inputContainer}>
                <Inputs inputs=""  inputValor={senha} inputInfos={(Text) => setSenha(Text)} />
              </View>
            </View>

            <View style={styles.botaoContainer}>

              <BotaoAmarelo BotaoAmarelo="Cadastrar" AutenticarUsuario={() => criarUsuario()} />

              <BotaoMarrom BotaoMarrom="Voltar" Validacao={() => setValidacao(0)} />
            </View>
          </View>

        }

        <StatusBar style="auto" />
      </View>
    </View>
  );
}
