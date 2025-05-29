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

  imgProdutosCarrinho: {

  },

  infoProdutoCarrinho: {
    flexDirection: 'row',
    width: 370,
    height: 158,
    borderRadius: 5,
    backgroundColor: '#FDFAF3',
    right: 23,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,


  },

  btnCarrinho: {
    width: 10,
    height: 30,
    backgroundColor: 'red'
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
    color: 'red',
    margin: 5,
  },

  inputGeralContainer: {
    alignItems: "center",
    marginTop: 55,
  },

  inputGeralContainerPerfil: {
    alignItems: 'center',

  },

  botaoContainer: {
    alignItems: 'center',
    gap: 10,
    top: 25,
  },

});
export default styles;
