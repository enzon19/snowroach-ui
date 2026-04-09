<script lang="ts">
	import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';
	import { buttonStyles, type ButtonProps } from './index.ts';

	let {
		children,
		size = 'md',
		color = 'primary',
		variant = 'solid',
		pill = false,
		disabled: disabledProp = false,
		loading = false,
		'loading-text': loadingText,
		class: className,
		href,
		...restProps
	}: ButtonProps = $props();

	let disabled = $derived(disabledProp || loading);
	const base = $derived(buttonStyles({ size, color, variant, pill, disabled, className }));
	const buttonProps = $derived(restProps as Omit<HTMLButtonAttributes, 'children' | 'class'>);
	const anchorProps = $derived(restProps as Omit<HTMLAnchorAttributes, 'children' | 'class'>);
</script>

{#snippet childrenOrLoading()}
	{#if loading}
		<div class="relative w-full text-center">
			{loadingText}
			<div class="invisible h-0">
				{@render children()}
			</div>
		</div>
	{:else}
		{@render children()}
	{/if}
{/snippet}

{#if href}
	<a
		href={disabled ? undefined : href}
		aria-disabled={disabled}
		role="button"
		class={base}
		{...anchorProps}
	>
		{@render childrenOrLoading()}
	</a>
{:else}
	<button {disabled} class={base} {...buttonProps}>
		{@render childrenOrLoading()}
	</button>
{/if}
