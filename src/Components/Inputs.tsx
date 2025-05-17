import styles from "../../assets/styles";
import { TextInput, Text } from "react-native";

interface Inputs {
    inputs: string
}


export const Inputs: React.FC <Inputs> = (props) => {
    return (
        <>

            <TextInput style={styles.inputs}>{props.inputs}</TextInput>

        </>
    )
}