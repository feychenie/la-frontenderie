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
		display: ['none', 'flex', 'grid', 'block'],
		flexDirection: ['row', 'row-reverse', 'column'],
		width: globalThemeVars.widths,
		gridTemplateColumns: globalThemeVars.gridCols,
		gap: globalThemeVars.space,
		justifyContent: [
			'stretch',
			'flex-start',
			'center',
			'flex-end',
			'space-around',
			'space-between'
		],
		alignItems: ['stretch', 'flex-start', 'center', 'flex-end']
	},
	shorthands: {
		margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
		marginX: ['marginLeft', 'marginRight'],
		marginY: ['marginTop', 'marginBottom']
	}
});

export const sprinkles = createSprinkles(responsiveProperties);
