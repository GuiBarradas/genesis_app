import { Text, View, Button, FlatList } from 'react-native';
import { getProdutos } from './BaseDados';
import { styles } from './Estilos';

export default function TelaPrincipal({navigation}) {

  const incluir = () => {
      navigation.navigate("Inclusao");
  }

  return (
    <View style={styles.container}>
       <View>
           <Button title="Incluir Produto" onPress={()=>incluir()}/>
       </View>
       <FlatList
        data={getProdutos()}
        renderItem={({item}) => 
             <Text style={styles.item}>{item.codigo} :: {item.nome} 
                                       :: {item.quantidade}</Text>
          }
        keyExtractor={item => item.codigo}
      />
    </View>
  );
}


