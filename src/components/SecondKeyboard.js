import React from "react"
import { View, StyleSheet, Image } from 'react-native'
import { useDispatch, useSelector } from "react-redux"
import { AppButton } from "./AppButton"
import { THEME } from "../theme"

import { COS, COSH, EE_X, SIN, SINH, TAN, TANH, X_Y_DEGREE, Y_ROOT_X } from "../store/constants"

import {
	closeParenthese,
	cubeRoot,
	eNapier,
	eeX,
	exponent,
	factorialX,
	getPi,
	log10X,
	logX,
	memoryAdd,
	memoryClear,
	memoryEqual,
	memoryMinus,
	oneX,
	openParenthese,
	radX,
	randNum,
	sqrtRoot,
	twoND,
	x10YDegree,
	xSecondDegree,
	xSinCosTan,
	xSinhCoshTanh,
	xThirdDegree,
	xYDegree,
	yRoot
} from "../store/slices/calcSlice"

export function SecondKeyboard() {

	const dispatch = useDispatch()

	const styleApp  = useSelector(state => state.screenWidth.styleApp)
  const memoryRes = useSelector(state => state.calculate.memoryRes)
	const operator = useSelector(state => state.calculate.operator)
	const rad = useSelector(state => state.calculate.rad)
	const twoNDmode = useSelector(state => state.calculate.twoNDmode)

  const secondBtns = [
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				dispatch(openParenthese())
			},
			content: '('
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				dispatch(closeParenthese())
			},
			content: ')'
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				dispatch(memoryClear())
			},
			content: 'mc'
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				dispatch(memoryAdd())
			},
			content: 'm+'
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				dispatch(memoryMinus())
			},
			content: 'm-'
		},
		{
		styleBtn:
				memoryRes.length === 0
					? { backgroundColor: THEME.BTN_SECOND }
					: { backgroundColor: THEME.BTN_ACTIVE },
			onPress: () => {
				dispatch(memoryEqual())
			},
			content: 'mr'
		},
		{
			styleBtn:
				twoNDmode
					? { backgroundColor: THEME.BTN_ACTIVE } :
					{ backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				dispatch(twoND())
			},
			content: (
				<Image
					source={require('../../assets/icons_btn/icon_btn_2.png')}
					fadeDuration={0}
					resizeMode={'contain'}
					style={{ width: styleApp.mainBtnTxt.fontSize - 2, height: styleApp.mainBtnTxt.fontSize - 7}}
				/>
			),
			img: true
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				dispatch(xSecondDegree())
			},
			content: (
				<Image
					source={require('../../assets/icons_btn/icon_btn_3.png')}
					fadeDuration={0}
					resizeMode={'contain'}
					style={{ width: styleApp.mainBtnTxt.fontSize - 2, height: styleApp.mainBtnTxt.fontSize - 7}}
				/>
			),
			img: true
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				dispatch(xThirdDegree())
			},
			content: (
				<Image
					source={require('../../assets/icons_btn/icon_btn_4.png')}
					fadeDuration={0}
					resizeMode={'contain'}
					style={{ width: styleApp.mainBtnTxt.fontSize - 2, height: styleApp.mainBtnTxt.fontSize - 7}}
				/>
			),
			img: true
		},
		{
			styleBtn:
				operator === X_Y_DEGREE
					? { backgroundColor: THEME.BTN_ACTIVE }
					: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				dispatch(xYDegree())
			},
			content: (
				<Image
					source={require('../../assets/icons_btn/icon_btn_5.png')}
					fadeDuration={0}
					resizeMode={'contain'}
					style={{ width: styleApp.mainBtnTxt.fontSize - 2, height: styleApp.mainBtnTxt.fontSize - 7}}
				/>
			),
			img: true
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				dispatch(exponent())
			},
			content: (
				<Image
					source={require('../../assets/icons_btn/icon_btn_6.png')}
					fadeDuration={0}
					resizeMode={'contain'}
					style={{ width: styleApp.mainBtnTxt.fontSize - 2, height: styleApp.mainBtnTxt.fontSize - 7}}
				/>
			),
			img: true
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				dispatch(x10YDegree())
			},
			content: (
				<Image
					source={require('../../assets/icons_btn/icon_btn_7.png')}
					fadeDuration={0}
					resizeMode={'contain'}
					style={{ width: styleApp.mainBtnTxt.fontSize - 2, height: styleApp.mainBtnTxt.fontSize - 7}}
				/>
			),
			img: true
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				dispatch(oneX())
			},
			content: (
				<Image
					source={require('../../assets/icons_btn/icon_btn_8.png')}
					fadeDuration={0}
					resizeMode={'contain'}
					style={{ width: styleApp.mainBtnTxt.fontSize - 9, height: styleApp.mainBtnTxt.fontSize - 10}}
				/>
			),
			img: true
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				dispatch(sqrtRoot())
			},
			content: (
				<Image
					source={require('../../assets/icons_btn/icon_btn_9.png')}
					fadeDuration={0}
					resizeMode={'contain'}
					style={{ width: styleApp.mainBtnTxt.fontSize - 8, height: styleApp.mainBtnTxt.fontSize - 8}}
				/>
			),
			img: true
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				dispatch(cubeRoot())
			},
			content: (
				<Image
					source={require('../../assets/icons_btn/icon_btn_10.png')}
					fadeDuration={0}
					resizeMode={'contain'}
					style={{ width: styleApp.mainBtnTxt.fontSize - 8, height: styleApp.mainBtnTxt.fontSize - 8}}
				/>
			),
			img: true
		},
		{
			styleBtn:
				operator === Y_ROOT_X
					? { backgroundColor: THEME.BTN_ACTIVE }
					: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				dispatch(yRoot())
			},
			content: (
				<Image
					source={require('../../assets/icons_btn/icon_btn_11.png')}
					fadeDuration={0}
					resizeMode={'contain'}
					style={{ width: styleApp.mainBtnTxt.fontSize - 8, height: styleApp.mainBtnTxt.fontSize - 8}}
				/>
			),
			img: true
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				dispatch(logX())
			},
			content: 'ln'
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				dispatch(log10X())
			},
			content: (
				<Image
					source={require('../../assets/icons_btn/icon_btn_12.png')}
					fadeDuration={0}
					resizeMode={'contain'}
					style={{ width: styleApp.mainBtnTxt.fontSize-1, height: styleApp.mainBtnTxt.fontSize-8}}
				/>
			),
			img: true
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				dispatch(factorialX())
			},
			content: 'x!'
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				dispatch(xSinCosTan(SIN))
			},
			content: 'sin'
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				dispatch(xSinCosTan(COS))
			},
			content: 'cos'
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				dispatch(xSinCosTan(TAN))
			},
			content: 'tan'
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				dispatch(eNapier())
			},
			content: 'e'
		},
		{
			styleBtn:
				operator === EE_X
					? { backgroundColor: THEME.BTN_ACTIVE }
					: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				dispatch(eeX())
			},
			content: 'EE'
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				dispatch(radX())
			},
			content: rad ? 'Deg' : 'Rad'
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				dispatch(xSinhCoshTanh(SINH))
			},
			content: 'sinh'
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				dispatch(xSinhCoshTanh(COSH))
			},
			content: 'cosh'
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				dispatch(xSinhCoshTanh(TANH))
			},
			content: 'tanh'
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				dispatch(getPi())
			},
			content: 'π'
		},
		{
			styleBtn: { backgroundColor: THEME.BTN_SECOND },
			onPress: () => {
				dispatch(randNum())
			},
			content: 'Rand'
		}
	];
  
  return (
    <View style={[styles.buttonSecondWrap, styleApp.buttonSecondWrap ]}>
      {secondBtns.map((el,i )=> {
        return (
					<AppButton
						key={i * 10}
						appOnPress={el.onPress}
						styleBtn={el.styleBtn ? { ...el.styleBtn, ...styleApp.mainBtn } : { ...styleApp.mainBtn }}
						styleTxt={
							el.styleTxt
								? { ...el.styleTxt, fontSize: styleApp.mainBtnTxt.fontSize - 10 }
								: { fontSize: styleApp.mainBtnTxt.fontSize - 10 }
						}
					>
						{el.content}
					</AppButton>
				);
      })}
    </View>
  )
}

const styles = StyleSheet.create({
	buttonSecondWrap: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignContent: 'center',
		justifyContent: 'center',
		gap: 10
	}
});