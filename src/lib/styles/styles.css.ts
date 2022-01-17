import { globalStyle, createGlobalTheme, style, globalFontFace } from '@vanilla-extract/css';
import { vars as themeVars } from '$lib/styles/theme-default.css';
import { modularScale } from 'polished';

const createScale = (ratio: number, base: number) => (steps: number) =>
	`${modularScale(steps, base, ratio)}px`;

const spaceScale = createScale(1.4, 4);

export const globalThemeVars = createGlobalTheme(':root', {
	space: {
		auto: 'auto',
		none: '0',
		'0x': spaceScale(0),
		'1x': spaceScale(1),
		'2x': spaceScale(2),
		'3x': spaceScale(3),
		'4x': spaceScale(4),
		'5x': spaceScale(5),
		'6x': spaceScale(6),
		'7x': spaceScale(7),
		'8x': spaceScale(8)
	},
	borders: {
		none: '0',
		default: '1px',
		wide: '2px'
	},
	stack: {
		none: '0',
		1: spaceScale(2)
	},
	rounded: {
		xs: '0.313rem',
		md: '0.5rem',
		lg: '1rem',
		full: '9999px'
	},
	fonts: {
		fontFamilyBody: '"Open Sans", sans-serif',
		fontFamilyTitle: 'Arial, sans-serif'
	},
	fontSizes: {
		fontSize0: modularScale(0, '14px'),
		fontSize1: modularScale(1, '14px'),
		fontSize2: modularScale(2, '14px'),
		fontSize3: modularScale(3, '14px'),
		fontSize4: modularScale(4, '14px'),
		fontSize5: modularScale(5, '14px')
	},
	widths: {
		full: '100%'
	},
	gridCols: {
		1: 'repeat(1, minmax(0, 1fr))',
		2: 'repeat(2, minmax(0, 1fr))',
		3: 'repeat(3, minmax(0, 1fr))',
		4: 'repeat(4, minmax(0, 1fr))'
	}
});

globalFontFace('Rubik', {
	src: `local(''), url('../fonts/rubik-v14-latin-regular.woff2') format('woff2')`
});

globalStyle('#root', {
	fontSize: globalThemeVars.fontSizes.fontSize1,
	backgroundImage: `linear-gradient(180deg, ${themeVars.color.contentBg} 0%, ${themeVars.color.appBg} 70%)`,
	minHeight: '100vh',
	color: themeVars.color.text,
	fontFamily: globalThemeVars.fonts.fontFamilyBody,
	transition: 'color .2s ease-in, background-color .2s ease-in'
});

export const listUnstyled = style({
	listStyle: 'none'
});