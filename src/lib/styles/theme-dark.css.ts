import { createTheme } from '@vanilla-extract/css';
import { vars as defaultThemeVars } from '$lib/styles/theme-default.css';

export const darkTheme = createTheme(defaultThemeVars, {
	colour: {
		primary: '#F5CB5C',
		white: '#E8EDDF',
		light: '#CFDBD5',
		dark: '#333533',
		black: '#242423'
	}
});
