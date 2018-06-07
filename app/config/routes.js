import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Themes from '../screens/Themes';
import Options from '../screens/Options';

const HomeStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null,
        }
    },
    Options: {
        screen: Options,
        navigationOptions: {
            headerTitle: 'Options',
        }
    },
    Themes: {
        screen: Themes,
        navigationOptions: {
            headerTitle: 'Themes',
        }
    },
}, {    
        //navigation bar comes and goes with the screen
        headerMode: 'screen',
    }
);

const CurrencyListStack = StackNavigator({
    CurrencyList: {
        screen: CurrencyList,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
        }),
    },
});

export default StackNavigator({
    Home: {
        screen: HomeStack,
    },
    CurrencyList: {
        screen: CurrencyListStack,
    },
}, {
        mode: 'modal', //wie der nächste Screen geladen wird
        // cardStyle: { paddingTop: StatusBar.currentHeight },
        headerMode: 'none'
    },
);