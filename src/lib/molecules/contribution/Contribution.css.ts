import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '$lib/styles/vars.css';

export const contribution = style({});

globalStyle(`${contribution} > * + *`, {
	marginTop: vars.spaces['4x']
});
