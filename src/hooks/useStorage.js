import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = ()=>{
   //Buscar os itens salvos
   const getItem = async (key)=>{
     try{
       const senhas = await AsyncStorage.getItem(key)
       return JSON.parse(senhas) || []; 
     }catch(error){
        console.log("Error ao buscar", error);
        return [];
     }
   }

   //Salvar um item no storage
   const saveItem = async (key, value)=>{
       try{
          let senhas = await getItem(key);
          senhas.push(value)

          await AsyncStorage.setItem(key, JSON.stringify(senhas))

       }catch(error){
        console.log("Error ao Salvar", error);
        return [];
     }
   }
   //remover algo do Storage
   const removeItem = async (key, item)=>{
     try{
      let senhas = await getItem(key);

      let minhasSenhas = senhas.filter((senhas)=>{
         return(senhas !== item)
      })
       await AsyncStorage.setItem(key, JSON.stringify(minhasSenhas))
       return minhasSenhas;
     }catch(error){
         console.log("ERROR AO DELETAR ", error)
     }
   }
   return{
      getItem,
      saveItem,
      removeItem,
   }
}


export default useStorage;