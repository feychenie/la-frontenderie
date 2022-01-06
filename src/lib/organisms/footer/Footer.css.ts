import { style } from '@vanilla-extract/css';
import { vars as themeVars } from '$lib/styles/theme-default.css';
import { globalThemeVars } from '$lib/styles/styles.css';
import { backgroundImages } from 'polished';

export const footer = style({
	position: 'relative',
	marginTop: 'auto',
	// paddingBlock: globalThemeVars.space['3x']
});

export const pattern = style({
	fill: themeVars.color.activeAlpha20
});

export const illustration = style({
	display: 'block',
	position: 'absolute',
	height: '20vh',
	bottom: '100%',
	right: '0',
	left: '0',
	selectors: {
		'&::before': {
			content: '""',
			position: 'absolute',
			zIndex: '1',
			inset: '0',
			backgroundImage:
				'radial-gradient(ellipse at 50% 100%, rgba(16,12,45,0) 0%, rgba(16,12,45,1) 64%);'
		}
	}
});
