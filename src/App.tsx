import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

//Components
import {SafeAreaView, StatusBar} from 'react-native';
import AppRoutes from './routes/AppRoutes';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'light-content'}
        translucent
      />
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
