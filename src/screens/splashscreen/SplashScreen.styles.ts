import { StyleSheet } from 'react-native';
import { Colorss } from '../../utils/Colorss';

const style = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: Colorss.primary,
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        fontSize:20,
        color:'#33333',
        fontWeight:'bold',
    },
    logo:{
        width:250,
        height:240,
        marginBottom:30,
    },
    safeArea:{
        flex: 1,
        backgroundColor: Colorss.primary,
    },
});
export default style;
