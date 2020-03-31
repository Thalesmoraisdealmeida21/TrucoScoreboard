import React, {useState} from 'react'
import {View, Text, TouchableOpacity,  TextInput, Alert} from 'react-native'
import { useNavigation, useRoute} from '@react-navigation/native'
import { FontAwesome5} from '@expo/vector-icons'
import {AsyncStorage } from 'react-native';

import styles from './style'


export default function(){
    const navigator = useNavigation();
    const route = useRoute()
    const configuracoes = route.params.pontos;
    const [points, setPoints] = useState(configuracoes);
 
  


    
  
    
    function navigateBack(){
        navigator.goBack()
    }


    async function saveConfig(){

        try{
            await AsyncStorage.setItem('PointsToVictory', points);
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
            console.log(value);
            }
    }

    return (
        <View style={styles.container}> 
            <Text style={styles.header}> Configuração</Text>
            <TouchableOpacity  onPress={navigateBack} style={styles.btnBackContainer}>
            <Text  style={styles.btnBack}>
                <FontAwesome5 name="arrow-left">
                </FontAwesome5>
            </Text>
       
            </TouchableOpacity>
           

            <View style={styles.input}>
                <Text style={styles.textLabel}>Jogo acaba em </Text> 
                <TextInput 
                onChangeText={text =>  setPoints(text)}
                value={points}
                style={styles.textInput}>
                
                </TextInput>
                <Text style={styles.textLabel}> pontos</Text>
            </View>


            <TouchableOpacity onPress={saveConfig} style={styles.btnSave}>
                <Text style={styles.btnSaveText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}