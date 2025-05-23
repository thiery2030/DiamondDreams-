import { Text, View, StatusBar } from "react-native"
import styles from "../../assets/styles"
import { Inputs } from "../Components/Inputs"
import { useState } from "react"
import { signOut } from "firebase/auth"
import { autenticacao } from "../FirebaseConexao"
import { BotaoAmarelo } from "../Components/BotaoAmarelo"

export const Perfil: React.FC = () => {

    async function signout() {
        signOut(autenticacao)
    }

    return (
        <View style={{ marginTop: StatusBar.currentHeight || 0 }}>

            <View style={{ alignItems: 'center' }}>


                <View style={{ width: 200, height: 200, borderRadius: '100%', backgroundColor: 'black', margin: 40 }}></View>

                <Text style={{ fontSize: 30 }}>Nome</Text>


            </View>

            <View style={styles.inputGeralContainerPerfil}>

                <View style={{ gap: 10 }}>

                    <View>
                        <Text style={styles.InfoInput}>E-mail</Text>
                        <View>
                            <Inputs inputs="" />
                        </View>
                    </View>

                    <View>
                        <Text style={styles.InfoInput}>Senha</Text>
                        <View>
                            <Inputs inputs="" />
                        </View>
                    </View>

                    <View>
                        <Text style={styles.InfoInput}>Cpf</Text>
                        <View>
                            <Inputs inputs="" />
                        </View>
                    </View>


                </View>

                <View style={{margin: 30}}>

                    <BotaoAmarelo BotaoAmarelo="Desconectar" AutenticarUsuario={() => signout()} />

                </View>

            </View>



        </View>
    )
}