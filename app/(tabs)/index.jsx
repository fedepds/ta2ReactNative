import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const images = [
  {
    id: "Cachorro",
    uri: require("../../assets/images/perro1.jpg"),
    description: "Perro cachorro",
  },
  {
    id: "Coco",
    uri: require("../../assets/images/perro2.jpg"),
    description: "Coco perro simpatico",
  },
  {
    id: "Candy",
    uri: require("../../assets/images/perro3.jpg"),
    description: "Perro dulce",
  },
];

export default function Ta2() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={images}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <Image source={item.uri} style={styles.image} />
              <Text style={styles.description}>{item.description}</Text>
            </View>
          )}
          horizontal={true} // Muestra las imágenes en una fila horizontal 
          snapToAlignment="center" // Centra la imagen actual en la pantalla al detenerse el desplazamiento
          snapToInterval={width} // Ancho de la pantalla para que el desplazamiento salte una imagen completa a la vez
          showsHorizontalScrollIndicator={false} // Oculta la barra de desplazamiento horizontal en la parte inferior
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  flatListContainer: {
    alignItems: "center",
  },
  imageContainer: {
    width: width, // Ancho de cada foto
    alignItems: "center",
  },
  image: {
    width: width * 0.9, // Ajusta el ancho de la imagen para ocupar el 90% del ancho de la pantalla
    height: 350,
    borderRadius: 10,
  },
  description: {
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
});
