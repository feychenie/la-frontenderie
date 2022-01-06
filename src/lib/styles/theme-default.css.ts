import { createTheme } from '@vanilla-extract/css';
import { transparentize, shade } from 'polished';
const yellow = '#ff9801';
const teal = '#19ffff';
const red = '#fb422e';
const pink = '#e12265';
const blue = '#1e175a';
const darkBlue = '#100c2d';

const white = '#ecebfa';
const black = '#111827';

export const [themeClass, vars] = createTheme({
	color: {
		title: teal,
		text: white,
		active: yellow,
		activeDark: shade(0.4, yellow),
		activeDarker: shade(0.8, yellow),
		activeAlpha20: transparentize(0.3, yellow),
		appBg: darkBlue,
		contentBg: blue,
		contentBgDark: shade(0.1, blue),
		contentBgDarker: shade(0.2, blue)
	}
});
