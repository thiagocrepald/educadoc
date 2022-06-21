import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: 260,
        height: 48,
        backgroundColor: theme.colors.button,
        borderRadius: 14,
        alignItems: 'center',
        marginLeft: 57,
        marginTop: '4%',
    },
    title: {
        flex: 1,
        color: '#0C7384',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        fontFamily: theme.fonts.title800
    },
    wrapper: {
        width: 260,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
    register: {
        marginTop: 8,
        fontSize: 13,
        color: '#FFFFFF',
        fontFamily: theme.fonts.text400,
    },
    button: {
        marginLeft: 22
    }

});