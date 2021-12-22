import { style } from '@vanilla-extract/css';

export const container = style({
	display: 'flex',
	maxWidth: '100%',
	'@media': {
		'screen and (min-width:576px)': {
			maxWidth: '540px'
		},
		'screen and (min-width: 768px)': {
			maxWidth: '720px'
		},
		'screen and (min-width: 992px)': {
			maxWidth: '960px'
		},
		'screen and (min-width: 1200px)': {
			maxWidth: '1140px'
		},
		'screen and (min-width: 1400px)': {
			maxWidth: '1320px'
		}
	}
});

export const centered = style({
	marginInlineStart: 'auto',
	marginInlineEnd: 'auto'
});
