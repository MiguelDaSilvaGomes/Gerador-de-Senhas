import { View, Text, StyleSheet, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useIsFocused } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import useStorage from '../../hooks/useStorage'
import {ItemSenha} from './Components/ItemSenhas'

export function Senhas(){

const [listaSenha, setListaSenha] = useState([]);
const focused = useIsFocused(); // focado nesta tela
const {getItem, removeItem} = useStorage(); 

useEffect(()=>{
    async function CarregandoSenhas(){
      const Senhas = await getItem("@pass")
      console.log(Senhas);
      setListaSenha(Senhas);    
    }
    CarregandoSenhas();
}, [focused])
   async function DeletarSenha(item){
     let novasSenhas = await removeItem("@pass", item)
     setListaSenha(novasSenhas);
   }
    return(
        <SafeAreaView style={{flex: 1}}>
        <View style={styles.header}>
           <Text style={styles.title}>Minhas senhas</Text> 
        </View>
        <View style={styles.content}>
            <FlatList
            style={{ flex: 1, paddingTop: 14}}
            data={listaSenha}
            keyExtractor={(item)=>String(item)}
            renderItem={({item})=><ItemSenha data={item} removerSenha={()=>DeletarSenha(item)}/>}
            />
        </View>
   </SafeAreaView>
    )

}

 const styles = StyleSheet.create({
    header:{
        backgroundColor: "#392de9",
        paddingTop: 30,
        paddingBottom: 14,
        paddingRight: 14,
        paddingLeft: 14
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        color: "#FFF"
    },
    content:{
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14
    }
 })