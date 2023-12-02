import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { View, StyleSheet, Image } from 'react-native'
import { AppButton } from "./AppButton"
import Ionicons from '@expo/vector-icons/Ionicons'
import { Feather } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

import { THEME } from "../theme";
import { ADD, DIVIS, MINUS, MULT } from "../store/constants"
import {
	add,
	clearAll,
	clearResult,
	divis,
	equal,
	inputNum,
	minus,
	mult,
	negativPositivNum,
	percentage
} from "../store/slices/calcSlice"

export function MainKeyboard() {

	const dispatch = useDispatch()

	const result= useSelector(state => state.calculate.result)
	const operator= useSelector(state => state.calculate.operator)
	const twoNDmode = useSelector(state => state.calculate.twoNDmode)
	const twoNDmodeRes = useSelector(state => state.calculate.twoNDmodeRes)
	const styleApp  = useSelector(state => state.screenWidth.styleApp)

  const mainBtns = [
		{
			styleBtn: { backgroundColor: THEME.BTN_GRAY },
			styleTxt: { color: THEME.BLACK_MAIN, fontSize: styleApp.mainBtnTxt.fontSize - 5 },
			onPress:
				twoNDmode ?
					twoNDmodeRes.length === 0 ?
						() => {
							dispatch(clearAll());
						} :
						() => {
							dispatch(clearResult());
						} :
					result.length === 0 ?
						() => {
							dispatch(clearAll());
					  }:
						() => {
							dispatch(clearResult());
					  },

			content: twoNDmode ?
				twoNDmodeRes.length === 0 ? 'AC' : 'C' :
				result.length === 0 ? 'AC' : 'C'
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_GRAY, fontSize: styleApp.mainBtnTxt.fontSize - 4 },
			styleTxt: { color: THEME.BLACK_MAIN },
			onPress: () => {
				dispatch(negativPositivNum());
			},
			content: (
				<Image
					source={require('../../assets/icons_btn/icon_btn_1.png')}
					fadeDuration={0}
					resizeMode={'contain'}
					style={{ width: styleApp.mainBtnTxt.fontSize - 3, height: styleApp.mainBtnTxt.fontSize - 3 }}
				/>
			),
			img: true
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_GRAY },
			styleTxt: { color: THEME.BLACK_MAIN, fontSize: styleApp.mainBtnTxt.fontSize - 4 },
			onPress: () => {
				dispatch(percentage());
			},
			content: '%'
		},
		{
			styleBtn:
				operator === DIVIS
					? { backgroundColor: THEME.BTN_ORANGE, opacity: 0.5 }
					: { backgroundColor: THEME.BTN_ORANGE },
			onPress: () => {
				dispatch(divis());
			},
			content: (
				<MaterialCommunityIcons
					color={'rgb(252, 252, 252)'}
					name="division"
					size={styleApp.mainBtnTxt.fontSize + 2} />
			),
			img: true
		},
		{
			onPress: () => {
				dispatch(inputNum('7'));
			},
			content: '7'
		},
		{
			onPress: () => {
				dispatch(inputNum('8'));
			},
			content: '8'
		},
		{
			onPress: () => {
				dispatch(inputNum('9'));
			},
			content: '9'
		},
		{
			styleBtn:
				operator === MULT
					? { backgroundColor: THEME.BTN_ORANGE, opacity: 0.5 }
					: { backgroundColor: THEME.BTN_ORANGE },
			onPress: () => {
				dispatch(mult());
			},
			content: <AntDesign
				color={'rgb(252, 252, 252)'}
				name="close"
				size={styleApp.mainBtnTxt.fontSize + 2} />,
			img: true
		},
		{
			onPress: () => {
				dispatch(inputNum('4'));
			},
			content: '4'
		},
		{
			onPress: () => {
				dispatch(inputNum('5'));
			},
			content: '5'
		},
		{
			onPress: () => {
				dispatch(inputNum('6'));
			},
			content: '6'
		},
		{
			styleBtn:
				operator === MINUS
					? { backgroundColor: THEME.BTN_ORANGE, opacity: 0.5 }
					: { backgroundColor: THEME.BTN_ORANGE },
			onPress: () => {
				dispatch(minus());
			},
			content: <Feather
				color={'rgb(252, 252, 252)'}
				name="minus"
				size={styleApp.mainBtnTxt.fontSize + 2} />,
			img: true
		},
		{
			onPress: () => {
				dispatch(inputNum('1'));
			},
			content: '1'
		},
		{
			onPress: () => {
				dispatch(inputNum('2'));
			},
			content: '2'
		},
		{
			onPress: () => {
				dispatch(inputNum('3'));
			},
			content: '3'
		},
		{
			styleBtn:
				operator === ADD
					? { backgroundColor: THEME.BTN_ORANGE, opacity: 0.5 }
					: { backgroundColor: THEME.BTN_ORANGE },
			onPress: () => {
				dispatch(add());
			},
			content: <Ionicons
				color={'rgb(252, 252, 252)'}
				name="ios-add"
				size={styleApp.mainBtnTxt.fontSize + 2} />,
			img: true
		},
		{
			styleBtn: {
				...styleApp.mainBtnNull
			},
			onPress: () => {
				dispatch(inputNum('0'));
			},
			content: '0'
		},
		{
			onPress: () => {
				dispatch(inputNum('.'));
			},
			content: ','
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_ORANGE },
			onPress: () => {
				dispatch(equal());
			},
			content: (
				<MaterialCommunityIcons
					color={'rgb(252, 252, 252)'}
					name="equal"
					size={styleApp.mainBtnTxt.fontSize + 2} />
			),
			img: true
		}
	];
  return (
    <View style={[styles.buttonWrap,styleApp.buttonWrap ]}>
      {mainBtns.map((el,i)=> {
        return (
					<AppButton
						key={i * 22}
						appOnPress={el.onPress}
						styleBtn={el.styleBtn ? { ...styleApp.mainBtn, ...el.styleBtn } : { ...styleApp.mainBtn }}
						styleTxt={
							el.styleTxt ? { ...styleApp.mainBtnTxt, ...el.styleTxt } : { ...styleApp.mainBtnTxt}
						}
						img={el.img}
					>
						{el.content}
					</AppButton>
				);
      })}
    </View>
  )
}
const styles = StyleSheet.create({
	buttonWrap: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignContent: 'center',
		justifyContent: 'center',
		gap: 10
	},
});