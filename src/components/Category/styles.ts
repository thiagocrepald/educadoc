import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 120,
        height: 122,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginRight: 6,
        backgroundColor: '#E6E6E6',
        marginTop: 60,
        marginLeft: 8
    },
    content: {
        width: 100,
        height: 116,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16
    },
    title: {
        fontFamily: theme.fonts.text400,
        fontSize: 12,
        color: '#0C7384',
        justifyContent: 'space-between',
        alignItems: 'center',
    }

});