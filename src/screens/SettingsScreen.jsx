import { Text, View } from "react-native"
import { styles } from "../styles/Theme"
import { ActivityIndicator, Button, Stack, TextInput } from "@react-native-material/core"
import { Snackbar } from "react-native-paper"
import { useEffect, useState } from "react"
import { getData, setData } from "../services/LocalStoregeService"
import { URI_API_KEY } from "../Global"

export default SettingsScreen = (props)=>{
    const[snackVisible, setSnackVisible] = useState(false);
    const[snackMsg, setSnackMsg] = useState("");
    const[uri, setUri] = useState("");
    const[pageLoaded, setPageLoaded] = useState(false);
    const[saveLoading, setSaveLoading] = useState(false);

    const showSnackMsg = (msg, delay)=>{
        setSnackMsg(msg);
        setSnackVisible(true);
    }

    const saveButton_click = ()=>{
        setSaveLoading(true);
        setData(URI_API_KEY, uri).then(()=>{
            showSnackMsg('Endereço da API GINGA salvo com sucesso.');
            console.log('uri salva com sucesso');
        }).catch((err)=>{
            console.log(err);
        }).finally(()=>{
            setSaveLoading(false);
        });
        console.log('ok');
    }

    useEffect(()=>{
        getData(URI_API_KEY).then((u)=>{ 
            setUri(u)
        }).finally(()=>{
            setPageLoaded(true);
            console.log('page: SettingsScreen carregada');
        });        
        
    },[])

    if(pageLoaded){

        return(
            <View style={styles.mainContainer}> 
                <View style={styles.headerContainer}>
                    <Text style={styles.title1}>Settings</Text>
                </View>
                <View style={styles.pageContainer}>
                    <Stack spacing={2} style={{width:250}}>
                    
                        <TextInput name="uriApi" value={uri} label="GINGA API" 
                            onChangeText={text => setUri(text)} />
                        <Button 
                            title="Salvar" name="salvarUrlApi" onPress={saveButton_click} 
                            loading={saveLoading} loadingIndicatorPosition="trailing"/>
                    </Stack>
                    
                    <Snackbar
                        visible={snackVisible}
                        onDismiss={()=>{setSnackVisible(false)}}
                        action={{ label: 'Dispensar' }}>
                        {snackMsg}
                    </Snackbar>
                </View>            
            </View>
        )
    }else{
        return(
            <Stack fill center spacing={4}>
                <ActivityIndicator size="large" />
            </Stack>
        )
    }
}