import { style } from '@vanilla-extract/css';
import { globalThemeVars } from '$lib/styles/styles.css';
import { vars as themeVars } from '$lib/styles/theme-default.css';
import { calc } from '@vanilla-extract/css-utils';

export const card = style({
	width: calc('100%').subtract(globalThemeVars.space['5x']).toString(),
	position: 'relative',
	selectors: {
		'&:hover': {
			vars: {
				[globalThemeVars.stack['1']]: globalThemeVars.space['4x']
			}
		}
	}
});

export const cardOutline = style({
	borderRadius: globalThemeVars.rounded.xs,
	border: `solid ${globalThemeVars.borders.wide} ${themeVars.color.active}`
});

export const cardContent = style({
	position: 'relative',
	zIndex: 10,
	color: themeVars.color.text,
	display: 'flex',
	flexDirection: 'column',
	padding: globalThemeVars.space['4x'],
	backgroundColor: themeVars.color.contentBg
});

export const cardHeader = style({
	fontSize: globalThemeVars.fontSizes.fontSize2,
	fontWeight: 'bold',
	paddingInlineStart: globalThemeVars.space['3x']
});

export const cardHeaderLink = style({});

export const cardBody = style({
	fontSize: globalThemeVars.fontSizes.fontSize0
});

export const cardFooter = style({
	display: 'flex',
	flexDirection: 'row',
	marginTop: 'auto',
	paddingBlockStart: globalThemeVars.space['4x'],
	fontSize: globalThemeVars.fontSizes.fontSize0
});

export const cardEcho = style({
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	transition: 'all .2s ease-out',
	pointerEvents: 'none',
	selectors: {
		[`${card}:hover &`]: {
			transitionTimingFunction: 'ease-in'
		}
	}
});

export const cardEcho1 = style({
	borderColor: themeVars.color.activeDark,
	backgroundColor: themeVars.color.contentBgDark,
	zIndex: 8,
	transform: `translate3d(${globalThemeVars.stack[1]}, ${globalThemeVars.stack[1]}, 0)`
});

export const cardEcho2 = style({
	borderColor: themeVars.color.activeDarker,
	backgroundColor: themeVars.color.contentBgDarker,
	zIndex: 6,
	transform: `translate3d(
		${calc(globalThemeVars.stack[1]).multiply(2).toString()},
		${calc(globalThemeVars.stack[1]).multiply(2).toString()},
		0
	)`
});

export const cardEcho3 = style({
	borderColor: themeVars.color.activeDarker,
	backgroundColor: themeVars.color.contentBgDarker,
	zIndex: 5,
	transform: `translate3d(
		${calc(globalThemeVars.stack[1]).multiply(3).toString()},
		${calc(globalThemeVars.stack[1]).multiply(3).toString()},
		0
	)`
});

export const cardEcho4 = style({
	borderColor: themeVars.color.activeDarker,
	backgroundColor: themeVars.color.contentBgDarker,
	zIndex: 4,
	transform: `translate3d(
		${calc(globalThemeVars.stack[1]).multiply(4).toString()},
		${calc(globalThemeVars.stack[1]).multiply(4).toString()},
		0
	)`
});

export const cardEcho5 = style({
	borderColor: themeVars.color.activeDarker,
	backgroundColor: themeVars.color.contentBgDarker,
	zIndex: 3,
	transform: `translate3d(
		${calc(globalThemeVars.stack[1]).multiply(5).toString()},
		${calc(globalThemeVars.stack[1]).multiply(5).toString()},
		0
	)`
});
