import { globalStyle, style } from '@vanilla-extract/css';
import { globalThemeVars } from '$lib/styles/styles.css';

export const contribution = style({});

globalStyle(`${contribution} > * + *`, {
	marginTop: globalThemeVars.space['4x']
});
