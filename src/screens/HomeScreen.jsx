import { useEffect, useState } from "react"
import { Text, View } from "react-native"
import Theme, { styles } from "../styles/Theme"
import HomeController from "../controllers/HomeController";
import { ActivityIndicator, Snackbar } from "react-native-paper";
import Global from "../Global";
import { Button, Stack } from "@react-native-material/core";

export default HomeScreen = (props)=>{
    const[snackVisible, setSnackVisible] = useState(false);
    const[snackMsg, setSnackMsg] = useState("");
    const[msgUI, setMsgUI] = useState("Carregando...");
    const[reloaded, setReloaded] = useState(true);
    const[titleButton, setTitleButton] = useState('Me registrar');

    // após carregar a pagina
    const loadPage = async()=>{
        try {
            console.log('carregando página');
            var result = await HomeController(notifyUI);
            if(result){
                notifyUI('Dispositivo registado');
                setMsgUI(`Dispositivo: ${Global.DEVICE.handle}`);
                setTitleButton('Renovar registro');
            }else{
                notifyUI('Não foi possível registar o dispositivo');
                setMsgUI(`Dispositivo: não registrado`);
            }    
        } catch (error) {
            console.log('erro: ', error);
        }finally{
            console.log('page: HomeScreen carregada');     
            setReloaded(false);
        }
    } 
    
    // notifica a UI do app
    const notifyUI = (msg)=>{
        setSnackMsg(msg);
        setSnackVisible(true);
        console.log(msg);
    }

    const changeRegistro_OnClicked = (e)=>{
        console.log('button reloaded clicked');

        //if(Global.DEVICE !==null){
        //    notifyUI('Método não implementado no GINGA')
        //}else{
        //    loadPage();
        //}
        if(Global.DEVICE !==null){
            console.log('destruindo o registro');
            //notifyUI('Método não implementado no GINGA')
            Global.DEVICE = null;
        }
        console.log('device info: ', Global.DEVICE);
        loadPage();
    }

    useEffect(()=>{
        setTimeout(()=>{
            loadPage();
        },2000);
        
    },[])

    const ExibeFragment=(props)=>{
        if(reloaded){
            return(
                <Stack fill center spacing={4}>
                    <ActivityIndicator size="large" />
                </Stack>
            )    
        }else{
            return(
                <View style={styles.pageContainer}>
                    <Text style={styles.title2}>{msgUI}</Text>
                    <Button title={titleButton} style={styles.mtop20} onPress={changeRegistro_OnClicked} />
                </View>
            )
        }
    }
   
    return(
        <View style={styles.mainContainer}> 
            <View style={styles.headerContainer}>
                <Text style={styles.title1}>Home</Text>
            </View>
            <ExibeFragment />   
            <Snackbar
                visible={snackVisible}
                onDismiss={()=>{setSnackVisible(false)}}
                action={{ label: 'Dispensar' }}>
                {snackMsg}
            </Snackbar>         
        </View>
        
    )    
}