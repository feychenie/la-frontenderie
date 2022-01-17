import { style } from '@vanilla-extract/css';

export const container = style({
	display: 'flex',
	flexDirection: 'column',
	maxWidth: '100%',
	width: '100%',
	'@media': {
		'screen and (min-width:576px)': {
			maxWidth: '540px'
		},
		'screen and (min-width: 768px)': {
			maxWidth: '720px'
		}
	}
});

export const centered = style({
	marginInlineStart: 'auto',
	marginInlineEnd: 'auto'
});

export const skin = style({
	backgroundImage: 'url(/pattern.svg)',
	backgroundSize: '75px 75px',
	backgroundRepeat: 'repeat',
});
