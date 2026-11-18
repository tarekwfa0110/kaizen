import TodaysHabits from '../components/TodaysHabits';
import ManageHabits from '../components/ManageHabits';
import { styles } from '../consts';
import { View } from 'react-native';
import Carousel from '@/components/Carousel';
import { HabitProvider } from '../context/HabitsContext';

export default function Index() {
    return (
        <HabitProvider>
            <View style={styles.projectContainer}>
                <Carousel>
                    <TodaysHabits />
                    <ManageHabits />
                </Carousel>
            </View>
        </HabitProvider>
    );
}
