import { createTheme } from '@vanilla-extract/css';
import { vars as defaultThemeVars } from '$lib/styles/theme-default.css';

export const darkTheme = createTheme(defaultThemeVars, defaultThemeVars);
