import styles from "../../assets/styles";
import { Text, TouchableOpacity, View } from "react-native";

interface BotaoMarrom {
    BotaoMarrom: string,
    Validacao: () => void,
}

export const BotaoMarrom: React.FC <BotaoMarrom> = (props) => {
    return (

        <TouchableOpacity style={styles.botaoCadastrese}>
            <Text style={styles.textoBotaoCadastrese}>{props.BotaoMarrom}</Text>
        </TouchableOpacity>
    )
}