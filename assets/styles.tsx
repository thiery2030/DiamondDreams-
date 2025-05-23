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
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  nome: {
    fontSize: 15,
    color: "#2e1504",
    marginTop: 20,
    fontWeight: 400,
    paddingRight: 255,
  },

  inputContainer: {
    width: 300,
    height: 50,
    borderRadius: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    justifyContent: "center",
  },

  email: {
    fontSize: 15,
    color: "#2e1504",
    marginTop: 20,
    fontWeight: 400,
    paddingRight: 255,
  },

  senha: {
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
  textoBotaoEntrar: {
    fontSize: 20,
    color: "white",
    fontWeight: 700,
  },
  botaoCadastrese: {
    width: 300,
    height: 45,
    borderRadius: 6,
    backgroundColor: "#411d06",
    justifyContent: "center",
    alignItems: "center",
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
  imgLoja1: {
    width: 330,
    height: 130,
    borderColor: "#411d06",
    borderWidth: 1,
  },
  imgLoja2: {
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
  },
});
export default styles;
