import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        fontSize: 18,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        
    },
    form: {
        paddingHorizontal: 24,
        marginTop: 32,

    },
    select: {
        width: '100%',
        flexDirection: 'row',
        height: 68,
        borderColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        paddingRight:25,
        overflow: 'hidden',
    },
    selectBody:{
        flex: 1,
        alignItems:'center',
    },
    image:{
        width:64,
        height: 68,
        backgroundColor:theme.colors.secondary50,
       
        borderRadius:8,
    },
    field:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:30,

    },
    column:{
        flexDirection:'row', 
        alignItems:'center',

    },
    divider:{
        marginRight:4,
        fontSize:18,
        fontFamily:theme.fonts.text400,
        color:theme.colors.highlight
    },
    textMax:{
        fontFamily:theme.fonts.text400,
        fontSize:13,
        color: theme.colors.highlight,
        
    },
    footer:{
        marginVertical:20,
        marginBottom:56,
        
    },
    textarea:{
        width:'100%',
        height: 95,
        backgroundColor:theme.colors.secondary40,
        color:theme.colors.heading,
        borderRadius:8,
        fontFamily:theme.fonts.text400,
        fontSize:13,
        marginRight:4,
        textAlign:'center',
        paddingHorizontal:16,
       textAlignVertical:'top'
    },
})