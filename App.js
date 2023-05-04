import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TelaPrincipal from "./TelaPrincipal";
import TelaInclusao from './TelaInclusao';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Principal"
          component={TelaPrincipal}
          options={{title: 'Listagem de Produtos'}}
        />
        <Stack.Screen name="Inclusao" component={TelaInclusao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


