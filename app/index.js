import { SafeAreaView, Text } from 'react-native';
import { useRouter, Stack } from 'expo-router';
import { COLORS } from '../constants';


const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView
            style={ {
                flex: 1,
                backgroundColor: COLORS.lightWhite
            } }
        >
            <Stack.Screen
                options={ {
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerTitle: () => (
                        <Text
                            style={ {
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: COLORS.black,
                                justifyContent: 'center',
                            } }
                        >Home</Text>
                    )
                } }
            />
        </SafeAreaView>
    )
}

export default Home;