import { globalStyle } from '@vanilla-extract/css';
import {
	fontSize0,
	fontSize1,
	fontSize2,
	fontSize3,
	fontSize4,
	fontSize5,
	colorsPalette
} from '$lib/styles/vars.css';

import { modularScale } from 'polished';

console.log(colorsPalette);

globalStyle('body', {
	vars: {
		[fontSize0]: modularScale(0),
		[fontSize1]: modularScale(1),
		[fontSize2]: modularScale(2),
		[fontSize3]: modularScale(3),
		[fontSize4]: modularScale(4),
		[fontSize5]: modularScale(5),
		...colorsPalette
	}
});

globalStyle('body', {
	fontSize: [fontSize1]
});
