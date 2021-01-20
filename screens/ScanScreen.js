import React,{Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native';
import{BarCodeScanner} from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions'
export default class ScanScreen extends Component{
    constructor(){
        super();
        this.state={
            hasCameraPermissions:null,
            scanned:false,
            scannedData:'',
            buttonState:'normal'
        }
    }
    getCameraPermissions=async()=>{
        const{status}=await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermissions:status==='granted',
            buttonState:'clicked',
            scanned:false
        })
    }
    handleBarCodeScanner=async({data})=>{
        this.setState({
            scanned:true,
            scannedData:data,
            buttonState:'normal'
        })
    }
    render(){
        const hasCameraPermissions=this.state.hasCameraPermissions
        const buttonState=this.state.buttonState
        const scanned=this.state.scanned
        if(buttonState==='clicked'&&hasCameraPermissions){
            return(
                <BarCodeScanner style={StyleSheet.absoluteFillObject} onBarCodeScanned={scanned?undefined:this.handleBarCodeScanner}/>
            );
        }
        else if(buttonState==='normal'){
        return(
            <View style={{justifyContent:'center',alignSelf:'center',marginTop:300}}>
                <Image style={{width:85,height:95}} source={require('../assets/camera.jpg')}/>
                <Text>{hasCameraPermissions===true?this.state.scannedData:"camera permissions"}</Text>
                <TouchableOpacity onPress={this.getCameraPermissions}>
                    <Text>Scan QR Code</Text>
                </TouchableOpacity>
            </View>
        );
        }
    }
}