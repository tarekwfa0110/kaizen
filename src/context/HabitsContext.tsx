import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react';
import { data } from '../consts';

export type Habit = {
    id: number;
    name: string;
    isDone: boolean;
};

type HabitsContextValue = {
    habits: Habit[];
    addHabit: (name: string) => void;
    removeHabit: (id: number) => void;
    toggleHabit: (id: number) => void;
};

const STORAGE_KEY = 'kaizen.habits';

const HabitsContext = createContext<HabitsContextValue | undefined>(undefined);

export function HabitProvider({ children }: { children: React.ReactNode }) {
    const [habits, setHabits] = useState<Habit[]>(data);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        AsyncStorage.getItem(STORAGE_KEY)
            .then((raw) => {
                if (raw) setHabits(JSON.parse(raw));
                setLoaded(true);
            })
            .catch(() => setLoaded(true));
    }, []);

    useEffect(() => {
        if (loaded) AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(habits));
    }, [habits, loaded]);

    const addHabit = useCallback((name: string) => {
        if (!name.trim()) return;
        setHabits((prev) => [
            ...prev,
            { id: Date.now(), name: name.trim(), isDone: false },
        ]);
    }, []);

    const removeHabit = useCallback((id: number) => {
        setHabits((prev) => prev.filter((h) => h.id !== id));
    }, []);

    const toggleHabit = useCallback((id: number) => {
        setHabits((prev) =>
            prev.map((h) => (h.id === id ? { ...h, isDone: !h.isDone } : h)),
        );
    }, []);

    return (
        <HabitsContext.Provider
            value={{ habits, addHabit, removeHabit, toggleHabit }}
        >
            {children}
        </HabitsContext.Provider>
    );
}

export function useHabits() {
    const ctx = useContext(HabitsContext);
    if (!ctx) throw new Error('useHabits must be used within a HabitProvider');
    return ctx;
}
