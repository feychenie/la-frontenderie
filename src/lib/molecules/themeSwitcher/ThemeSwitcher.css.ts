import { style } from '@vanilla-extract/css';
import { themeSwitcherPosition } from '$lib/styles/vars.css';
import { globalThemeVars } from '$lib/styles/styles.css';

export const themeSwitcher = style({
	vars: {
		[themeSwitcherPosition]: '0'
	}
});

export const inner = style({
	transition: 'transform .2s ease-out',
	transform: `translate3d(0, ${themeSwitcherPosition}, 0)`
});

export const icons = style({
	overflow: 'hidden',
	width: '2rem',
	height: '2rem',
	padding: globalThemeVars.space['1x']
});

export const icon = style({
	width: '100%',
	height: '100%'
});
