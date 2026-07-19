<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Button from './Button.svelte';
	import { fn } from 'storybook/test';

	import IonSnow from '~icons/ion/snow';

	const { Story } = defineMeta({
		title: 'Buttons/Button',
		component: Button,
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
<Story name="With Icon"><IonSnow /> Button</Story>
<Story name="Icon Only"><IonSnow /></Story>
