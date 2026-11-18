import { Text, View, FlatList, Pressable, TextInput } from 'react-native';
import { useState } from 'react';
import { colors, data, styles } from '../consts';

export default function ManageHabits() {
    const [isAddingHabit, setIsAddingHabit] = useState(false);
    const [habits, setHabits] = useState(data);
    const [text, setText] = useState('');

    function onAdd() {
        if (text.trim().length === 0) {
            return;
        }
        setHabits([
            ...habits,
            { id: habits.length + 1, name: text, isDone: false },
        ]);
        setText('');
        setIsAddingHabit(false);
    }

    function onRemove(id: number) {
        setHabits(habits.filter((item) => item.id !== id));
    }

    return (
        <View style={styles.container}>
            <View style={[styles.spacedRow, { marginBottom: 26 }]}>
                <Text style={styles.title}>Your Activities</Text>
                <Pressable
                    style={[styles.rectangle, { backgroundColor: colors.moss }]}
                    onPress={() => setIsAddingHabit(!isAddingHabit)}
                >
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>
            </View>

            <FlatList
                data={habits}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.spacedRow}>
                        <Text style={styles.text}>{item.name}</Text>
                        <Pressable
                            style={[
                                styles.rectangle,
                                { backgroundColor: colors.love },
                            ]}
                            onPress={() => onRemove(item.id)}
                        >
                            <Text style={styles.buttonText}>x</Text>
                        </Pressable>
                    </View>
                )}
            />
            {isAddingHabit && (
                <View style={styles.spacedRow}>
                    <TextInput
                        placeholder="Add Your Activity!"
                        onChangeText={(newText) => setText(newText)}
                        value={text}
                        style={styles.textInput}
                        placeholderTextColor={colors.text}
                    />
                    <View style={styles.row}>
                        <Pressable
                            style={[
                                styles.rectangle,
                                { backgroundColor: colors.love },
                            ]}
                            onPress={() => setIsAddingHabit(!isAddingHabit)}
                        >
                            <Text style={styles.buttonText}>x</Text>
                        </Pressable>
                        <Pressable
                            style={[
                                styles.rectangle,
                                { backgroundColor: colors.moss },
                            ]}
                            onPress={onAdd}
                        >
                            <Text style={styles.buttonText}>+</Text>
                        </Pressable>
                    </View>
                </View>
            )}
        </View>
    );
}
