import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 50,
        alignItems: 'center',
    },
    user: {
        flexDirection: 'row',
    },
    date:{
        fontFamily: theme.fonts.text400,
        fontSize: 14,
        color: '#5C5C5C'
    },
    greeting: {
        fontFamily: theme.fonts.text400,
        fontSize: 18,
        color: '#3C3C3C',
        marginRight: 6,
    },
    username: {
        fontFamily: theme.fonts.title800,
        fontSize: 18,
        color: '#3C3C3C',
    }
});