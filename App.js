import {Provider} from 'react-redux';
import React from 'react';
import {store} from './store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator, KeyboardAvoidingView, Platform} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <React.Suspense fallback={<ActivityIndicator size="large" />}>
        <NavigationContainer>
          <SafeAreaProvider>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={{flex: 1}}
              keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0} />
          </SafeAreaProvider>
        </NavigationContainer>
      </React.Suspense>
    </Provider>
  );
};

export default App;
