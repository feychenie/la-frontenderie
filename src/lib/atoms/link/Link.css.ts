import { style } from '@vanilla-extract/css';

import { vars as themeVars } from '$lib/styles/theme-default.css';

export const link = style({
	color: themeVars.color.active,
	textDecoration: 'none'
});

export const userBlockClass = style({});

export const bleedClass = style({
	selectors: {
		'&::before': {
			content: '""',
			position: 'absolute',
			inset: '0'
		}
	}
});
