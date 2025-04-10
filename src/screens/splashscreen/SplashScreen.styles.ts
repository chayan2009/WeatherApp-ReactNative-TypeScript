import { StyleSheet } from 'react-native';
import { Colorss } from '../../utils/Colorss';

const style = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: Colorss.accent,
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        fontSize:20,
        color:'#33333',
        fontWeight:'bold',
    },
});
export default style;
