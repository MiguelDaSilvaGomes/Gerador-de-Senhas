import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, TextInput } from "react-native";
import { useState } from "react";
import {ModalPassword} from '../../componentes/modal'

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function Home(){
   const [size, setSize] = useState("")
   const [passwordValue, setPasswordValue] = useState("")
   const [modalVisivel, setModalVisivel] = useState(false)
   function GeradorSenha(){
    console.log("Senhaaaaa")
    let senha="";
    for(let i=0, n=charset.length; i<size;i++){
       senha += charset.charAt(Math.floor(Math.random() * n))
    }
    console.log(senha)
    if(size<=20 && size>5){
      setModalVisivel(true)
    }else{
      setModalVisivel(false)
    }
   setPasswordValue(senha)
   
   }
   console.log(size)
  return(
  <View style={styles.container}>
    <Image source={require("../../assets/logo.png")} style={styles.logo} />
    <Text style={{fontSize: 30, fontWeight: "bold"}}>Caracteres</Text>
    <View style={styles.area}>
      <TextInput style={{paddingLeft:10}}
        keyboardType='numeric'
        value={size.toString()}
        onChangeText={setSize}
        placeholder="Quantidade de caracteres de 6 a 20"
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
    marginTop: 20,
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
    justifyContent: "center",
    borderRadius: 8,
    marginTop: 20
    },
  buttonText:{
    color: "#FFF",
    fontSize: 20
  }
})