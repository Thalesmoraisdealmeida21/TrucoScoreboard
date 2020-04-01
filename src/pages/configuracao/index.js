import React, {useState} from 'react'
import {View, Text, TouchableOpacity,  TextInput, Alert} from 'react-native'
import { useNavigation, useRoute} from '@react-navigation/native'
import { FontAwesome5} from '@expo/vector-icons'
import {AsyncStorage } from 'react-native';

import styles from './style'


export default function(){
    const navigator = useNavigation();
    const route = useRoute()
    const configuracoes = route.params.pontos.toString();
    const [points, setPoints] = useState(configuracoes);

    
 
  

    
    
  
    
    function navigateBack(){
        navigator.goBack()
    }


    async function saveConfig(){
    
    try{
            await AsyncStorage.setItem('PointsToVictory', points.points);
            
            Alert.alert(
                'Sucesso !!!',
                'Configuração salva com sucesso'
            )
        } catch (er){
            if(er){
                Alert.alert(
                    'Erro !!!',
                    'Ocorreu um erro ao gravar os dados'
                )
            }
        }

        const value = await AsyncStorage.getItem('PointsToVictory');
                    if (value !== null) {
            // We have data!!
            console.log("valor gravado" + value);
            }
    }

    return (

   
        

     
        <View style={styles.container}> 
    
       
            <Text style={styles.header}> Configuração</Text>
            
     
          
        

            <View style={styles.input}>

                <Text style={styles.textLabel}>Jogo acaba em </Text> 
                <TextInput 
                value={points}
                keyboardType={"numeric"}
                onChangeText={points =>  setPoints({points})}             
                style={styles.textInput}>
                             
                </TextInput>
           
                <Text style={styles.textLabel}> pontos</Text>
            </View>


            <TouchableOpacity onPress={saveConfig} style={styles.btnSave}>
                <Text style={styles.btnSaveText}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateBack} style={styles.btnBack}>
                <Text style={styles.btnSaveText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}