import { StyleSheet } from 'react-native';
import { Colorss } from '../../utils/Colorss';
const homeStyle = StyleSheet.create({
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
});
export default homeStyle;
