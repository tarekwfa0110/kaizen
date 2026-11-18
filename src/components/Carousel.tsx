import { useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { colors } from '../consts';

export default function Carousel({ children }) {
    const items = Array.isArray(children) ? children : [children];
    const [width, setWidth] = useState(0);
    const [scrollX] = useState(() => new Animated.Value(0));

    return (
        <View onLayout={(e) => setWidth(e.nativeEvent.layout.width)}>
            <View style={local.dots}>
                {items.map((_, i) => {
                    const inputRange = [
                        (i - 1) * width,
                        i * width,
                        (i + 1) * width,
                    ];
                    const backgroundColor = scrollX.interpolate({
                        inputRange,
                        outputRange: [
                            colors.highlight_high,
                            colors.text,
                            colors.highlight_high,
                        ],
                        extrapolate: 'clamp',
                    });
                    const dotWidth = scrollX.interpolate({
                        inputRange,
                        outputRange: [8, 24, 8],
                        extrapolate: 'clamp',
                    });
                    return (
                        <Animated.View
                            key={i}
                            style={[
                                local.dot,
                                { backgroundColor, width: dotWidth },
                            ]}
                        />
                    );
                })}
            </View>

            {width > 0 && (
                <Animated.ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        {
                            useNativeDriver: false,
                        },
                    )}
                >
                    {items.map((item, i) => (
                        <View key={i} style={{ width }}>
                            {item}
                        </View>
                    ))}
                </Animated.ScrollView>
            )}
        </View>
    );
}

const local = StyleSheet.create({
    dots: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 6,
    },
    dot: {
        height: 8,
        borderRadius: 4,
    },
});
