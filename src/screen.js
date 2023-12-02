import React, { useEffect } from "react"
import { View, StyleSheet, Text, Dimensions } from 'react-native'
import { useSelector, useDispatch } from "react-redux";

import { THEME } from "./theme";
import { fontSize, thousandSeparator } from "./functions/functions";

import { MainKeyboard } from "./components/MainKeyboard";
import { SecondKeyboard } from "./components/SecondKeyboard";
import { screenWidthСhange } from "./store/slices/screenWidthSlice";
import { delEndNum } from "./store/slices/calcSlice";

export function Screen() {
	const dispatch = useDispatch()

	useEffect(() => {
		const update=()=> {
		const widthWindow = Dimensions.get('window').width;
		const w = widthWindow > 810 ? 810 : widthWindow;
			dispatch(screenWidthСhange(w))
		}
		const screenListener = Dimensions.addEventListener('change', () => {
			update();
		});
		return () => {
			screenListener.remove();
		}
	})

	
	const result = useSelector(state => state.calculate.result)
	const rad = useSelector(state => state.calculate.rad)
	const twoNDmode = useSelector(state => state.calculate.twoNDmode)
	const twoNDmodeRes = useSelector(state => state.calculate.twoNDmodeRes)
	
	const screen = useSelector(state => state.screenWidth.screen)
	const styleApp = useSelector(state => state.screenWidth.styleApp)
	
	return (
		<View style={[styles.container, styleApp.container]}>
			<View>
				<View style={styles.screenWrap}>
					<Text style={[styles.textRad, { fontSize: fontSize(result, screen) - 20 }]}>
						{rad && screen > 450 && 'Rad'}
					</Text>
					<Text onPress={() => { dispatch(delEndNum()) }}
						style={[styles.text, { fontSize: fontSize(result, screen) }]}>
						{twoNDmode ? twoNDmodeRes.length > 0 ? twoNDmodeRes : '0': thousandSeparator(result)}
					</Text>
				</View>
				<View style={[styles.buttonsWrap]}>
					{screen > 450 ?
						<SecondKeyboard /> :
						null
					}
					<MainKeyboard/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: THEME.BLACK_MAIN,
		alignItems: 'center',
		paddingBottom: 20
	},
	screenWrap: {
		flexDirection: 'row',
		alignItems:'flex-end',
		justifyContent: 'space-between',
		marginBottom: 10,
	},
	textRad: {
		fontFamily: 'inter-Light',
		color: THEME.TEXT_COLOR,
		paddingLeft:15
	},
	text: {
		fontFamily: 'inter-Light',
		color: THEME.TEXT_COLOR,
		paddingRight: 15,
	},
	buttonsWrap: {
		flexDirection: 'row',
		alignContent: 'center',
		justifyContent: 'center',
		gap: 10
	},
});
