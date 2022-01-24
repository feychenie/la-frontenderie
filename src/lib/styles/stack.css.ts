import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '$lib/styles/vars.css';

export const stack = style({
	vars: {
		'--stack-level': vars.spaces.none
	}
});

export const stackInline = style({
	vars: {
		'--stack-level': vars.spaces.none
	}
});

globalStyle(`${stack} > * + *`, {
	marginTop: 'var(--stack-level)'
});

globalStyle(`${stackInline} > * + *`, {
	marginLeft: 'var(--stack-level)'
});

export const stacks = Object.entries(vars.stack).map(([, value]) => {
	const root = style({});
	globalStyle(`${root} > *`, {
		vars: {
			'--stack-level': value
		}
	});

	return root;
});
