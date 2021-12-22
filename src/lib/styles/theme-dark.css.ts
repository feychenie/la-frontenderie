import { createTheme } from '@vanilla-extract/css';
import { vars as defaultThemeVars } from '$lib/styles/theme-default.css';

export const darkTheme = createTheme(defaultThemeVars, {
	colour: {
		primary: 'blue',
		secondary: 'blue',
		alternative: 'blue',
		light: 'blue',
		dark: '#ff9801'
	}
});
