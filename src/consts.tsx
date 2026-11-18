import { StyleSheet } from 'react-native';

export const appName = 'Kaizen';

export const colors = {
    base: '#1d1b2c',
    surface: '#2a273f',
    overlay: '#393552',
    muted: '#6e6a86',
    subtle: '#908caa',
    text: '#e0def4',
    love: '#eb6f92',
    gold: '#f6c177',
    rose: '#ea9a97',
    pine: '#3e8fb0',
    foam: '#9ccfd8',
    iris: '#c4a7e7',
    moss: '#8ec07c',
    highlight_low: '#2a283e',
    highlight_med: '#44415a',
    highlight_high: '#56526e',
};

export const data = [
    { id: 1, name: 'Gymw', isDone: true },
    { id: 2, name: 'Coding', isDone: true },
    { id: 3, name: 'Drawing', isDone: false },
];

export const styles = StyleSheet.create({
    projectContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.base,
        display: 'flex',
        paddingTop: 30,
    },
    container: {
        paddingHorizontal: 24,
        paddingTop: 40,
        justifyContent: 'flex-start',
    },
    spacedRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 14,
    },
    textInput: {
        borderColor: colors.text,
        color: colors.text,
        borderRadius: 6,
        height: 40,
        padding: 5,
        borderWidth: 1,
        flex: 0.85,
    },
    title: {
        color: colors.text,
        fontSize: 22,
        fontWeight: '600',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        paddingVertical: 10,
    },
    text: {
        color: colors.text,
        fontSize: 16,
    },
    buttonText: {
        color: colors.base,
        fontSize: 12,
        fontWeight: 600,
    },
    square: {
        width: 24,
        height: 24,
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rectangle: {
        width: 16,
        height: 25,
        borderRadius: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    done: {
        backgroundColor: colors.moss,
    },
    pending: {
        backgroundColor: colors.highlight_high,
    },
});
