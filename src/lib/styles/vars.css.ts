import { createVar } from '@vanilla-extract/css';

// import { hsl, parseToHsl } from 'polished';

// let colorsPalette = {};
// const tmpName = [];
// const baseColors = [
// 	{ name: 'blue', value: '#292283' },
// 	{ name: 'teal', value: '#19ffff' },
// 	{ name: 'yellow', value: '#ff9801' },
// 	{ name: 'red', value: '#ed442e' },
// 	{ name: 'pink', value: '#ea1e63' },
// ];

// const colorShades = [0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];

// baseColors.forEach(({ name, value }) => {
// 	colorShades.forEach((shade) => {
// 		const cssVarName = `${name}${shade * 1000}`;
// 		tmpName[cssVarName] = createVar();
// 		const { hue, saturation } = parseToHsl(value);
// 		colorsPalette = {
// 			...colorsPalette,
// 			[tmpName[cssVarName]]: hsl({ hue, saturation, lightness: shade })
// 		};
// 	});
// });

export const blue = createVar();
export const teal = createVar();
export const yellow = createVar();
export const red = createVar();
export const pink = createVar();

export const fontSize0 = createVar();
export const fontSize1 = createVar();
export const fontSize2 = createVar();
export const fontSize3 = createVar();
export const fontSize4 = createVar();
export const fontSize5 = createVar();
