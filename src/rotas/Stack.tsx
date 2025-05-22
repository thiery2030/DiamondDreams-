import { NavigationContainer } from "@react-navigation/native";
import { StackTipos } from "../Tipos/StackTipos";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Login } from "../telas/Login";
import { HomeScreen } from "../telas/HomeScreen";
import { onAuthStateChanged } from "firebase/auth";
import { autenticacao } from "../FirebaseConexao";


export type stackProp = NativeStackNavigationProp<StackTipos>

const stackNav = createNativeStackNavigator<StackTipos>()

export const Stack: React.FC = () => {

    onAuthStateChanged(autenticacao, (user) => {
        if (user){
            setVerify(1);
        }else{
            setVerify(0);
        }
    })

    const [verifyUser, setVerify] = useState(0)

    return (

        <NavigationContainer>
            <stackNav.Navigator  screenOptions={{ headerShown: false }}>
                {verifyUser == 0 ? (

                    <stackNav.Screen name="Autenticacao" component={Login} />
                ) :

                    <stackNav.Screen name="Home" component={HomeScreen} />

                }
            </stackNav.Navigator>

        </NavigationContainer>

        

    )
}