import styles from "../../assets/styles";
import { Text, TouchableOpacity, View } from "react-native";
import { autenticacao } from "../FirebaseConexao";

interface BotaoAmarelo{
    BotaoAmarelo: string,
    AutenticarUsuario?: () => void
}

export const BotaoAmarelo: React.FC <BotaoAmarelo> = (props) => {
    return(
        <>
        <TouchableOpacity style={styles.botaoEntrar} onPress={props.AutenticarUsuario}>
        
          <Text style={styles.textoBotaoEntrar}>{props.BotaoAmarelo}</Text>
        </TouchableOpacity>
        </>
    )
}