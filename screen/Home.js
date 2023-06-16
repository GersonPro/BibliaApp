import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native';
import ListBiblias from '../componentes/Biblias';
import VersoDia from '../componentes/VersoDia';
const Home = () => { 
    return (
        <View style={styles.container}>
           <ScrollView>
            <VersoDia/>
           </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f6f6f6',
      justifyContent: 'center',
      color: "#000",
      
    },
  });

  export default Home