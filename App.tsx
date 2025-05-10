import React from 'react';
import {View} from 'react-native';
import Login from './src/screens/Login';
import RootStack from './src/navigation/RootStack';

function App(): React.JSX.Element {
  return (
    <View style={{flex: 1}}>
      <RootStack />
    </View>
  );
}

export default App;
