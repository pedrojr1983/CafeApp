import AsyncStorage from '@react-native-async-storage/async-storage';

// guarda os dados no storage do dispositivo dado o nome da chave
export const setData = async(kn, value)=>{    
    await AsyncStorage.setItem(kn, value);    
}

// pega os dados do storage do dispositivo dado o nome da sua chave
export const getData = async(kn)=>{    
    const v = await AsyncStorage.getItem(kn);    
    return v;
}

// limpa os dados do storage
export const clearData = async()=>{
    await AsyncStorage.clear(()=>{console.log('AsyncStorage limpo com sucesso')});
}

