import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.imageContainer}>
          <Image source={images[currentIndex].uri} style={styles.image} />
          <Text style={styles.description}>
            {images[currentIndex].description}
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={handlePrevious}>
            <Text style={styles.buttonText}>Anterior</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Siguiente</Text>
          </TouchableOpacity>
        </View>
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
  imageContainer: {
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    width: 100,
    alignItems: "center",
  },
  image: {
    width: 350,
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
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
