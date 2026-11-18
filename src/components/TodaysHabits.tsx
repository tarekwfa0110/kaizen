import { FlatList, Pressable, Text, View } from 'react-native';
import { styles } from '../consts';
import { useHabits } from '../context/HabitsContext';

export default function TodaysHabits() {
    const { habits, toggleHabit } = useHabits();
    const today = new Date().toLocaleDateString();

    return (
        <View style={styles.container}>
            <Text style={[styles.title, { marginBottom: 14 }]}>
                Today - {today}
            </Text>
            <FlatList
                data={habits}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <Pressable
                            onPress={() => toggleHabit(item.id)}
                            style={[
                                styles.square,
                                item.isDone ? styles.done : styles.pending,
                            ]}
                        >
                            {item.isDone && (
                                <Text style={styles.buttonText}>✓</Text>
                            )}
                        </Pressable>
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    );
}
