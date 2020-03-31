import { StyleSheet } from 'react-native'


export default StyleSheet.create({

    container: {
        backgroundColor: "#345346",
        height: 1000,
        display: "flex",
        flexDirection: "column"

    },
    header: {
        marginLeft: 100,
        marginTop: 50,
        fontSize: 30,
        color: "#FFF",
        fontWeight: "bold"
    },

    btnBackContainer: {
        position: "absolute",
        marginLeft: 10,
        marginTop: 65,
        height: 200,
        color: '#FFF'
    },
    btnBack: {
        color: '#FFF',
        fontSize: 400,
    },

    input: {
        marginTop: 200,
        color: '#FFF',
        display: "flex",
        flexDirection: 'row',
        marginLeft: 8
    },

    textLabel: {
        color: "#FFF",
        fontSize: 28
    },

    textInput: {
        backgroundColor: '#296F4D',
        marginTop: 10,
        borderRadius:  10,
        height: 30,
        textAlign: "center",
        textAlignVertical: "center",
        width: 60,
       
        color: '#FFF'
    },
    TextOfTextInput: {
        marginTop: 2,
        fontSize: 25,

    },
    btnSave: {
        backgroundColor: '#296F4D',
        marginTop: 350,
        marginLeft: 100,
        borderRadius: 50,
        textAlign: "center",
        width: 200
    },
    btnSaveText: {
      fontSize: 30,
      color: "#FFF",
      textAlign: 'center'

    }
})