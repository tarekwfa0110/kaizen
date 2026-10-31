import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../consts';

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={{ color: colors.text, fontSize: 20 }}>
                we are cooking so hard rn
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.base,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
