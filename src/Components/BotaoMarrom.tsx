import styles from "../../assets/css/styles";
import { Text, TouchableOpacity, View } from "react-native";

interface BotaoMarrom {
    BotaoMarrom: string,
}

export const BotaoMarrom: React.FC <BotaoMarrom> = (props) => {
    return (

        <TouchableOpacity style={styles.botaoCadastrese}>
            <Text style={styles.textoBotaoCadastrese}>{props.BotaoMarrom}</Text>
        </TouchableOpacity>
    )
}