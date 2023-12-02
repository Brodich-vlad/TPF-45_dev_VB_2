import {
  ADD,
  COS,
  COSH,
  DIVIS,
  EE_X,
  MINUS,
  MULT,
  SIN,
  SINH,
  TAN,
  TANH,
  X_Y_DEGREE,
  Y_ROOT_X
} from "../store/constants";

export const updateStyleApp = (widthWindow) => {
  const w = widthWindow > 810 ? 810 : widthWindow;
  if (w < 450) {
    return {
      container: {
        justifyContent: 'flex-end',
        paddingBottom: 20
      },
      mainBtn: {
        width: w / 4 - 15,
        height: w / 4 - 15,
        borderRadius: (w / 4 - 15) / 2
      },
      mainBtnTxt: {
        fontSize: (w / 4 - 15) / 2 - 3
      },
      mainBtnNull: {
        width: (w / 4 - 15) * 2 + 10,
        borderRadius: (w / 4 - 15) / 2,
        justifyContent: 'flex-start',
        paddingLeft: (w / 4 - 15) / 3 + 6
      },
      buttonWrap: {
        width: (w / 4 - 15) * 4 + 30
      },
      buttonSecondWrap: {
        width: (w / 4 - 15) * 6 + 50
      }
    }
  }
  else {
    return {
      container: {
        justifyContent: 'center',
        paddingBottom: 0
      },
      mainBtn: {
        width: w / 10 - 15,
        height: w / 10 - 33,
        borderRadius: (w / 10 - 33) / 2
      },
      mainBtnTxt: {
        fontSize: (w / 10 - 15) / 2 - 8
      },
      mainBtnNull: {
        width: (w / 10 - 15) * 2 + 10,
        borderRadius: (w / 10 - 33) / 2,
        justifyContent: 'flex-start',
        paddingLeft: (w / 10 - 15) / 3 + 6
      },
      buttonWrap: {
        width: (w / 10 - 15) * 4 + 30
      },
      buttonSecondWrap: {
        width: (w / 10 - 15) * 6 + 50
      }
    }
  }
}

export const fontSize = (data,screen) => {
  if (screen > 450) {
    return (screen / 10 - 15) /2
  }
  else {
    return data.length > 5 && data.length < 11 ? (screen / 4 - 15) / 2 : data.length > 10 ? (screen / 4 - 15)  / 2 - 5 : (screen / 4 - 15)  - 5;
  }
}

export const resValid =(a, data, flag) => {
  if (a !== '.' && data[0] === '0' && data[1] !== '.') {
    return flag ? '': a
	} else if (a === '.') {
		if (data === '') {
			return '0.'
		}
		else return flag ? '0.': data.includes('.') ? data : [...data, a].join('');
  }
   else {
    return flag ? a : [...data, a].join('');
  }
};

export const deleteEndNum = (str) => {
	if (str.length > 1) {
		return str.slice(0, -1);
	} else if (str.length === 1) {
		return ''
	}
}

export const deleteModeResEndNum = (arr) => {
	if (arr.length > 1) {
		return arr.filter((el, i) => i !== arr.length - 1)
	} else{
		return []
	}
}

export const mathematOperations = (arg1, arg2, oper, flagPer) => {
	switch (oper) {
		case DIVIS :
			if (arg2 === '0') {
				return 'Error'
			}
			else if (flagPer) {
				return	String(Number(arg1) / (Number(arg1)/ 100 * Number(arg2)));
			}
			else return String(Number(arg1) / Number(arg2));

		case MULT:
			if (flagPer) { 
				return	String((Number(arg1)/100* Number(arg2)));
			}
			else return String(Number(arg1) * Number(arg2));
			
		case MINUS:
			if (flagPer) {
				return String(Number(arg1) - (Number(arg1)/100 * Number(arg2)));
			}
			else return String(Number(arg1) - Number(arg2));
			
		case ADD:
			if (flagPer) {
				return String(Number(arg1) + (Number(arg1)/100 * Number(arg2)));
			}

			else return String(Number(arg1) + Number(arg2));
			
		case X_Y_DEGREE:
			return String(Math.pow(Number(arg1), Number(arg2)));
		
		case Y_ROOT_X:
      return String(yRootX(Number(arg1), Number(arg2)))
    
    case EE_X:
      return String(Number(arg1)* Math.pow(10, Number(arg2)))
    
		default:
			return arg2;
	}
}

export const negativPoitiv = (str) => {
	if (str === '0' || str === '') {
		return str;
	}
	else if (str[0] === '-') {
		return str.slice(1,str.length)
	}
	else return `-${str}`
}

export function yRootX(x,y) {
  if (x < 0 && y % 2 === 1) {
    return -Math.pow(-x,1/y)
  }
  else return Math.pow(x,1/y)
}

export const factorial = (n) => {
	return String(n ? n * factorial(n-1) : 1)
}

export const numSinCosTan = (flag, rad, num) => {
  const n = rad ?
    Number(num) :
    toRad(Number(num))
  if (flag === SIN) {
    return String(Math.sin(n))
  }
  else if (flag === COS) {
    return String(Math.cos(n))
  
  } else if (flag === TAN) {
    return String(Math.tan(n))
  }
  else return num
}

export const numSinhCoshTanh = (flag, num) => {
  if (flag === SINH) {
    return String(Math.sinh(num))
  }
  else if (flag === COSH) {
    return String(Math.cosh(num))
  
  } else if (flag === TANH) {
    return String(Math.tanh(num))
  }
  else return num
}

export function getNapier() {
  return Math.E;
}

export function toRad(n) {
  return n * Math.PI / 180
}

export function toDeg(n) {
  return n * 180/Math.PI
}
	// Функція для відображення великих цілих або не цілих чисел.Приймає число  розділяє тисячі пробілами та міняє крапку на кому.(Підходить для відображення: ціна, рейтинг, статистика).
export function thousandSeparator(str) {
  const reg = /\d{1,3}(?=(\d{3})+(?!\d))/g;
  if (str==='') {
    return '0'
  }
  else return str.replace(reg, '$& ').replace(/\./g, ',');
}