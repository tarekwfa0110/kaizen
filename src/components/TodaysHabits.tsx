import { View, Text, FlatList } from 'react-native';
import { data, styles } from '../consts';

export default function TodaysHabits() {
    const today = new Date().toLocaleDateString();

    return (
        <View style={styles.container}>
            <Text style={[styles.title, { marginBottom: 14 }]}>
                Today - {today}
            </Text>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <View
                            style={[
                                styles.square,
                                item.isDone ? styles.done : styles.pending,
                            ]}
                        />
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    );
}
