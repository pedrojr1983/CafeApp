import { StyleSheet } from "react-native"

export default{
    fontFamily:'Lato',
    colors:{
        today:'#B13B44',
        secondary:'#FFF',
        mainText:'#222',
        subText:'#555',
        cafe:'#1a79c4',
        primary:'#007bff',
        title: '#1E1E1E',
        active: '#222'
    }
}

export const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerContainer:{
        padding:12,
        textAlign:'center',
        backgroundColor:'#1a79c4',
        width:'100%'
    },
    pageContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    playerContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#333',
        color:'#FF0000',
        width:'100%'
    },
    
    margin16:{
        margin:16
    },
    mtop20:{
        marginTop:20
    },
    title1:{
        fontSize:20,
        textAlign:'left'
    },
    title2:{
        fontSize:16,
    },
    h2_CWhite:{
        fontSize:16,
        color:'#FFFFFF'
    },
    title3:{
        fontSize:14
    }
})