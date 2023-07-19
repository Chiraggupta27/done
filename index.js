/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Navigation from './src/Navigation/navigation';
import signUp from './src/screens/signUp/signUp'
AppRegistry.registerComponent(appName, () => signUp);
