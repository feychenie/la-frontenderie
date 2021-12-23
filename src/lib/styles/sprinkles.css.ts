import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { globalThemeVars } from '$lib/styles/styles.css';

const responsiveProperties = defineProperties({
	conditions: {
		mobile: {},
		tablet: { '@media': 'screen and (min-width: 768px)' },
		desktop: { '@media': 'screen and (min-width: 1024px)' }
	},
	defaultCondition: 'mobile',
	properties: {
		marginTop: globalThemeVars.space,
		marginBottom: globalThemeVars.space,
		marginLeft: globalThemeVars.space,
		marginRight: globalThemeVars.space,
		display: ['none', 'flex', 'grid'],
		width: globalThemeVars.widths,
		gridTemplateColumns: globalThemeVars.gridCols,
		gap: globalThemeVars.space
	},
	shorthands: {
		margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
		marginX: ['marginLeft', 'marginRight'],
		marginY: ['marginTop', 'marginBottom']
	}
});

export const sprinkles = createSprinkles(responsiveProperties);
