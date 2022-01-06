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
		paddingTop: globalThemeVars.space,
		paddingBottom: globalThemeVars.space,
		paddingLeft: globalThemeVars.space,
		paddingRight: globalThemeVars.space,
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
		alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
		position: ['relative', 'absolute', 'fixed', 'sticky'],
		fontSize: globalThemeVars.fontSizes
	},
	shorthands: {
		margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
		marginX: ['marginLeft', 'marginRight'],
		marginY: ['marginTop', 'marginBottom'],
		padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
		paddingX: ['paddingLeft', 'paddingRight'],
		paddingY: ['paddingTop', 'paddingBottom']
	}
});

export const sprinkles = createSprinkles(responsiveProperties);
