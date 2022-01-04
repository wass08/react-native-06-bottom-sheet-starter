import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

import { tailwind } from "tailwind";
import { Button } from "~/components/Button";
import { SizePicker } from "~/components/SizePicker";

interface ProductProps {}

export const Product: React.FunctionComponent<ProductProps> = ({}) => {
  const buttonPressed = () => {
    console.log("Button pressed");
  };

  const [currentSize, setCurrentSize] = useState("38");

  return (
    <ScrollView style={tailwind("w-full h-full")}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
        }}
        resizeMode="cover"
        style={tailwind("rounded w-full h-64")}
      />
      <View style={tailwind("p-5")}>
        <Text style={tailwind("font-bold text-xl tracking-wide uppercase")}>
          Chaussure Nike Running
        </Text>
        <View style={tailwind("flex flex-row items-center mt-3")}>
          <Text style={tailwind("text-xs text-black font-bold tracking-wide")}>
            80,00 €
          </Text>
          <Text style={tailwind("text-xs text-gray-500 ml-5 tracking-wide")}>
            ORIGINALS
          </Text>
        </View>
        <View style={tailwind("h-px bg-gray-200 my-6")} />
        <Text style={tailwind("text-sm text-black font-bold tracking-wide")}>
          Taille
        </Text>
        <Text style={tailwind("text-xs text-gray-500 uppercase tracking-wide")}>
          Commandez au moins 1 taille au-dessus de votre taille habituelle
        </Text>
        <View style={tailwind("h-3")} />
        <SizePicker
          sizes={["36", "37", "38", "39 1/3", "39 2/3", "40", "42", "43", "45"]}
          currentSize={currentSize}
          onSizeChange={setCurrentSize}
        />
        <View style={tailwind("h-px bg-gray-200 mb-6")} />
        <Button onPress={() => console.log("TODO")} type="secondary">
          Ajouter un lettrage
        </Button>
        <View style={tailwind("h-3")} />
        <Button onPress={buttonPressed} type="secondary">
          Ajouter au panier
        </Button>
        <View style={tailwind("h-3")} />
        <Button onPress={buttonPressed} type="primary">
          Acheter
        </Button>
        <View style={tailwind("h-px bg-gray-200 my-8")} />
        <Text style={tailwind("uppercase text-sm tracking-wide text-center")}>
          Venez l'essayer dans une de{" "}
          <Text style={tailwind("underline")}>nos boutiques</Text>
        </Text>
        <Image
          style={tailwind("w-full h-64 rounded-lg mt-3")}
          source={{
            uri: "https://images.unsplash.com/photo-1628413993904-94ecb60f1239?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80",
          }}
        />
        <Text
          style={tailwind("mt-8 text-center uppercase text-xs tracking-wide")}
        >
          Wawa Sensei © 2022
        </Text>
      </View>
    </ScrollView>
  );
};
