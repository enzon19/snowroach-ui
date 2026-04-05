import { themes } from 'storybook/theming';
import '../src/routes/layout.css'; // ajuste o caminho para o seu CSS

import type { Preview } from '@storybook/sveltekit';

const preview: Preview = {
	decorators: [
		(Story, context) => {
			const isDark = context.globals.backgrounds?.value === 'dark';
			document.body.classList.toggle('dark', isDark);
			return Story();
		}
	],
	parameters: {
		docs: {
			theme: themes.dark
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		a11y: {
			test: 'todo'
		}
	}
};

export default preview;
