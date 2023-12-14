import axios from 'react-native-axios'

/**
 * realiza uma requisição get assync
 * @param {*} uri 
 * @returns 
 */
export const GET=async(uri)=>{
    return axios.get(uri);
}


// POST: realiza um post async na api
export const POST = async(uri, data, config)=>{
    console.log(`Enviando os dados para: ${uri}`);
    console.log('body:');
    console.log(JSON.stringify(data));
    if(config == null){
        config = {
            headers: {
                "Content-Type": "application/json",
            },
        }
    }
    return axios.post(uri, data, config);
}

// teste de carregamento
export const TesteTimeOut = async(delay)=>{
    return new Promise( res => setTimeout(res, delay), rej=>{ console.log(rej)});
}