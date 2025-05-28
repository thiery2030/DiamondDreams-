import { Text, View, StatusBar, Image } from "react-native";
import styles from "../../assets/styles";
import { Inputs } from "../Components/Inputs";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { autenticacao } from "../FirebaseConexao";
import { BotaoAmarelo } from "../Components/BotaoAmarelo";

export const Carrinho: React.FC = () => {
  async function signout() {
    signOut(autenticacao);
  }

  return (
    <View style={{ marginTop: StatusBar.currentHeight || 0 }}>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Image style={styles.imgLogoGeral} source={require("../../assets/img/logo-DD.png")} />
          <View style={styles.containerCarrinho}>
            <View style={styles.carrinhoCard}></View>
          </View>
        </View>
      </View>
    </View>
  );
};
