import { Text, View, Image } from "react-native";
import { StatusBar } from "react-native";
import styles from "../../assets/styles";
import { autenticacao } from "../FirebaseConexao";
import { getAuth, signOut, validatePassword } from "firebase/auth";
import firebase from "firebase/compat/app";
import { BotaoAmarelo } from "../Components/BotaoAmarelo";

export const Home: React.FC = () => {
  async function signout() {
    signOut(autenticacao);
  }

  return (
    <View style={{ margin: StatusBar.currentHeight || 0 }}>
      <View style={styles.base}>
        <View style={styles.logoContainerInicio}>
          <Image style={styles.imgLogoinicio} source={require("../../assets/img/neymar-principal.png")} />
          <Image style={styles.imgDDInicio} source={require("../../assets/img/logo-DD.png")} />
        </View>
        
        <View style={styles.containerLoja}>
          <Image style={styles.imgLoja1} source={require("../../assets/img/imgLoja1.jpg")} />
          <Image style={styles.imgLoja2} source={require("../../assets/img/imgLoja2.jpg")} />
        </View>
        <View style={styles.textoContainer}> 
        <Text style={styles.titulo}>NOSSA COLEÇÃO</Text>
        <Text style={styles.contexto}>  Nossa coleção apresenta peças atemporais projetadas para o indivíduo moderno.Qualidade acima dequantidade é nosso 
mantra. Descubra um guarda-roupa que reflita 
sua essência.</Text>
        </View>
      </View>
    </View>
  );
};
{
  /*/<BotaoAmarelo BotaoAmarelo="desconectar" AutenticarUsuario={() => signout()}/>*/
}
