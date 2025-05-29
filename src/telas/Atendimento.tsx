import { Text, View, StatusBar, Image, Linking } from "react-native";
import styles from "../../assets/styles";
import { BotaoAmarelo } from "../Components/BotaoAmarelo";

export const Atendimento: React.FC = () => {
  const identificarLink = async (url: string) => {
    const suportado = await Linking.canOpenURL(url);

    if (suportado) {
      await Linking.openURL(url);
    } else {
      console.log("nao e possivel abrir o link");
    }
  };

  return (
    <View style={{ marginTop: StatusBar.currentHeight || 0 }}>
      <View style={{ alignItems: "center" }}>
        <Image style={styles.imgLogoGeral} source={require("../../assets/img/logo-DD.png")} />
      </View>

      <View style={{ alignItems: "center", gap: 30 }}>
        <View>
          <Text style={{ fontSize: 30, textAlign: "center" }}>OLÁ</Text>
          <Text style={{ textAlign: "center", fontSize: 20, margin: 5 }}>
            Para realizar seu atendimento, sugerimos que você converse conosco através do nosso WhatsApp:
          </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image style={{ width: 60, height: 60, marginRight: 10 }} source={require("../../assets/img/whatsapp.png")} />
          <Text style={{ fontSize: 35, fontWeight: "bold" }}>(19) 97145-9922</Text>
        </View>

        <BotaoAmarelo BotaoAmarelo="Contate-nos" AutenticarUsuario={() => identificarLink("https://www.whatsapp.com/?lang=pt_BR")} />
      </View>
    </View>
  );
};
