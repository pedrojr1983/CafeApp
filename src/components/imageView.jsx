import { Image, StyleSheet, View, TouchableOpacity, Text } from "react-native"
import Global from "../Global"
import { useState } from "react"
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { getPropertyValue } from '../helpers/midiaHelper'

export default ImageView = (props)=>{
    
    const[imageSource, setImageSource] = useState(null);
    
    // const getProperty=(p, midia)=>{
    //     var r = 0;
    //     midia.properties.forEach(e => {
    //         if(e.name == p){
    //             r=e.value;
    //             console.log(e);            
    //             return r;
    //         }
    //     });        
    //     return r;
    // }
    
    setInterval(()=>{
        console.log('verificando a fila de imagens: ', Global.midias.images.length);
        if(Global.midias.images.length >0){
            var midia = Global.midias.images.pop();
            if(midia !==undefined && midia !==null){
                console.log(midia);
                setImageSource(midia);
                //console.log('image src: ', imageSource.nodeSrc);
            }
        }
    }, 5000);
    
    const imageHandleClick = (e)=>{
        console.log('image o clicked', e);
    };

    const onImagePressEvent = (e)=>{
        console.log('evento: usuário clicou na imagem');
    }

    if(imageSource !==null){
        console.log('start view img: ', imageSource.nodeSrc);
        return(            
            <TouchableOpacity style={{ 
                position:'absolute',
                top:getPropertyValue('top', imageSource)
                , left:getPropertyValue('left',imageSource)
                , height:getPropertyValue('height',imageSource)
                , width:getPropertyValue('width', imageSource)
                , zIndex:getPropertyValue('zIndex', imageSource)
            }} onPress={onImagePressEvent}>  
            <Image 
                source={{uri:imageSource.nodeSrc}} 
                style={styles.img } />
            </TouchableOpacity>
            
        )
    }
    else{
        return <></>
    }
}

var styles = StyleSheet.create({
    img: {
      position: 'absolute',
      width:'100%',
      height:'100%',
      top:0,left:0,
      backgroundColor:'red'
    },
    
});