import { NavigationContainer } from "@react-navigation/native";
import { bottomTipos } from "../Tipos/BottomTipos";
import { BottomTabBar, BottomTabNavigationProp, createBottomTabNavigator, } from "@react-navigation/bottom-tabs";
import { Home } from "../telas/Home";
import Icon from "@react-native-vector-icons/ionicons";
import { Image, Text, View } from "react-native";

export type bottomBar = BottomTabNavigationProp<bottomTipos>

const bottomBar = createBottomTabNavigator<bottomTipos>()

export const Menu: React.FC = () => {
    return(
        <bottomBar.Navigator screenOptions={{headerShown: false}}>

            <bottomBar.Screen  name="HomeBottom" component={Home} options={{
                title: 'Inicio' 
                
                , tabBarIcon: ({color}) => (
                    <Icon name="home" size={30} color={"black"}/>
                )
            }} 
            />

        </bottomBar.Navigator>
    )
}