import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
	colour: {
		primary: '#86198f',
		white: '#242423',
		light: '#333533',
		dark: '#CFDBD5',
		black: '#E8EDDF'
	}
});
