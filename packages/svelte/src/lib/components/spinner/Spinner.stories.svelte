<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Spinner from './Spinner.svelte';
	import { fn } from 'storybook/test';

	const { Story } = defineMeta({
		title: 'Feedback/Spinner',
		component: Spinner,
		tags: ['autodocs'],
		args: {
			onclick: fn()
		},
		argTypes: {
			size: { control: 'select' },
			color: { control: 'select' },
			variant: { control: 'select' }
		},
		parameters: {
			docs: {
				controls: {
					exclude: ['onclick']
				}
			}
		}
	});
</script>

<Story name="Default">Button</Story>
