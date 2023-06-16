import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Font } from 'expo-font';

async function loadFonts() {
  await Font.loadAsync({
    'MarkoOne-Regular': require('../assets/fonts/MarkoOne-Regular.ttf'),
  });
}

loadFonts();

const VersoDia = () => {
  return (
    <View style={Styles.content}>
      <View style={Styles.vista}>
        <Text style={Styles.text}>Versiculo</Text>
        <LinearGradient
          colors={["rgba(66, 126, 181, 0.5)", "#427EB5", "#5AFF7E"]}
          style={Styles.overlay}
          start={[0, 0]}
          end={[1, 1]}
        />
        <Image
          style={[Styles.img, { opacity: 0.2 }]}
          source={require('../assets/biblia.jpeg')}
        />
      </View>
      <View>
        <LinearGradient
          colors={["#427EB5", "#7470FD"]}
          start={[0, 0]}
          end={[1, 1]}
          style={Styles.gradientButton}
        >
        
          <Button
            onPress={() => {}}
            title="Learn More"
            color="transparent"
            accessibilityLabel="Learn more about this purple button"
          />
        </LinearGradient>
        <LinearGradient
          colors={["#BB5A5A", "#BB950C"]}
          start={[0, 0]}
          end={[1, 1]}
          style={Styles.gradientButton}
        >
          <Button
            onPress={() => {}}
            title="Learn More"
            color="transparent"
            accessibilityLabel="Learn more about this purple button"
          />
        </LinearGradient>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  img: {
    height: 218,
    width: "100%",
    borderRadius: 20,
  },
  content: {
    alignItems: 'center',
  },
  vista: {
    height: 218,
    width: "90%",
    borderRadius: 20,
    marginTop: 20,
    overflow: 'hidden',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(66, 126, 181, 0.5)",
    backgroundImage: "linear-gradient(90deg, #427EB5, #5AFF7E)",
  },
  overlayB: {
    
  },

  text: {
    position: "absolute",
    zIndex: 2,
    color: "#fff",
    fontFamily: "MarkoOne-Regular",
    fontSize: 20,
    marginTop: "25%",
  },
  gradientButton: {
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 10,
  },
});

export default VersoDia;
