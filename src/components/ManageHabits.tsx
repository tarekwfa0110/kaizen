import { FlatList, Pressable, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { colors, styles } from '../consts';
import { useHabits } from '../context/HabitsContext';

export default function ManageHabits() {
    const { habits, addHabit, removeHabit } = useHabits();
    const [isAdding, setIsAdding] = useState(false);
    const [text, setText] = useState('');

    function onAdd() {
        if (!text.trim()) return;
        addHabit(text);
        setText('');
        setIsAdding(false);
    }

    return (
        <View style={styles.container}>
            <View style={[styles.spacedRow, { marginBottom: 26 }]}>
                <Text style={styles.title}>Your Activities</Text>
                <Pressable
                    style={[styles.rectangle, { backgroundColor: colors.moss }]}
                    onPress={() => setIsAdding(!isAdding)}
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
                            onPress={() => removeHabit(item.id)}
                        >
                            <Text style={styles.buttonText}>x</Text>
                        </Pressable>
                    </View>
                )}
            />

            {isAdding && (
                <View style={styles.spacedRow}>
                    <TextInput
                        placeholder="Add Your Activity!"
                        onChangeText={setText}
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
                            onPress={() => {
                                setText('');
                                setIsAdding(false);
                            }}
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
