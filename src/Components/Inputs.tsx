import styles from "../../assets/styles";
import { TextInput, Text } from "react-native";

interface Inputs {
    inputs: string
    inputInfos?: (param: string) => void,
    inputValor?: string
}


export const Inputs: React.FC<Inputs> = (props) => {
    return (
        <>

            <TextInput style={styles.inputs} onChangeText={props.inputInfos} value={props.inputValor}></TextInput>

        </>
    )
}