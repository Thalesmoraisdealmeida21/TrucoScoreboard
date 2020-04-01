import { StyleSheet } from 'react-native'


export default StyleSheet.create({


    container: {
        backgroundColor: '#345346',
        height: 1000,
        alignItems: "center"
    },

    headersPlacar: {
        marginTop: 50,
        display: "flex",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: '#FFF'
    },

    titleHaderEles: {
    
        color: "#FFF",
        fontSize: 40,
        fontWeight: "bold",
        marginLeft: 50
   
        
    },



    titleHaderNos: {
        color: "#FFF",
        fontSize: 40,
        fontWeight: "bold",
        marginLeft: 50,
        marginLeft: 0 
    },

    lineVertical: {
        width: 5,
        height: 280,
        marginTop: 0,
        backgroundColor: "#FFFF",
        
        marginLeft: 10,
        marginRight: 10,
         
      },

    placar: {
        marginTop: 50,
        display: "flex",
        flexDirection: "row",
        
        
     
    },

    playerNos: {
        fontSize: 60,
        fontWeight: "bold",
        color: "#FFF",
        textAlign: "center"
    },

    playerEles: {
        fontSize: 60,
        fontWeight: "bold",
        color: "#FFF",
        
    },

    buttonsContainer: {
        marginTop: 80,
        display: "flex",
        flexDirection: "row",
        marginLeft: 0
    },

    btnText: {
        fontSize: 30,
        backgroundColor: "#3B6F53",
        width: 60,
        height: 50,

        textAlign: "center",
        textAlignVertical: "center",
       
        borderRadius: 10,
        color: "#fff",
        
    },


    configContainer: {
        display: "flex",
        flexDirection: "row",
     
    },

    btnResetContainer: {
        color: "#fff",  
        backgroundColor: '#3B6F53',
    },

    btnConfigContainer: {
        color: "#fff",
        backgroundColor: '#3B6F53',
        borderRadius: 10,
        marginLeft: 10,
    },

    btnReset: {
        padding: 30,
        fontSize: 50,
        
    },



    btnConfig: {
        color: "#fff",
        fontSize: 50,
       
    },

    btnText2: {
        fontSize: 30,
        backgroundColor: "#3B6F53",
        width: 60,
        height: 50,
        textAlign: "center",
        textAlignVertical: "center",
        marginBottom: 50,
        borderRadius: 10,
        color: "#fff",
        marginRight: 5
    },

    playerNosContainer: {
        display: "flex",
        
    }



})