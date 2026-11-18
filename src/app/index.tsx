import TodaysHabits from '../components/TodaysHabits';
import ManageHabits from '../components/ManageHabits';
import { styles } from '../consts';
import { View } from 'react-native';
import Carousel from '@/components/Carousel';

export default function Index() {
    return (
        <View style={styles.projectContainer}>
            <Carousel>
                <TodaysHabits></TodaysHabits>
                <ManageHabits></ManageHabits>
            </Carousel>
        </View>
    );
}
