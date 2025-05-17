import styles from "../../assets/styles";
import { Text, TouchableOpacity, View } from "react-native";

interface BotaoAmarelo{
    BotaoAmarelo: string,
}

export const BotaoAmarelo: React.FC <BotaoAmarelo> = (props) => {
    return(

        <>
        
        <TouchableOpacity style={styles.botaoEntrar}>
          <Text style={styles.textoBotaoEntrar}>{props.BotaoAmarelo}</Text>
        </TouchableOpacity>

        </>
    )
}