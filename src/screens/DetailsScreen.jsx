import { Image, Text, View } from "react-native"
import { styles } from "../styles/Theme"
import { useEffect, useState } from "react"
import { Snackbar } from "react-native-paper";
import Global, { midias } from "../Global";
import userEntity from "../domain/userEntity";
import eventEntity from "../domain/eventEntity";
import VideoPlayer from "../components/videoPlayer";
import ImageView from "../components/imageView";

export default DetailsScreen = (props)=>{
    const[snackVisible, setSnackVisible] = useState(false);
    const[titlePage, setTitlePage] = useState("CAFÉ PLAYER");
    const[snackMsg, setSnackMsg] = useState('');
    const[msgUI, setMsgUI] = useState('');
   
    var ws = new WebSocket(Global.DEVICE.url);

    // ao abrir a conexão
    ws.onopen =()=>{
        console.log(`conexão websocket em ${Global.DEVICE.url} realizada com sucesso.`);
        
        // envia o usuário do app
        console.log('enviando o usuário: ', userEntity);
        ws.send(JSON.stringify(userEntity));            
    };

    // ao receber mensagens
    ws.onmessage = (response)=>{
        console.log('response ws: ', response.data);
        if(response.data !=null){
            midia = JSON.parse(response.data);
            if(midia.type=="video/mpeg"){
                Global.midias.videos.push(midia);
            }else if(midia.type=="image/jpeg"){
                Global.midias.images.push(midia);           
            }               
        }
    };
    
    // se houver erro
    ws.onerror = (err)=>{
        console.log(err);
    };    

    const startButton_click = (e)=>{
        if(ws!==null){
            // envia o evento
            console.log('enviando o envento: ', eventEntity); 
            ws.send(JSON.stringify(eventEntity));    
        }else{
            console.log('ws is null');
        }
        console.log('start button on clicked');
    }

    // monitor de mudanças
    useEffect(()=>{
        try {
            if(Global.DEVICE!==null){
                setTitlePage(`Bem-vindo(a) ${userEntity.name}`);
                //setMsgUI(`Bem-vindo(a) ${userEntity.name}`);
                //handlePlay_event();
            }else{
                setMsgUI('Dispositivo não registrado');
            }            
        }catch(error){
            console.log(error);
        }finally{
            console.log('page: DetailsScreen carregada');
        }        
    },[]);

    return(
        <View style={styles.mainContainer}> 
            <View style={styles.headerContainer}>
                <Text style={styles.title1}>{titlePage}</Text>
            </View>
            {/* <View style={styles.playerContainer}>
                <Text style={styles.h2_CWhite}>{msgUI}</Text>
                <Button title="Vamos iniciar?" style={styles.mtop20} onPress={startButton_click} />
            </View> */}

            <VideoPlayer source={null}/>
            <ImageView source={null}/>
            <Snackbar
                visible={snackVisible}
                onDismiss={()=>{setSnackVisible(false)}}
                action={{ label: 'Dispensar' }}>
                {snackMsg}
            </Snackbar>         
        </View>
    )
}