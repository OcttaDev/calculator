import React from "react-native";

import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import ResultImc from "../ResultImc";
import { useState } from "react";

function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");

  function imcCalculator() {
    return setImc((weight / (height * height)).toFixed(2));
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu imc é igual a: ");
      setTextButton("Calcular novamente");
      return;
    }
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha o peso e altura");
  }

  const style = StyleSheet.create({
    container: {
      width: 500,
      height: 300,
      gap: 20,
      alignItems: "center",
      margin: "auto",
    },
    inputArea: {
      gap: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold"
    },
    inputs: {
      width: 300,
      height: 40,
      borderRadius: 10,
    },
     
  });

  return (
    <View style={style.container}>
      <View style={style.inputArea}>
        <Text style={style.title}>Altura</Text>
        <TextInput
          style={style.inputs}
          onChangeText={setHeight}
          value={height}
          placeholder="ex: 1.50"
          keyboardType="numeric"
        />

        <Text style={style.title}>Peso</Text>
        <TextInput
          style={style.inputs}
          onChangeText={setWeight}
          value={weight}
          placeholder="ex: 1,50"
          keyboardType="numeric"
        />
        <Button onPress={() => validationImc()} title={textButton} style={{backgroundColor: "blue"}}/>
      </View>
      <View style={style.result}>
        <ResultImc message={messageImc} result={imc} />
      </View>
    </View>
  );
}
export default Form;
