import { Text, View, Image, ScrollView } from "react-native";
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
    <ScrollView>
      <View style={{ margin: StatusBar.currentHeight || 0 }}>
        <View style={styles.base}>
          <View style={styles.logoContainerInicio}>
            <Image style={styles.imgLogoinicio} source={require("../../assets/img/neymar-principal.png")} />
            <Image style={styles.imgDDInicio} source={require("../../assets/img/logo-DD.png")} />
          </View>

          <View style={styles.containerLoja}>
            <Image style={styles.imgLoja} source={require("../../assets/img/imgLoja1.jpg")} />
            <Image style={styles.imgLoja} source={require("../../assets/img/imgLoja2.jpg")} />
          </View>
          <View style={styles.textoContainer}>
            <Text style={styles.titulo}>NOSSA COLEÇÃO</Text>
            <Text style={styles.contexto}>
              {" "}
              Nossa coleção apresenta peças atemporais projetadas para o indivíduo moderno.Qualidade acima dequantidade é nosso mantra. Descubra um
              guarda-roupa que reflita sua essência.
            </Text>
          </View>
          <View style={styles.mulheresContainer}>
            <Image style={styles.imgMulheres} source={require("../../assets/img/bruna-biancardi.png")} />
            <Text style={styles.textMulheres}>Mulheres</Text>
          </View>
          <View style={styles.produtosContainerBrinco}>
            <View style={styles.produtosContainerAnel}>
              <Image style={styles.aneisMulher} source={require("../../assets/img/aneis-feminino.png")} />
              <Text style={styles.textAneis}>Anéis</Text>
            </View>
            <View style={styles.produtosContainerColar}>
              <Image style={styles.colarMulher} source={require("../../assets/img/colar-feminino.png")} />
              <Text style={styles.textColar}>Colares</Text>
            </View>
          </View>
          <View style={styles.produtosContainerBrinco}>
            <View style={styles.produtosContainerAnel}>
              <Image style={styles.aneisMulher} source={require("../../assets/img/pulseira-feminino.png")} />
              <Text style={styles.textAneis}>Pulseiras</Text>
            </View>
            <View style={styles.produtosContainerColar}>
              <Image style={styles.colarMulher} source={require("../../assets/img/relogio-feminino.png")} />
              <Text style={styles.textColar}>Relógios</Text>
            </View>
          </View>

          <View style={styles.produtosContainerBrinco}>
            <View style={styles.produtosContainerAnel}>
              <Image style={styles.aneisMulher} source={require("../../assets/img/brinco-feminino.png")} />
              <Text style={styles.textAneis}>Brincos</Text>
            </View>
            <View style={styles.produtosContainerColar}>
              <Image style={styles.colarMulher} source={require("../../assets/img/alianca-feminino.png")} />
              <Text style={styles.textColar}>Aliança</Text>
            </View>
          </View>


           {/*Homens */}
           <View style={styles.mulheresContainer}>
            <Image style={styles.imgMulheres} source={require("../../assets/img/neymar-principal (1).png")} />
            <Text style={styles.textHomens}>Homens</Text>
          </View>
          <View style={styles.produtosContainerBrinco}>
            <View style={styles.produtosContainerAnel}>
              <Image style={styles.aneisMulher} source={require("../../assets/img/anel-masculino.png")} />
              <Text style={styles.textAneis}>Anéis</Text>
            </View>
            <View style={styles.produtosContainerColar}>
              <Image style={styles.colarMulher} source={require("../../assets/img/colares.jpg")} />
              <Text style={styles.textColar}>Colares</Text>
            </View>
          </View>
          <View style={styles.produtosContainerBrinco}>
            <View style={styles.produtosContainerAnel}>
              <Image style={styles.aneisMulher} source={require("../../assets/img/pulsiera-masculino.png")} />
              <Text style={styles.textAneis}>Pulseiras</Text>
            </View>
            <View style={styles.produtosContainerColar}>
              <Image style={styles.colarMulher} source={require("../../assets/img/relogio-masculino.png")} />
              <Text style={styles.textColar}>Relógios</Text>
            </View>
          </View>

          <View style={styles.produtosContainerBrinco}>
            <View style={styles.produtosContainerAnel}>
              <Image style={styles.aneisMulher} source={require("../../assets/img/brincoM.webp")} />
              <Text style={styles.textAneis}>Brincos</Text>
            </View>
            <View style={styles.produtosContainerColar}>
              <Image style={styles.colarMulher} source={require("../../assets/img/alianca-masculino.png")} />
              <Text style={styles.textColar}>Aliança</Text>
            </View>
          </View>
          
          
        </View>
      </View>
    </ScrollView>
  );
};
{
  /*/<BotaoAmarelo BotaoAmarelo="desconectar" AutenticarUsuario={() => signout()}/>*/
}
