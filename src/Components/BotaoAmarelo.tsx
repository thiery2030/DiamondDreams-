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
        
        <TouchableOpacity style={styles.botaoEntrar}>
          <Text style={styles.textoBotaoEntrar} onPress={props.AutenticarUsuario}>{props.BotaoAmarelo}</Text>
        </TouchableOpacity>

        </>
    )
}