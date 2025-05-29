import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdfaf3",
  },
  imgLogoFundo: {
    width: 410,
    height: 420,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
    borderColor: "#e8c986",
    borderWidth: 5,
    position: "absolute",
    top: -10, //para esconder a cor da borda
  },

  imgLogo: {
    width: 350,
    height: 350,
  },

  imgLogoGeral: {
    width: 250,
    height: 250,
  },

  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  inputs: {
    width: 300,
    height: 50,
    borderRadius: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },

  InfoInput: {
    fontSize: 15,
    color: "#2e1504",
    marginTop: 20,
    fontWeight: 400,
    paddingRight: 255,
  },

  botaoEntrar: {
    width: 300,
    height: 45,
    borderRadius: 6,
    backgroundColor: "#e8c986",
    justifyContent: "center",
    alignItems: "center",
  },

  botaoCadastrese: {
    width: 300,
    height: 45,
    borderRadius: 6,
    backgroundColor: "#411d06",
    justifyContent: "center",
    alignItems: "center",
  },

  textoBotaoEntrar: {
    fontSize: 20,
    color: "white",
    fontWeight: 700,
  },

  textoBotaoCadastrese: {
    fontSize: 20,
    color: "white",
    fontWeight: 700,
  },

  erroMessage: {
    color: "red",
    margin: 5,
  },

  inputGeralContainer: {
    alignItems: "center",
    marginTop: 55,
  },

  inputGeralContainerPerfil: {
    alignItems: "center",
  },

  botaoContainer: {
    alignItems: "center",
    gap: 10,
    top: 25,
  },
  base: {
    alignItems: "center",
  },
  logoContainerInicio: {
    alignItems: "center",
  },
  imgLogoinicio: {
    width: 410,
    height: 370,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderColor: "#e8c986",
    borderWidth: 3,
  },
  imgDDInicio: {
    width: 350,
    height: 350,
    position: "absolute",
    top: 25,
  },
  containerLoja: {
    alignItems: "center",
    gap: 10,
    marginTop: 20,
  },
  imgLoja: {
    width: 330,
    height: 130,
    borderColor: "#411d06",
    borderWidth: 1,
  },
  textoContainer: {
    alignItems: "center",
    textAlign: "center",
    width: 340,
  },
  titulo: {
    fontSize: 29,
    color: "#411d06",
    fontWeight: 400,
    marginTop: 10,
  },
  contexto: {
    fontSize: 16,
    color: "#411d06",
    fontWeight: 400,
    gap: 100,
  },
  mulheresContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  imgMulheres: {
    height: 320,
    resizeMode: "cover",
  },
  textMulheres: {
    position: "absolute",
    bottom: 10,
    left: 130,
    color: "white",
    fontSize: 30,
    fontWeight: "800",
  },

  produtosContainerBrinco: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 20,
  },

  produtosContainerAnel: {
    alignItems: "center",
  },
  aneisMulher: {
    width: 190,
    height: 210,
    borderRadius: 7,
  },
  textAneis: {
    position: "absolute",
    bottom: 10,
    left: 10,
    color: "white",
    fontSize: 25,
    fontWeight: "700",
  },

  produtosContainerColar: {
    alignItems: "center",
  },
  colarMulher: {
    width: 190,
    height: 210,
    borderRadius: 7,
  },
  textColar: {
    position: "absolute",
    bottom: 10,
    left: 10,
    color: "white",
    fontSize: 25,
    fontWeight: "700",
  },

  textHomens: {
    position: "absolute",
    bottom: 10,
    left: 35,
    color: "white",
    fontSize: 30,
    fontWeight: "800",
  },
  containerCarrinho: {
    alignSelf: "flex-end",
    paddingRight: 20,
  },
  carrinhoCard: {
    width: 220,
    height: 150,
    borderRadius: 5,
    backgroundColor: "white",
  },
  produtosContainerItens: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: -20,
  },
    produtoDireito: {
    width: 180,
    height: 150,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
     backgroundColor: "white",
  },
   produtoEsquerda: {
    width: 180,
    height: 150,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
     backgroundColor: "white",
    
  },
  cardItens: {
    width: 180,
    height: 100,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    backgroundColor: "#fdfaf3",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  titleProdutos: {
    fontSize: 17,
    color: "#2E1504",
    fontWeight: "700",
    textAlign: "center",
  },
  valorPromoCard: {
    fontSize: 15,
    color: "#2E1504",
    fontWeight: "400",
    textAlign: "justify",
    marginLeft: 15,
    marginTop: 5,
    textDecorationLine: "line-through"
  },
   valorCard: {
    fontSize: 16,
    color: "#2E1504",
    fontWeight: "700",
    textAlign: "justify",
    marginLeft: 15,
    marginTop: 5,
  },
  
});
export default styles;
