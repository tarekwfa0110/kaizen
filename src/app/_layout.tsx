import { Stack } from 'expo-router';
import { colors, appName } from '../consts';

export default function RootLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: colors.surface },
                headerTitleStyle: {
                    color: colors.text,
                    fontSize: 40,
                    fontWeight: 'bold',
                },
                headerTitle: appName,
            }}
        />
    );
}
