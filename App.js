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
import './src/assets/i18n';
import WhereTo from './src/Screens/WhereTo';

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
            <WhereTo />
          </SafeAreaProvider>
        </NavigationContainer>
      </React.Suspense>
    </Provider>
  );
};
const appStyle = StyleSheet.create({flex: 1});

export default App;
