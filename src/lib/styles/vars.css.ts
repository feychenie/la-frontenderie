import { createVar } from '@vanilla-extract/css';

import { hsl, parseToHsl } from 'polished';

let colorsPalette = {};
const tmpName = [];
const baseColors = [
	{ name: 'green', value: '#14532D' },
	{ name: 'blue', value: '#312E81' },
	{ name: 'red', value: '#D0021B' },
	{ name: 'yellow', value: '#FFC20E' },
	{ name: 'orange', value: '#FF6C00' },
	{ name: 'purple', value: '#581C87' },
	{ name: 'pink', value: '#FF2D55' },
	{ name: 'teal', value: '#00A896' },
	{ name: 'gray', value: '#8E8E93' }
];

const colorShades = [0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];

baseColors.forEach(({ name, value }) => {
	colorShades.forEach((shade) => {
		const cssVarName = `${name}${shade * 1000}`;
		tmpName[cssVarName] = createVar();
		const { hue, saturation } = parseToHsl(value);
		colorsPalette = {
			...colorsPalette,
			[tmpName[cssVarName]]: hsl({ hue, saturation, lightness: shade })
		};
	});
});

export const fontSize0 = createVar();
export const fontSize1 = createVar();
export const fontSize2 = createVar();
export const fontSize3 = createVar();
export const fontSize4 = createVar();
export const fontSize5 = createVar();
export { colorsPalette };
