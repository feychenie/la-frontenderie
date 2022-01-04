import { style } from '@vanilla-extract/css';
import { globalThemeVars } from '$lib/styles/styles.css';
import { vars as themeVars } from '$lib/styles/theme-default.css';

export const card = style({
	padding: globalThemeVars.space['0x'],
	borderRadius: globalThemeVars.rounded.md,
	backgroundColor: themeVars.colour.light,
	color: themeVars.colour.dark,
	display: 'flex',
	flexDirection: 'column'
});

export const cardHeader = style({
	paddingInline: globalThemeVars.space['1x'],
	paddingBlock: globalThemeVars.space['2x'],
	backgroundColor: themeVars.colour.primary,
	borderTopLeftRadius: globalThemeVars.rounded.xs,
	borderTopRightRadius: globalThemeVars.rounded.xs,
	fontSize: globalThemeVars.fontSizes.fontSize2,
	fontWeight: 'bold'
});
export const cardBody = style({
	paddingInline: globalThemeVars.space['0x'],
	fontSize: globalThemeVars.fontSizes.fontSize0
});

export const cardFooter = style({
	paddingInline: globalThemeVars.space['0x'],
	display: 'flex',
	flexDirection: 'row',
	marginTop: 'auto',
	paddingBlockStart: globalThemeVars.space['4x'],
	fontSize: globalThemeVars.fontSizes.fontSize0
});
