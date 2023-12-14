import {StyleSheet} from 'react-native'
import Video, {VideoRef} from 'react-native-video';
import { useRef, useState } from "react"
import { Stack } from '@react-native-material/core';
import { ActivityIndicator } from 'react-native-paper';
import Global from '../Global';
import { getPropertyValue } from '../helpers/midiaHelper';

const VideoPlayer = (props)=>{
    
    const[videoSource, setVideoSource] = useState(props.source);
    console.log('component: VideoPlayer');
    const videoRef = useRef(VideoRef);

    const onBuffer=(evt)=>{
        console.log('video buffer: ', evt);
    }

    const onError = (err)=>{
        console.log('video erro: ', err);
    }
    
    setInterval(()=>{
        console.log('verifcando a fila de video: ');
        if(Global.midias != undefined){
            var sz = Global.midias.videos.length;
            console.log('size: ', sz);
            if(sz>0){
                var video = Global.midias.videos.pop();
                if(video!==undefined && video !==null){
                    setVideoSource(video);
                    console.log('video uri: ', video.nodeSrc);
                }
            }
        }
    }, 5000);
        
    if(videoSource!==undefined && videoSource !==null){
        console.log('start play: ', videoSource.nodeSrc);
        return(
            <Video 
                source={{uri:videoSource.nodeSrc}}
                ref={videoRef}
                onBuffer={onBuffer}
                onError={onError}               
                style={
                    {...styles.backgroundVideo, 
                        width:getPropertyValue('width', videoSource),
                        height:getPropertyValue('height', videoSource),
                        left:getPropertyValue('left', videoSource),
                        top:getPropertyValue('top', videoSource),
                        zIndex:getPropertyValue('zIndex', videoSource)
                    }}
                controls={false}/>
        )
    }else{
        return(
            <Stack fill center spacing={4}>
                <ActivityIndicator size="large" />
            </Stack>
        )
    }
    
}

// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
    backgroundColor:'black'
  },
});

export default VideoPlayer;
