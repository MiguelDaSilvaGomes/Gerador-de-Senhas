import { StyleSheet, View, Text, Pressable, TouchableOpacity   } from "react-native";
import * as Clipboard from 'expo-clipboard'
import useStorage from "../../hooks/useStorage";
export function ModalPassword({senha, FechaModal}){
  const {saveItem} = useStorage();

   
  async function CopiarSenha(){
    await Clipboard.setStringAsync(senha)
    await saveItem("@pass", senha);

    FechaModal();
  }
  return(
    <View style={styles.container}> 
      <View style={styles.content}>
        <Text style={styles.titulo}> Senha Gerada: </Text>
        <Pressable style={styles.innerSenha} onLongPress={CopiarSenha}>
           <Text style={styles.texto} >{senha}</Text>
        </Pressable>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.voltar} onPress={FechaModal}>
            <Text style={styles.textoFechar}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Salvar} onPress={CopiarSenha}>
            <Text style={styles.textoSalvarSenha}>Salvar senha</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
   )
   }
   const styles = StyleSheet.create({
    container:{
      backgroundColor: "rgba(24, 24, 24, 0.6)", 
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    content:{
      backgroundColor: "#FFF",
      width: "85%",
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 24,
      paddingTop: 24,
      borderRadius: 8 
    },
    titulo:{
      fontSize: 20,
      fontWeight: "bold",
      color: "#000",
      marginBottom: 24  
    },
    innerSenha:{
      backgroundColor: "black",
      width: "80%",
      height: "20%",
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20
    },
    texto:{
      color:"#FFF",
      fontSize: 20
    },
    buttons:{
      flexDirection: "row", 
      padding: 5
    },
    voltar:{
      fontSize: 20,
      fontWeight: "bold",
      padding: 10,
      paddingRight: 20,
      paddingLeft: 20
    },
    Salvar:{
      fontSize: 20,
      fontWeight: "bold",
      padding: 10,
      backgroundColor: "#392DE9",
      borderRadius: 8,
      paddingRight: 20,
      paddingLeft: 20
    },
    textoSalvarSenha:{
      color: "#FFF",
      fontSize: 15,
      fontWeight: "bold",
    },
    textoFechar:{
      fontSize: 15,
      fontWeight: "bold",
    }
   })
   
