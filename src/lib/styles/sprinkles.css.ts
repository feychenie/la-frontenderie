import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { vars } from '$lib/styles/vars.css';

const responsiveProperties = defineProperties({
	conditions: {
		mobile: {},
		tablet: { '@media': 'screen and (min-width: 768px)' },
		desktop: { '@media': 'screen and (min-width: 1024px)' }
	},
	defaultCondition: 'mobile',
	properties: {
		marginTop: vars.spaces,
		marginBottom: vars.spaces,
		marginLeft: vars.spaces,
		marginRight: vars.spaces,
		paddingTop: vars.spaces,
		paddingBottom: vars.spaces,
		paddingLeft: vars.spaces,
		paddingRight: vars.spaces,
		display: ['none', 'flex', 'grid', 'block'],
		flexDirection: ['row', 'row-reverse', 'column'],
		width: vars.widths,
		gridTemplateColumns: vars.gridCols,
		gridColumn: vars.gridColSpan,
		gap: vars.spaces,
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
		fontSize: vars.fontSizes
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
