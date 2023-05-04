import { View, Button, TextInput, Text } from 'react-native';
import { addProduto } from './BaseDados';
import { styles } from './Estilos';
import { useState } from 'react';

export default function TelaInclusao({navigation}) {

  const [codigo, setCodigo] = useState(0);
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState(0);

  const salvar = () => {
      addProduto({codigo: codigo, nome: nome, quantidade: quantidade });
      navigation.navigate("Principal");
  }
  
  return (
    <View style={styles.container}>
        <Text>Codigo</Text>
        <TextInput
        style={styles.input}
        onChangeText={setCodigo}
        value={codigo}
        placeholder="Codigo do Produto"
        keyboardType="numeric"
        />
        <Text>Nome</Text>
        <TextInput
        style={styles.input}
        onChangeText={setNome}
        value={nome}
        placeholder="Nome do Produto"
        />
        <Text>Quantidade</Text>
        <TextInput
        style={styles.input}
        onChangeText={setQuantidade}
        value={quantidade}
        placeholder="Quantidade"
        keyboardType="numeric"
        />
       <View>
           <Button title="Salvar" onPress={()=>salvar()}/>
       </View>
    </View>
  );
}
