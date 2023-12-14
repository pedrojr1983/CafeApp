import Global, { URI_API_KEY } from "../Global"
import { getData } from "../services/LocalStoregeService"
import { POST } from "../services/axiosService";

export default HomeController = async(cb)=>{
    var count = 0;
        // pega url base do localstorege
        var url = await getData(URI_API_KEY);
        console.log('URL BASE: ', url);
        var uri = `${url}/dtv/remote-device`;
        
        // se o dispositivo ainda não foi registrado
        if(Global.DEVICE==null){
            var body = {
                deviceClass:"app-mobile",
                supportedFormats:["a","b","c"],
                recognizableEvents:["play", "stop", "next", "back"]
            };
            
            cb('carregando o dispositivo...');
            
            // realiza a requisição post para registro do dispositivo
            var response = await POST(uri, body);  
                        
            Global.DEVICE = response.data;
            console.log('response: ', Global.DEVICE);
            
            if(Global.DEVICE !=null){
                cb(`Dispositivo:  ${Global.DEVICE.handle} registrado com sucesso`);            
            }else{
                cb('não foi possível registrar o dispositivo');
            }    
        }
        console.log('response: ', Global.DEVICE);
        return true;   
}

