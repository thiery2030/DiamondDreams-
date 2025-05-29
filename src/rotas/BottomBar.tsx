import { NavigationContainer } from "@react-navigation/native";
import { bottomTipos } from "../Tipos/BottomTipos";
import { BottomTabBar, BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../telas/Home";
import Icon from "@react-native-vector-icons/ionicons";
import { Image, Text, View } from "react-native";
import { Atendimento } from "../telas/Atendimento";
import { Perfil } from "../telas/Perfil";
import { Carrinho } from "../telas/Carrinho";

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
        name="Carrinho"
        component={Carrinho}
        options={{
          title: "Carrinho",

          tabBarIcon: ({ color }) => <Icon name="cart-outline" size={30} color={"black"} />,
        }}
      />
      <bottomBar.Screen
        name="Atendimento"
        component={Atendimento}
        options={{
          title: "Atendimento",

<<<<<<< HEAD
          <bottomBar.Screen  name="Carrinho" component={Carrinho} options={{
              title: 'Carrinho' 
              
              , tabBarIcon: ({color}) => (
                  <Icon name="cart-outline" size={30} color={"black"}/>
              )
          }} 
          />
          
=======
          tabBarIcon: ({ color }) => <Icon name="chatbubble-ellipses-outline" size={30} color={"black"} />,
        }}
      />
>>>>>>> 0b3dc6669edd89faf08841401949e9a49bddf03c

      <bottomBar.Screen
        name="Perfil"
        component={Perfil}
        options={{
          title: "Perfil",

<<<<<<< HEAD
            <bottomBar.Screen  name="Perfil" component={Perfil} options={{
                title: 'Perfil' 
                
                , tabBarIcon: ({color}) => (
                    <Icon name="person-circle-outline" size={30} color={"black"}/>
                )
            }} 
            />


        </bottomBar.Navigator>
    )
}
=======
          tabBarIcon: ({ color }) => <Icon name="person-circle-outline" size={30} color={"black"} />,
        }}
      />
    </bottomBar.Navigator>
  );
};
>>>>>>> 0b3dc6669edd89faf08841401949e9a49bddf03c
