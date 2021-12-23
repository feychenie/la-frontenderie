import { style } from '@vanilla-extract/css';
import { globalThemeVars } from '$lib/styles/styles.css';

export const header = style({
	padding: globalThemeVars.space['3x']
});
