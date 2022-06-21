import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    header: {
        width: '100%',
        marginTop: getStatusBarHeight() + 90,
    },
    title: {
        color: theme.colors.heading,
        fontSize: 28,
        fontFamily: theme.fonts.title800,
        lineHeight: 40,
        marginLeft: 57
    },
    subtitle: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.text400,
        fontSize: 24,
        marginLeft: 57,
        marginTop: 14
    },
    content: {
        marginTop: 89,
        
    },
    input: {
        width: 250,
        height: 50,
        margin: 8,
        backgroundColor: theme.colors.input,
        borderRadius: 8,
        fontSize: 14,
        marginLeft: 62,
        color: '#FFF',
        padding: 8,
        borderWidth: 1,
        borderColor: '#FFF'
    },
    inputArea: {
        width: 250,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: -50
    },
    register: {
        marginTop: 226,
        fontSize: 13,
        color: '#FFFFFF',
        fontFamily: theme.fonts.text400,
        marginLeft: '20%'
    },
    forgot: {
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        justifyContent: 'center',
        color: '#FFF',
        marginLeft: '30%',
        marginTop: '5%'
    }
});