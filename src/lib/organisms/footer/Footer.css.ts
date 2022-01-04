import { style } from '@vanilla-extract/css';
import { vars as themeVars } from '$lib/styles/theme-default.css';
import { globalThemeVars } from '$lib/styles/styles.css';
export const footer = style({
	marginTop: 'auto',
	borderTop: `1px solid ${themeVars.colour.primary}`,
	paddingBlock: globalThemeVars.space['3x']
});
