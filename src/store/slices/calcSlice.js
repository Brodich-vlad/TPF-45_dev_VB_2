import { createSlice } from '@reduxjs/toolkit'
import {
  deleteEndNum,
  deleteModeResEndNum,
  factorial,
  getNapier,
  mathematOperations,
  negativPoitiv,
  numSinCosTan,
  numSinhCoshTanh,
  resValid,
  toDeg,
  toRad
} from '../../functions/functions';
import { initialStateCalc } from '../initialStateCalc ';
import {
  ADD,
  DIVIS,
  EE_X,
  MINUS,
  MULT,
  X_Y_DEGREE,
  Y_ROOT_X
} from '../constants';

const calcSlice = createSlice({
	name: 'inputNumSlice',
	initialState: initialStateCalc,
	reducers: {
		inputNum(state, action) {
			state.result = state.result.length < 12 ? resValid(action.payload, state.result, state.argumFlag) : state.result;
			state.argumFlag = false;
			state.twoNDmodeRes = state.twoNDmode ? [...state.twoNDmodeRes, action.payload] : [];
		},
		negativPositivNum(state) {
			state.result = negativPoitiv(state.result);
		},
		divis(state) {
			state.operator = DIVIS;
			state.argum = [...state.result].join('');
			state.argumFlag = true;
			state.twoNDmodeRes = state.twoNDmode ? [...state.twoNDmodeRes, '/'] : [];
		},

		mult(state) {
			state.operator = MULT;
			state.argum = [...state.result].join('');
			state.argumFlag = true;
			state.twoNDmodeRes = state.twoNDmode ? [...state.twoNDmodeRes, '*'] : [];
		},
		minus(state) {
			state.operator = MINUS;
			state.argum = [...state.result].join('');
			state.argumFlag = true;
			state.twoNDmodeRes = state.twoNDmode ? [...state.twoNDmodeRes, '-'] : [];
		},
		add(state) {
			state.operator = ADD;
			state.argum = [...state.result].join('');
			state.argumFlag = true;
			state.twoNDmodeRes = state.twoNDmode ? [...state.twoNDmodeRes, '+'] : [];
		},
		equal(state) {
			if (state.argum && state.operator && !state.openParentFlag) {
				(state.result = state.twoNDmode
					? String(eval([...state.twoNDmodeRes].join('')))
					: mathematOperations(state.argum, state.result, state.operator)),
					(state.operator = null),
					(state.argum = null),
					(state.argumFlag = true),
					(state.twoNDmode = false),
					(state.twoNDmodeRes = []);
			}
		},
		percentage(state) {
			if (state.argum && state.operator) {
				state.result = mathematOperations(state.argum, state.result, state.operator, true);
				state.operator = null;
				state.argum = null;
				state.argumFlag = true;
			}
		},
		delEndNum(state) {
			state.result = deleteEndNum(state.result);
			state.twoNDmodeRes = deleteModeResEndNum(state.twoNDmodeRes);
		},
		clearResult(state) {
			state.result = '';
			state.twoNDmodeRes = deleteModeResEndNum(state.twoNDmodeRes);
		},
		clearAll(state) {
			state.result = '';
			state.argum = null;
			state.operator = null;
			state.argumFlag = false;
			state.rad = false;
			state.twoNDmode = false;
			state.twoNDmodeRes = [];
    },
    
		openParenthese(state) {
			state.twoNDmodeRes = state.twoNDmode ? [...state.twoNDmodeRes, '('] : [];
			state.openParentFlag = true;
		},
		closeParenthese(state) {
			if (state.openParentFlag) {
				state.twoNDmodeRes = state.twoNDmode ? [...state.twoNDmodeRes, ')'] : [];
				state.openParentFlag = false;
			}
		},
		memoryClear(state) {
			state.memoryRes = '';
			state.operator = null;
			state.argum = null;
			state.argumFlag = true;
		},
		memoryAdd(state) {
			state.result = mathematOperations(state.argum, state.result, state.operator);
			state.memoryRes = String(
				Number(state.memoryRes) + Number(mathematOperations(state.argum, state.result, state.operator))
			);
			state.operator = null;
			state.argum = null;
			state.argumFlag = true;
		},
		memoryMinus(state) {
			state.result = mathematOperations(state.argum, state.result, state.operator);
			state.memoryRes = String(
				Number(state.memoryRes) - Number(mathematOperations(state.argum, state.result, state.operator))
			);
			state.operator = null;
			state.argum = null;
			state.argumFlag = true;
		},
		memoryEqual(state) {
			state.result = state.memoryRes;
			state.memoryFlag = true;
		},

		twoND(state) {
			state.twoNDmode = !state.twoNDmode;
			state.twoNDmodeRes = state.twoNDmode ? state.twoNDmodeRes : [];
			state.result = state.twoNDmode ? '' : state.result;
			state.operator = null;
			state.argum = null;
		},
		xSecondDegree(state) {
			state.result = String(Math.pow(Number(state.result), 2));
			state.operator = null;
			state.argum = null;
			state.argumFlag = true;
		},
		xThirdDegree(state) {
			state.result = String(Math.pow(Number(state.result), 3));
			state.operator = null;
			state.argum = null;
			state.argumFlag = true;
		},
		xYDegree(state) {
			state.operator = X_Y_DEGREE
			state.argum = [...state.result].join('')
			state.argumFlag = true
		},
		exponent(state) {
			state.result = String(Math.exp(Number(state.result)));
			state.operator = null;
			state.argum = null;
			state.argumFlag = true;
		},
		x10YDegree(state) {
			state.result = String(Math.pow(10, Number(state.result)));
			state.operator = null;
			state.argum = null;
			state.argumFlag = true;
		},

		oneX(state) {
			state.result = String(1 / Number(state.result));
			state.operator = null;
			state.argum = null;
			state.argumFlag = true;
		},
		sqrtRoot(state) {
			state.result = Number(state.result) > 0 ? String(Math.sqrt(Number(state.result))) : 'Error: X < 0';
			state.operator = null;
			state.argum = null;
			state.argumFlag = true;
		},
		cubeRoot(state) {
			state.result = Number(state.result) > 0 ? String(Math.cbrt(Number(state.result))) : 'Error: X < 0';
			state.operator = null;
			state.argum = null;
			state.argumFlag = true;
		},
		yRoot(state) {
			state.operator = Y_ROOT_X;
			state.argum = [...state.result].join('');
			state.argumFlag = true;
		},
		logX(state) {
			state.result = Number(state.result) < 0 ? 'Error: x < 0' : String(Math.log(Number(state.result)));
			state.operator = null;
			state.argum = null;
			state.argumFlag = true;
		},
		log10X(state) {
			state.result = Number(state.result) < 0 ? 'Error: x < 0' : String(Math.log10(Number(state.result)));
			state.operator = null;
			state.argum = null;
			state.argumFlag = true;
		},

		factorialX(state) {
			(state.result = factorial(Number(state.result))), (state.operator = null);
			state.argum = null;
			state.argumFlag = true;
		},
		xSinCosTan(state, action) {
			state.result = numSinCosTan(action.payload,state.rad,state.result)
			state.operator = null;
			state.argum = null;
			state.argumFlag = true;
		},
		eNapier(state) {
			state.result = String(getNapier());
			state.operator = null;
			state.argum = null;
			state.argumFlag = true;
		},
		eeX(state) {
			state.operator = EE_X;
			state.argum = [...state.result].join('');
			state.argumFlag = true;
		},

		radX(state) {
			state.rad = !state.rad;
			state.result = state.result && state.rad ?
				String(toRad(Number(state.result))) :
				String(toDeg(Number(state.result)))
		},
		xSinhCoshTanh(state,action) {
			state.result = numSinhCoshTanh(action.payload, state.result)
			state.operator = null;
			state.argum = null;
			state.argumFlag = true;
		},
		getPi(state) {
			state.result = String(Math.PI);
			state.operator = null;
			state.argum = null;
			state.argumFlag = true;
		},
		randNum(state) {
			state.result = String(Math.random())
		}
	}
});
export const {
	inputNum,
	delEndNum,
	negativPositivNum,
	divis,
	mult,
	minus,
	add,
	equal,
	percentage,
	clearResult,
	clearAll,
	openParenthese,
	closeParenthese,
	memoryClear,
	memoryAdd,
	memoryMinus,
	memoryEqual,
	twoND,
	xSecondDegree,
	xThirdDegree,
	xYDegree,
	exponent,
	x10YDegree,
	oneX,
	sqrtRoot,
	cubeRoot,
	yRoot,
	logX,
	log10X,

	factorialX,
	xSinCosTan,
	eNapier,
	eeX,

	radX,
	xSinhCoshTanh,
	getPi,
	randNum
} = calcSlice.actions;
export default calcSlice.reducer