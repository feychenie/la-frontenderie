import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
	colour: {
		primary: '#292283',
		secondary: '#19ffff',
		alternative: '#ff9801',
		light: '#ed442e',
		dark: '#ea1e63'
	}
});
