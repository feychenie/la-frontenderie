import { style } from '@vanilla-extract/css';
import { vars as themeVars } from '$lib/styles/theme-default.css';
export const link = style({
	color: themeVars.colour.primary
});
