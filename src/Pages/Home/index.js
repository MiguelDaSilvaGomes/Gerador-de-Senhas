import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import Slider from "@react-native-community/slider";
import { useState } from "react";
import {ModalPassword} from '../../componentes/modal'

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function Home(){
   const [size, setSize] = useState(10)
   const [passwordValue, setPasswordValue] = useState("")
   const [modalVisivel, setModalVisivel] = useState(false)
   function GeradorSenha(){
    console.log("Senhaaaaa")
    let senha="";
    for(let i=0, n=charset.length; i<size;i++){
       senha += charset.charAt(Math.floor(Math.random() * n))
    }
    console.log(senha)

   setPasswordValue(senha)
   setModalVisivel(true)
   }
  return(
  <View style={styles.container}>
    <Image source={require("../../assets/logo.png")} style={styles.logo} />
    <Text style={{fontSize: 30, fontWeight: "bold"}}>{size} Caracteres</Text>
    <View style={styles.area}>
      <Slider style={{
        height: 50}}
        minimumValue={6}
        maximumValue={20}
        thumbTintColor="blue"
        maximumTrackTintColor="red"
        value={size}
        onValueChange={(e)=>setSize(e.toFixed(0))}
      />
    </View>

     <TouchableOpacity style={styles.button} onPress={GeradorSenha}>
      <Text style={styles.buttonText}>Gerar senha</Text>
    </TouchableOpacity>

<Modal visible={modalVisivel} animationType="fade" transparent={true}>
   <ModalPassword senha={passwordValue}  FechaModal={()=> setModalVisivel(false)}></ModalPassword>
</Modal>

  </View>
  )

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#F3F3FF",
    justifyContent: "center",
    alignItems: "center"
  },
  logo:{
    marginBottom: 60,

  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 8
  },
  button:{
    backgroundColor: "#392de9",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText:{
    color: "#FFF",
    fontSize: 20
  }
})