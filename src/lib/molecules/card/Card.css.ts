import { style } from '@vanilla-extract/css';
import { vars } from '$lib/styles/vars.css';
import { vars as themeVars } from '$lib/styles/theme-default.css';
import { calc } from '@vanilla-extract/css-utils';

export const card = style({
	width: calc('100%').subtract(vars.spaces['5x']).toString(),
	position: 'relative',
	selectors: {
		'&:hover': {
			vars: {
				[vars.stack['1']]: vars.spaces['3x']
			}
		}
	}
});

export const cardOutline = style({
	borderRadius: vars.rounded.xs,
	border: `solid ${vars.borders.wide} ${themeVars.color.active}`
});

export const cardContent = style({
	position: 'relative',
	zIndex: 10,
	color: themeVars.color.text,
	display: 'flex',
	flexDirection: 'column',
	padding: vars.spaces['4x'],
	backgroundColor: themeVars.color.contentBg
});

export const cardHeader = style({
	fontSize: vars.fontSizes.fontSize2,
	fontFamily: vars.fonts.fontFamilyTitle,
	fontWeight: 'bold',
	paddingInlineStart: vars.spaces['3x']
});

export const cardHeaderLink = style({});

export const cardBody = style({
	fontSize: vars.fontSizes.fontSize0
});

export const cardFooter = style({
	display: 'flex',
	flexDirection: 'row',
	marginTop: 'auto',
	paddingBlockStart: vars.spaces['4x'],
	fontSize: vars.fontSizes.fontSize0
});

export const cardEcho = style({
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	transition: 'transform .2s ease-out',
	pointerEvents: 'none',
	opacity: .8,
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
	transform: `translate3d(${vars.stack[1]}, ${vars.stack[1]}, 0)`
});

export const cardEcho2 = style({
	borderColor: themeVars.color.activeDarker,
	backgroundColor: themeVars.color.contentBgDarker,
	zIndex: 6,
	transform: `translate3d(
		${calc(vars.stack[1]).multiply(2).toString()},
		${calc(vars.stack[1]).multiply(2).toString()},
		0
	)`
});

export const cardEcho3 = style({
	borderColor: themeVars.color.activeDarker,
	backgroundColor: themeVars.color.contentBgDarker,
	zIndex: 5,
	transform: `translate3d(
		${calc(vars.stack[1]).multiply(3).toString()},
		${calc(vars.stack[1]).multiply(3).toString()},
		0
	)`
});

export const cardEcho4 = style({
	borderColor: themeVars.color.activeDarker,
	backgroundColor: themeVars.color.contentBgDarker,
	zIndex: 4,
	transform: `translate3d(
		${calc(vars.stack[1]).multiply(4).toString()},
		${calc(vars.stack[1]).multiply(4).toString()},
		0
	)`
});

export const cardEcho5 = style({
	borderColor: themeVars.color.activeDarker,
	backgroundColor: themeVars.color.contentBgDarker,
	zIndex: 3,
	transform: `translate3d(
		${calc(vars.stack[1]).multiply(5).toString()},
		${calc(vars.stack[1]).multiply(5).toString()},
		0
	)`
});
