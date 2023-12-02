import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import * as Font from 'expo-font'
import store from './src/store'
import { Screen } from './src/screen'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { THEME } from './src/theme'

export default function App() {
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
    async function prepare() {
      try {
     await Font.loadAsync({
				'inter-Light': require('./assets/fonts/Inter-Light.ttf'),
			})
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }
    prepare();
	}, []);
	
  if (!isReady) {
    return  <View style={[styles.container]}>
      <ActivityIndicator size="large" color={THEME.BTN_ORANGE} />
  </View>
  }

	return (
		<Provider store={store}>
			<Screen />
		</Provider>
	);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
});
