import { Text, View, StatusBar, Image, TouchableOpacity } from "react-native"
import styles from "../../assets/styles"


export const Carrinho: React.FC = () => {
    return (

        <View style={{ margin: StatusBar.currentHeight || 0 }}>

            <View style={{ alignItems: 'center' }}>
                <Image style={styles.imgLogoGeral} source={require("../../assets/img/logo-DD.png")} />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>


                <View style={styles.infoProdutoCarrinho}>
                    <Image style={styles.imgProdutosCarrinho} source={require("../../assets/img/brinco-de-coracao-partido.png")} />

                    <View >
                        <Text style={{ left: 35, fontSize: 18 }}>Nome do Produto</Text>

                        <View style={{ flexDirection: 'row', gap: 25, left: 60 }}>

                            <View>

                                <TouchableOpacity style={styles.btnCarrinho}>
                                    
                                    <Text style={{ fontSize: 30 }}>-</Text>
                                </TouchableOpacity>

                            </View>

                            <View>

                                <TouchableOpacity>
                                    <Text style={{ fontSize: 30 }}>1</Text>
                                </TouchableOpacity>

                            </View>

                            <View>

                                <TouchableOpacity>
                                    <Text style={{ fontSize: 30 }}>+</Text>
                                </TouchableOpacity>

                            </View>

                        </View>

                    </View>

                </View>
            </View>

        </View>

    )
}