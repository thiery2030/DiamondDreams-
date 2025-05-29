import { Text, View, StatusBar, Image, Linking,ScrollView } from "react-native";
import styles from "../../assets/styles";
import { BotaoAmarelo } from "../Components/BotaoAmarelo";

export const Produtos: React.FC = () => {
  const identificarLink = async (url: string) => {
    const suportado = await Linking.canOpenURL(url);

    if (suportado) {
      await Linking.openURL(url);
    } else {
      console.log("nao e possivel abrir o link");
    }
  };

  return (
     <ScrollView> 
    <View style={{ marginTop: StatusBar.currentHeight || 0 }}>
      <View style={styles.base}>
        <View style={{ alignItems: "center" }}>
          <Image style={styles.imgLogoGeral} source={require("../../assets/img/logo-DD.png")} />
        </View>
        <View style={styles.produtosContainerItens}>
          <View style={styles.produtosContainerAnel}>
            <Image style={styles.produtoEsquerda} source={require("../../assets/img/brincoM1.jpg")} />
            <View style={styles.cardItens}>
              <Text style={styles.titleProdutos}>Brinco cravejado</Text>
              <Text style={styles.valorPromoCard}>De: R$1.800 </Text>    
              <Text style={styles.valorCard}>Por: R$1.050 </Text>
            </View>
          </View>
          <View style={styles.produtosContainerColar}>
            <Image style={styles.produtoDireito} source={require("../../assets/img/brincoM2.webp")} />
            <View style={styles.cardItens}>
            <Text style={styles.titleProdutos}>Brinco esmeraldas</Text>
            <Text style={styles.valorPromoCard}>De: R$2.230 </Text>    
              <Text style={styles.valorCard}>Por: R$1.680 </Text>
            </View>
          </View>
        </View>
        <View style={styles.produtosContainerBrinco}>
          <View style={styles.produtosContainerAnel}>
            <Image style={styles.produtoEsquerda} source={require("../../assets/img/brincoM3.webp")} />
            <View style={styles.cardItens}>
            <Text style={styles.titleProdutos}>Brinco safiras azuis </Text>
            <Text style={styles.valorPromoCard}>De: R$1.999 </Text>    
              <Text style={styles.valorCard}>Por: R$1.400 </Text>
            </View>
          </View>
          <View style={styles.produtosContainerColar}>
            <Image style={styles.produtoDireito} source={require("../../assets/img/brincoM4.webp")} />
            <View style={styles.cardItens}>
            <Text style={styles.titleProdutos}>Brinco de flor </Text>
            <Text style={styles.valorPromoCard}>De: R$1.000 </Text>    
              <Text style={styles.valorCard}>Por: R$750 </Text>
            </View>
          </View>
        </View>
        <View style={styles.produtosContainerBrinco}>
          <View style={styles.produtosContainerAnel}>
            <Image style={styles.produtoEsquerda} source={require("../../assets/img/brincoM5.webp")} />
            <View style={styles.cardItens}>
            <Text style={styles.titleProdutos}>Brinco safiras azuis </Text>
            <Text style={styles.valorPromoCard}>De: R$1.999 </Text>    
              <Text style={styles.valorCard}>Por: R$1.400 </Text>
            </View>
          </View>
          <View style={styles.produtosContainerColar}>
            <Image style={styles.produtoDireito} source={require("../../assets/img/brincoM6.webp")} />
            <View style={styles.cardItens}>
            <Text style={styles.titleProdutos}>Brinco cravejado </Text>
            <Text style={styles.valorPromoCard}>De: R$2.050 </Text>    
              <Text style={styles.valorCard}>Por: R$1.890 </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};
