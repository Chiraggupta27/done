/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import homeScreen from './src/screens/homeScreen/homeScreen';
import signUp from './src/screens/signUp/signUp';
import onBoarding1 from './src/screens/onBoarding1/onBoarding1';
import onBoarding3 from './src/screens/onBoarding3/onBoarding3';
AppRegistry.registerComponent(appName, () => onBoarding3);
