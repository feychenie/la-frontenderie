import { globalStyle } from '@vanilla-extract/css';
import { themeClass, vars } from '$lib/styles/theme-default.css';
import {
	fontSize0,
	fontSize1,
	fontSize2,
	fontSize3,
	fontSize4,
	fontSize5,
	blue
} from '$lib/styles/vars.css';

import { modularScale } from 'polished';

globalStyle('#root', {
	vars: {
		[fontSize0]: modularScale(0),
		[fontSize1]: modularScale(1),
		[fontSize2]: modularScale(2),
		[fontSize3]: modularScale(3),
		[fontSize4]: modularScale(4),
		[fontSize5]: modularScale(5),
		[blue]: vars.colour.dark
	}
});

globalStyle('#root', {
	fontSize: [fontSize1],
	backgroundColor: [blue]
});
