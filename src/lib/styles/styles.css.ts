import { createVar, globalStyle, style } from '@vanilla-extract/css';
import { vars } from '$lib/styles/vars.css';
import { vars as themeVars } from '$lib/styles/theme-default.css';

export const themeSwitcherPosition = createVar();

globalStyle('#root', {
	fontSize: vars.fontSizes.fontSize1,
	backgroundImage: `linear-gradient(180deg, ${themeVars.color.contentBg} 0%, ${themeVars.color.appBg} 70%)`,
	minHeight: '100vh',
	color: themeVars.color.text,
	fontFamily: vars.fonts.fontFamilyBody,
	transition: 'color .2s ease-in, background-color .2s ease-in'
});

export const listUnstyled = style({
	listStyle: 'none'
});
