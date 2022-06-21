import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    header: {
        width: 311,
        height: 58,
    },
    content: {
        width: 350,
        height: 600
    },
    tickets: {
        width: 350,
        height: 61,
        flexDirection: 'row',
        paddingBottom: 10,
        marginTop: 10,
    },
    imgstatus: {
        width: 63,
        height: 64
    },
    img: {
        width: 46,
        height: 46,
        marginRight: 10
    },
    user: {
        fontFamily: theme.fonts.title800,
        fontSize: 16,
        color: '#3C3C3C',
    },
    status: {
        fontFamily: theme.fonts.title800,
        fontSize: 16,
        color: '#949292'
    },
    date: {
        fontFamily: theme.fonts.text400,
        fontSize: 16,
        color: '#949292',
    },
    line: {
        marginBottom: 5
    }

});