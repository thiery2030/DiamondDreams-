import { NavigationContainer } from "@react-navigation/native";
import { bottomTipos } from "../Tipos/BottomTipos";
import { BottomTabBar, BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../telas/Home";
import Icon from "@react-native-vector-icons/ionicons";
import { Image, Text, View } from "react-native";
import { Atendimento } from "../telas/Atendimento";
import { Perfil } from "../telas/Perfil";
import { Produtos } from "../telas/Produtos";

export type bottomBar = BottomTabNavigationProp<bottomTipos>;
const bottomBar = createBottomTabNavigator<bottomTipos>();

export const Menu: React.FC = () => {
  return (
    <bottomBar.Navigator screenOptions={{ headerShown: false, tabBarLabelStyle: { color: "black" } }}>
      <bottomBar.Screen
        name="HomeBottom"
        component={Home}
        options={{
          title: "Inicio",
          tabBarIcon: () => <Icon name="home-outline" size={30} color={"black"} />,
        }}
      />
      
      <bottomBar.Screen
        name="Atendimento"
        component={Atendimento}
        options={{
          title: "Atendimento",

          tabBarIcon: ({ color }) => <Icon name="chatbubble-ellipses-outline" size={30} color={"black"} />,
        }}
      />

      <bottomBar.Screen
        name="Perfil"
        component={Perfil}
        options={{
          title: "Perfil",

          tabBarIcon: ({ color }) => <Icon name="person-circle-outline" size={30} color={"black"} />,
        }}
      />

        <bottomBar.Screen
        name="Produtos"
        component={Produtos}
        options={{
          title: "Produtos",

          tabBarIcon: ({ color }) => <Icon name="person-circle-outline" size={30} color={"black"} />,
        }}
      />
    </bottomBar.Navigator>
  );
};
