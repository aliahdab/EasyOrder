import {Provider} from 'react-redux';
import React from 'react';
import {store} from './store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import HomeScreen from './src/Screens/HomeScreen';
import './src/assets/i18n';

const App = () => {
  return (
    <Provider store={store}>
      <React.Suspense fallback={<ActivityIndicator size="large" />}>
        <NavigationContainer>
          <SafeAreaProvider>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={appStyle}
              keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
            />
            <HomeScreen />
          </SafeAreaProvider>
        </NavigationContainer>
      </React.Suspense>
    </Provider>
  );
};
const appStyle = StyleSheet.create({flex: 1});

export default App;
