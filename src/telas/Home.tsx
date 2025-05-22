import { Text, View } from "react-native"
import { StatusBar } from "react-native"
import styles from "../../assets/styles"
import { autenticacao } from "../FirebaseConexao"
import { getAuth, signOut, validatePassword } from "firebase/auth"
import firebase from "firebase/compat/app"
import { BotaoAmarelo } from "../Components/BotaoAmarelo"


export const Home: React.FC = () => {
   
    async function signout(){
        signOut(autenticacao)
    }

    return(
        <View style={{margin:StatusBar.currentHeight || 0}}>
            <Text>TelaInicial</Text>

            <BotaoAmarelo BotaoAmarelo="desconectar" AutenticarUsuario={() => signout()}/>

        </View>
        
    )
}