import {Text, StyleSheet, Pressable, TouchableOpacity, View } from 'react-native';
import * as Clipboard from 'expo-clipboard'

export function ItemSenha({data, removerSenha}){

async function Copiar(){
    await Clipboard.setStringAsync(data)

}

    return(
  <View style={styles.div}>
        <Pressable onLongPress={removerSenha} style={styles.container}>
            <Text style={styles.text}>{data}</Text>
        </Pressable>
        <TouchableOpacity  onPress={Copiar} style={styles.buttonCopy}><Text style={styles.textButton}>Copiar</Text></TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: "#0e0e0e",
        padding: 14,
        width: "80%",
        marginBottom: 14,
        borderTopRightRadius: 0,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text:{
        color: "#FFF"
    },
    div:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonCopy:{
        backgroundColor: '#392de9',
        justifyContent: 'center',
        paddingLeft: 5,
        width: "20%",
        borderRadius: 8,
        borderTopLeftRadius: 0 ,
        paddingBottom: 14,
        paddingTop: 14,
        marginBottom: 8.5
    },
    textButton:{
       color: 'white',
       fontSize: 18,
       fontWeight: 'bold'
    }
})