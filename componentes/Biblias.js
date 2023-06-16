import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { getBiblies, getcapitulos } from "../servicios/services";

const ListBiblias = () => {
  const [listarBiblias, setListBiblias] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function fetchData() {
      const BibliasData = await getcapitulos();
      setListBiblias(BibliasData.data);
    }
    fetchData();
  }, []);

  return (
    <View style={styles.slide}>
      {listarBiblias.map((biblia) => (
        <Text key={biblia.id} style={styles.Text} resizeMode="cover">
          {biblia.name}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
    slide: { 

    }
})
export default ListBiblias; // Cambiado el nombre del componente al exportarlo
