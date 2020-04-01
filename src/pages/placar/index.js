import React, {useState} from 'react'
import { View, Text,TouchableOpacity, Alert } from 'react-native'
import {AsyncStorage} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons/'
import { useNavigation} from '@react-navigation/native'

import styles from './style'
export default function(){



    const [ElesPoints, setElesPoints] = useState(0);
    const [NosPoints, setNosPoints] = useState(0);
    const navigator = useNavigation();





   async function navigateToConfig(){
       
        var pontos = await AsyncStorage.getItem('PointsToVictory');
        if((pontos == null) || (pontos <= 0)){
            pontos = 24;
        }
       
        console.log("Pontuation: " + pontos)
        navigator.navigate('Configuracao', { pontos })


           
    }

    function resetGame(){

        Alert.alert(
            'Tem certeza disto ?',
            'Se você resetar os valores do jogo serão perdidos',
            [
                {text: 'Sim', onPress: ()=> { setElesPoints(0); setNosPoints(0)}},
                
                {text: 'Não', onDismiss: ()=> {}}
            ]
        )
  
    }

        async function sumPlayerEles() {
            let pontos = await AsyncStorage.getItem('PointsToVictory')
            if((pontos == null) || (pontos <= 0)){
                pontos = 24;
            }
            if(ElesPoints >= pontos - 1 ){
                setElesPoints(ElesPoints + 1)
                Alert.alert(
                    'Que pena "Eles" Ganharam',
                    'Deseja iniciar um novo jogo ?',
                    [
                        {text: 'Sim', onPress: ()=>{
                            setElesPoints(0);
                            setNosPoints(0)
                        }}
                    
                    ]
                )
            } else {
                setElesPoints(ElesPoints + 1)
            }

   
        }

        function subtractPlayerEles() {
            if(ElesPoints <= 0){
                setElesPoints(ElesPoints)
            } else {
                setElesPoints(ElesPoints - 1)
            }
           
        }


        async function sumPlayerNos() {
            let pontos = await AsyncStorage.getItem('PointsToVictory');
            if((pontos == null) || (pontos <= 0)){
                pontos = 24;
            }
            if(NosPoints >= pontos - 1 ){
                setNosPoints(NosPoints + 1)
                Alert.alert(
                    'Parabéns !!! "Nós" Ganharam',
                    'Deseja iniciar um novo jogo ?',
                    [
                        {text: 'Sim', onPress: ()=>{
                            setElesPoints(0);
                            setNosPoints(0)
                        }}
                    
                    ]
                )
            } else {
                setNosPoints(NosPoints + 1)
            }

          
        }

        function subtractPlayerNos() {
            if(NosPoints <= 0){
                setNosPoints(setNosPoints)
            } else {
                setNosPoints(NosPoints - 1)
            }
            
        }


  
    return(
        <View style={styles.container}>

      
                <View style={styles.headersPlacar}>

                    <Text style={styles.titleHaderNos}>Nós</Text>
                    <Text style={styles.titleHaderEles}>Eles</Text>

                </View>

                <View style={styles.placar}>
                    <View style={styles.playerNosContainer}>
                        <Text style={styles.playerNos}> {NosPoints} </Text>

                        <View  style={styles.buttonsContainer}>
                            <TouchableOpacity onPress={sumPlayerNos}>
                                <Text style={styles.btnText}>+</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={subtractPlayerNos}>
                                <Text style={styles.btnText2}>-</Text>
                            </TouchableOpacity>
                        </View>
                     
                    </View>

                        <View style={styles.lineVertical}>

                        </View>



                    <View style={styles.playerElesContainer}>
                        <Text style={styles.playerEles}> {ElesPoints} </Text>

                        <View  style={styles.buttonsContainer}>
                            <TouchableOpacity  onPress={sumPlayerEles}>
                                <Text style={styles.btnText}  >+</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={subtractPlayerEles}>
                                <Text style={styles.btnText2}>-</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                


                </View>

                <View style={styles.configContainer}>

                    <TouchableOpacity onPress={resetGame}>
                        <Text  style={styles.btnResetContainer}>
                            <FontAwesome5 style={styles.btnReset} name="sync"></FontAwesome5>

                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={navigateToConfig}>
                        <Text  style={styles.btnConfigContainer}>
                            <FontAwesome5 style={styles.btnConfig} name="cog"></FontAwesome5>

                        </Text>
                    </TouchableOpacity>


                </View>
             

                
        </View>
    );
}