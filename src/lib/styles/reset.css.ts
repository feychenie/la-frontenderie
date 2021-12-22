import { globalStyle } from '@vanilla-extract/css';

globalStyle('*, *::before, *::after', {
	boxSizing: 'border-box',
	margin: 0
});

globalStyle('body', {
	WebkitFontSmoothing: 'antialiased'
});

globalStyle('img, picture, video, canvas, svg', {
	display: 'block',
	maxWidth: '100%'
});

globalStyle('input, button, textarea, select', {
	font: 'inherit'
});
